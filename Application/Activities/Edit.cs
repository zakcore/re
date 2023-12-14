using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Edit
    {
        public class Command:IRequest<Result<Unit>>{

        public Activity Activity { get; set; }       
        
            }

        public class Handler :IRequestHandler<Command,Result<Unit>>
        {
             private readonly DataContext _context;
             private readonly IMapper _mapper;
            public Handler(DataContext context,IMapper mapper)
            {
            _mapper = mapper;
            _context = context;
            
            }
            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
            var act=await _context.Activities.FindAsync(request.Activity.Id);
            if(act==null) return null;
            _mapper.Map(request.Activity,act);
            var result=await _context.SaveChangesAsync()>0;
            if(!result) return Result<Unit>.Failure("cann't edit activity");
             return Result<Unit>.Success(Unit.Value);

            }
        }

    }
}