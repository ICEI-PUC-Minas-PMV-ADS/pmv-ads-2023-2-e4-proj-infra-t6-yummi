using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Yummi.Backend.Data;
using Yummi.Backend.Dtos.Users;
using Yummi.Backend.Models;

namespace Yummi.Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _userRepository;
        private readonly IConfiguration _configuration;

        public UserController(IUserRepository userRepository, IConfiguration configuration)
        {
            _userRepository = userRepository;
            _configuration = configuration;
        }

        [HttpPost("register")]
        [AllowAnonymous]
        public async Task<ActionResult<User>> CreateUser([FromBody] UserCreateDto userCreateDto)
        {
            try
            {
                var existUser = _userRepository.GetAllUsers().FirstOrDefault(e => e.Email == userCreateDto.Email);

                if (existUser != null)
                    return Conflict("Esse usuário já está cadastrado!");

                var user = new User
                {
                    Email = userCreateDto.Email,
                    Name = userCreateDto.Name,
                    Password = userCreateDto.Password
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
        public async Task<ActionResult<User>>LoginUser([FromBody] UserLoginDto userLoginDto)
        {
            try
            {
                var user = await _userRepository.LoginAsync(userLoginDto.Email, userLoginDto.Password);
                if (user == null)
                    return NotFound("Usuário não encontrado!");

                var token = GetToken(user);
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

        [HttpGet("{id}")]
        [Authorize]
        public async Task<ActionResult<User>> GetUser(string id)
        {
            var userResult = await _userRepository.GetUserByIdAsync(id);
            return Ok(userResult);
        }

        [HttpPut("update/{id}")]
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
                    Email = userUpdateDto.Email,
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

        private string GetToken(User user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_configuration["JWT_Secret"]);
            var tokenDescription = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[] { new Claim(ClaimTypes.Name, user.Name) }),
                Expires = DateTime.UtcNow.AddHours(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescription);
            return tokenHandler.WriteToken(token);
        }

    }
}
