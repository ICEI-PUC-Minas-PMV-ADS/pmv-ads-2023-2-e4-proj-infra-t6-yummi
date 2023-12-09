using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Yummi.Backend.Data.Interfaces;
using Yummi.Backend.Dtos.Users;
using Yummi.Backend.Models;
using Yummi.Backend.Service;

namespace Yummi.Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _userRepository;
        private readonly IConfiguration _configuration;
        private readonly ILogger<UserController> _logger;

        public UserController(IUserRepository userRepository, IConfiguration configuration, ILogger<UserController> logger)
        {
            _userRepository = userRepository;
            _configuration = configuration;
            _logger = logger;
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult<User>> CreateUser([FromBody] UserCreateDto userCreateDto)
        {
            try
            {
                var existUser = _userRepository.GetAllUsers().FirstOrDefault(e => e.Login == userCreateDto.Login);

                if (existUser != null)
                {
                    string logMessage = "Esse usuário já está cadastrado!";
                    _logger.LogDebug(message: logMessage);
                    return Conflict(logMessage);
                }

                // Se usuario administrador o login será via email, 
                // Porém se usuario cliente o login será via Id Unico 
                // do dispositivo, não sendo necessário email
                var user = new User
                {
                    Email = userCreateDto.Perfil == Enum.PerfilEnum.ADMINISTRADOR ? userCreateDto.Login : string.Empty,
                    Login = userCreateDto.Login,
                    Name = userCreateDto.Name,
                    Password = userCreateDto.Password,
                    Perfil = userCreateDto.Perfil
                };

                await _userRepository.CreateUserAsync(user);
                return Ok(user);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost("authenticate")]
        [AllowAnonymous]
        public async Task<ActionResult<User>> LoginUser([FromBody] UserLoginDto userLoginDto)
        {
            try
            {
                var user = await _userRepository.LoginAsync(login: userLoginDto.Login, password: userLoginDto.Password);
                if (user == null)
                    return NotFound("Usuário não encontrado!");

                var token = Activator.CreateInstance<TokenService>().GetToken(user: user, _configuration);
                return Ok(new
                {
                    user = user,
                    token = token
                });
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet]
        public ActionResult GetAllUsers(string name)
        {
            try
            {
                var users = _userRepository.GetAllUsers().AsQueryable();

                if (!string.IsNullOrEmpty(name))
                    users = users.Where(e => e.Name.ToLower().StartsWith(name.Trim().ToLower()));

                return Ok(users.OrderBy(e => e.Name).ToList());
            }
            catch (Exception e)
            {
                _logger.LogError(e, "Erro ao buscar todos os usuários");
                return BadRequest(e.Message);
            }
        }

        [HttpGet("{id}")]
        [Authorize]
        public async Task<ActionResult<User>> GetUser(string id)
        {
            var userResult = await _userRepository.GetUserByIdAsync(id);

            if (userResult == null)
                return NotFound("Esse usuário não foi encontrado!");
            return Ok(userResult);
        }

        [HttpPut("{id}")]
        [Authorize]
        public async Task<ActionResult<User>> UpdateUser([FromBody] UserUpdateDto userUpdateDto, string id)
        {
            try
            {
                var existUser = _userRepository.GetAllUsers().FirstOrDefault(e => e.Id == id);

                if (existUser == null)
                    return NotFound("Esse usuário não foi encontrado!");

                var user = new User
                {
                    Id = id,
                    Login = userUpdateDto.Login,
                    Name = userUpdateDto.Name,
                    Password = userUpdateDto.Password
                };

                await _userRepository.UpdateUserAsync(user);
                return Ok(user);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpDelete("{id}")]
        [Authorize]
        public async Task<ActionResult<User>> DeleteUser(string id)
        {
            try
            {
                var existUser = _userRepository.GetAllUsers().FirstOrDefault(e => e.Id == id);

                if (existUser == null)
                    return NotFound("Esse usuário não foi encontrado!");

                await _userRepository.DeleteUserAsync(id);
                return Ok(id);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
