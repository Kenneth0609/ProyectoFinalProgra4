using RestauranteAPI.DTOs;

namespace RestauranteAPI.Servicios.Interfaces
{
    public interface IListaEsperaService
    {
        public List<ListaEsperaResponseDTO> GettAllListaEsperas();

        public ListaEsperaResponseDTO GetListaEsperaById(int listaEsperaId);

        public ListaEsperaResponseDTO CrearListaEspera(ListaEsperaCreateDTO listaEsperaDTO);
        public ListaEsperaResponseDTO ActualizarListaEspera(int listaesperaId, ListaEsperaCreateDTO listaesperaDTO);
        public ListaEsperaResponseDTO ActualizarEstado(int listaEsperaId, int estadoId);

        public void PromoverAReserva(int listaEsperaId, int mesaId);

    }
}