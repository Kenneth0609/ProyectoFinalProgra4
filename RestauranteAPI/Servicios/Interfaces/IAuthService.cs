using RestauranteAPI.DTOs;

namespace RestauranteAPI.Servicios.Interfaces
{
    public interface IAuthService
    {
        LoginResponseDTO? Login(LoginRequestDTO loginRequest);
    }
}
