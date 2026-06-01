namespace RestauranteAPI.Entidades
{
    public class ListaEspera
    {
        public int Id { get; set; }
        public int ClienteId { get; set; }
        public DateOnly Fecha { get; set; }
        public TimeOnly HoraInicio { get; set; }
        public TimeOnly HoraFin { get; set; }
        public int Cantidad { get; set; }
        public int EstadoId { get; set; }
        public string? Observaciones { get; set; }
        public DateTime FechaCreacion { get; set; } = DateTime.Now;
    }
}
