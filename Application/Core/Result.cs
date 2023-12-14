using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;

namespace Application.Core
{
    public class Result<T>
    {
        public T Value { get; set; }
        public bool IsSuccess { get; set; }
        public string Error { get; set; }
        public static Result<T>Success(T value)=>new() { IsSuccess=true,Value=value};
        public static Result<T>Failure(string erorr)=>new() { IsSuccess=false,Error=erorr};
    }
}