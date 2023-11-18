using Bogus;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using MongoDB.Driver.Linq;
using Moq;
using System.Net;
using Yummi.Backend.Controllers;
using Yummi.Backend.Data.Interfaces;
using Yummi.Backend.Dtos.Users;
using Yummi.Backend.Enum;
using Yummi.Backend.Models;

namespace Yummi.Backend.Test.controller;

public class UserControllerTest
{
    private Mock<IUserRepository> _userRepositoryMock;
    private Mock<ILogger<UserController>> _loggerMock;
    private UserController _userController;
    private Faker<UserCreateDto> _userCreateFaker;
    private Faker<UserLoginDto> _userLoginFaker;
    private Faker<UserUpdateDto> _userUpdateFaker;

    [SetUp]
    public void Setup()
    {
        _userRepositoryMock = new Mock<IUserRepository>();
        _loggerMock = new Mock<ILogger<UserController>>();

        var appSettings = new Dictionary<string, string>
        {
            { "JWT_Secret", "$2y$10$GgW2Qp1CKSCgZ.OtSEPlau3ApwkajFbCtjs/Rp8nVHmFcEBkDwr1K" }
        };

        var configuration = new ConfigurationBuilder().AddInMemoryCollection(appSettings).Build();

        _userController = new UserController(_userRepositoryMock.Object, configuration, _loggerMock.Object);

        _userCreateFaker = new Faker<UserCreateDto>("pt_BR")
            .RuleFor(e => e.Login, f => f.Person.UserName)
            .RuleFor(e => e.Name, f => f.Person.FullName)
            .RuleFor(e => e.Password, f => f.Person.Random.AlphaNumeric(6))
            .RuleFor(e => e.Perfil, f => f.Random.Enum<PerfilEnum>());

        _userLoginFaker = new Faker<UserLoginDto>("pt_BR")
            .RuleFor(e => e.Login, f => f.Person.UserName)
            .RuleFor(e => e.Password, f => f.Person.Random.AlphaNumeric(6));

        _userUpdateFaker = new Faker<UserUpdateDto>("pt_BR")
            .RuleFor(e => e.Name, f => f.Person.FullName)
            .RuleFor(e => e.Login, f => f.Person.UserName)
            .RuleFor(e => e.Password, f => f.Person.Random.AlphaNumeric(6));
    }

    [Test]
    public async Task ShouldReturnSuccessWhenCreateUser()
    {
        // arrange
        var user = _userCreateFaker.Generate();

        // act
        _userRepositoryMock.Setup(e => e.GetAllUsers()).Returns(() => MockMongoQueryableUser());
        _userRepositoryMock.Setup(e => e.CreateUserAsync(It.IsAny<User>())).Returns(Task.CompletedTask);

        var actionResult = await _userController.CreateUser(user);
        var result = actionResult.Result as OkObjectResult;

        // assert
        Assert.That(result?.StatusCode, Is.EqualTo((int)HttpStatusCode.OK));
    }

    [Test]
    public async Task ShouldReturnConflictWhenCreateExistingUser()
    {
        // arrange
        var user = _userCreateFaker.Generate();

        // act
        var listUsers = new List<User>
        {
            new User
            {
                Id = Guid.NewGuid().ToString(),
                Login = user.Login,
                Name = user.Name,
                Password = user.Password,
                Perfil = user.Perfil,
                Active = true
            }
        };

        _userRepositoryMock.Setup(e => e.GetAllUsers()).Returns(() => MockMongoQueryableUser(listUsers));
        _userRepositoryMock.Setup(e => e.CreateUserAsync(It.IsAny<User>())).Returns(Task.CompletedTask);

        var actionResult = await _userController.CreateUser(user);
        var result = actionResult.Result as ConflictObjectResult;

        // assert
        Assert.That(result?.StatusCode, Is.EqualTo((int)HttpStatusCode.Conflict));
    }

    private IMongoQueryable<User> MockMongoQueryableUser(List<User> users = null)
    {
        users ??= new List<User>();

        var mockMongoQueryable = new Mock<IMongoQueryable<User>>();

        mockMongoQueryable.As<IQueryable<User>>().Setup(x => x.Provider).Returns(users.AsQueryable().Provider);
        mockMongoQueryable.As<IQueryable<User>>().Setup(x => x.Expression).Returns(users.AsQueryable().Expression);
        mockMongoQueryable.As<IQueryable<User>>().Setup(x => x.ElementType).Returns(users.AsQueryable().ElementType);
        mockMongoQueryable.As<IQueryable<User>>().Setup(x => x.GetEnumerator()).Returns(() => users.GetEnumerator());

        return mockMongoQueryable.Object;
    }

    [Test]
    public async Task ShouldPerformUserLoginWithSuccess()
    {
        // arrange
        var user = _userLoginFaker.Generate();

        // act
        _userRepositoryMock
            .Setup(e => e.LoginAsync(It.IsAny<string>(), It.IsAny<string>()))
            .Returns(Task.FromResult(new User
            {
                Login = user.Login,
                Password = user.Password,
                Name = new Faker().Person.FullName
            }));

        var loginResult = await _userController.LoginUser(user);
        var result = loginResult.Result as OkObjectResult;

        // assert
        Assert.That(result?.StatusCode, Is.EqualTo((int)HttpStatusCode.OK));

    }

    [Test]
    public async Task ShouldReturnErrorWhenUserIsNotFoundWhenLogin()
    {
        // arrange
        var user = _userLoginFaker.Generate();

        // act
        _userRepositoryMock.Setup(e => e.LoginAsync(It.IsAny<string>(), It.IsAny<string>())).Returns(Task.FromResult((User)null));

        var loginResult = await _userController.LoginUser(user);
        var result = loginResult.Result as ObjectResult;

        // assert
        Assert.That(result?.StatusCode, Is.EqualTo((int)HttpStatusCode.NotFound));
        Assert.AreEqual("Usuário não encontrado!", result.Value);

    }

    [Test]
    public async Task ShouldGetUserByIdWithSuccess()
    {

        // arrange
        var id = Guid.NewGuid().ToString();

        // act
        _userRepositoryMock.Setup(e => e.GetUserByIdAsync(It.IsAny<string>())).Returns(Task.FromResult(new User
        {
            Id = id,
            Login = new Faker().Person.UserName,
            Password = new Faker().Random.AlphaNumeric(6),
            Name = new Faker().Person.FullName
        }));

        var userFound = await _userController.GetUser(id);
        var result = userFound.Result as OkObjectResult;
        var userResult = result.Value as User;

        // assert
        Assert.That(result?.StatusCode, Is.EqualTo((int)HttpStatusCode.OK));
        Assert.AreEqual(id, userResult.Id);
    }

    [Test]
    public async Task ShouldReturnErrorWhenUserIsNotFoundWhenById()
    {

        // arrange
        var id = Guid.NewGuid().ToString();

        // act
        _userRepositoryMock.Setup(e => e.GetUserByIdAsync(It.IsAny<string>())).Returns(Task.FromResult((User)null));

        var userFound = await _userController.GetUser(id);
        var result = userFound.Result as ObjectResult;

        // assert
        Assert.That(result?.StatusCode, Is.EqualTo((int)HttpStatusCode.NotFound));
        
    }

    [Test]
    public async Task ShouldUpdateUserWithSuccess() 
    {
        // arrange
        var id = Guid.NewGuid().ToString();
        var user = _userUpdateFaker.Generate();

        // act
        var listUsers = new List<User>
        {
            new User
            {
                Id = id,
                Name = user.Name,
                Password = user.Password,
                Active = true
            }
        };
        _userRepositoryMock.Setup(e => e.GetAllUsers()).Returns(() => MockMongoQueryableUser(listUsers)); ;

        var actionResult = await _userController.UpdateUser(user, id);
        var result = actionResult.Result as OkObjectResult;

        // assert
        Assert.IsNotNull(actionResult);
        
    }

    [Test]
    public async Task ShouldReturnErrorWhenUserIsNotFoundWhenUpdate()
    {
        // arrange
        var id = Guid.NewGuid().ToString();
        var user = _userUpdateFaker.Generate();

        // act
        _userRepositoryMock.Setup(e => e.GetAllUsers()).Returns(() => MockMongoQueryableUser());
        _userRepositoryMock.Setup(e => e.UpdateUserAsync(It.IsAny<User>())).Returns(Task.FromResult((User)null));

        var actionResult = await _userController.UpdateUser(user, id);
        var result = actionResult.Result as ObjectResult;

        // assert
        Assert.That(result?.StatusCode, Is.EqualTo((int)HttpStatusCode.NotFound));
    }

    [Test]
    public async Task ShouldDeleteUserWithSuccess() 
    {

        // arrange
        var id = Guid.NewGuid().ToString();

        // act
        var listUsers = new List<User>
        {
            new User
            {
                Id = id,
                Login = new Faker().Person.UserName,
                Password = new Faker().Random.AlphaNumeric(6),
                Name = new Faker().Person.FullName,
                Active = true
            }
        };

        _userRepositoryMock.Setup(e => e.GetAllUsers()).Returns(() => MockMongoQueryableUser(listUsers));
        _userRepositoryMock.Setup(e => e.DeleteUserAsync(It.IsAny<string>())).Returns(Task.CompletedTask);

        var actionResult = await _userController.DeleteUser(id);
        var result = actionResult.Result as OkObjectResult;

        // assert
        Assert.That(result?.StatusCode, Is.EqualTo((int)HttpStatusCode.OK));

    }

    [Test]
    public async Task ShouldReturnErrorWhenUserIsNotFoundWhenDelete()
    {
        // arrange
        var id = Guid.NewGuid().ToString();

        // act
        _userRepositoryMock.Setup(e => e.GetAllUsers()).Returns(() => MockMongoQueryableUser());
        _userRepositoryMock.Setup(e => e.DeleteUserAsync(It.IsAny<string>())).Returns(Task.FromResult((User)null));

        var actionResult = await _userController.DeleteUser(id);
        var result = actionResult.Result as ObjectResult;

        // assert
        Assert.That(result?.StatusCode, Is.EqualTo((int)HttpStatusCode.NotFound));
    }
}