namespace RestauranteAPI.DTOs
{
   
    public class ListaEsperaCreateDTO
    {
        public int ClienteId { get; set; }
        public DateOnly Fecha { get; set; }
        public TimeOnly HoraInicio { get; set; }
        public TimeOnly HoraFin { get; set; }
        public int Cantidad { get; set; }
        public string? Observaciones { get; set; }
    }

    public class ListaEsperaResponseDTO
    {
        public int Id { get; set; }
        public int ClienteId { get; set; }
        public DateOnly Fecha { get; set; }
        public TimeOnly HoraInicio { get; set; }
        public TimeOnly HoraFin { get; set; }
        public int Cantidad { get; set; }
        public int EstadoId { get; set; }
        public string? Observaciones { get; set; }
        public DateTime FechaCreacion { get; set; }
    }

    public class ListaEsperaUpdateEstadoDTO
    {
        public int EstadoId { get; set; }
    }
}
