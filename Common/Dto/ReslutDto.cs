namespace Common.Dto
{
    public class ReslutDto
    {
        public bool IsSuccess { get; set; }
        public string Message { get; set; }
    }
    public class ReslutDto<T>
    {
        public bool IsSuccess { get; set; }
        public string Message { get; set; }
        public T Data { get; set; }
    }
}
