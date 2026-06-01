using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using RestauranteAPI.DTOs;
using RestauranteAPI.Servicios.Interfaces;

namespace RestauranteAPI.Servicios.Implementaciones
{
    public class AuthService : IAuthService
    {
        private readonly IConfiguration _config;

        public AuthService(IConfiguration config)
        {
            _config = config;
        }

        public LoginResponseDTO? Login(LoginRequestDTO loginRequest)
        {
            // CREDENCIALES TEMPORALES PARA DESARROLLO
            if (loginRequest.Email == "admin@restaurante.com" && loginRequest.Password == "Admin123*")
            {
                var token = GenerateJwtToken(loginRequest.Email, "Admin");
                return new LoginResponseDTO
                {
                    Token = token,
                    Email = loginRequest.Email,
                    Role = "Admin"
                };
            }

            return null;
        }

        private string GenerateJwtToken(string email, string role)
        {
            var jwtSettings = _config.GetSection("Jwt");
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings["Key"]!));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(ClaimTypes.Email, email),
                new Claim(ClaimTypes.Role, role),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var token = new JwtSecurityToken(
                issuer: jwtSettings["Issuer"],
                audience: jwtSettings["Audience"],
                claims: claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
