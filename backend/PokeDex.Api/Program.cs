using PokeDex.Infrastructure.Configuration;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddInfrastructure();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("PokeDexPolicy", policy =>
    {
        policy.WithOrigins(
                "https://pokedex-mu-inky-65.vercel.app", 
                "http://localhost:5173", 
                "https://localhost:5173"
            )
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
// Habilitamos o Swagger em todos os ambientes para facilitar o teste inicial do deploy
app.UseSwagger();
app.UseSwaggerUI();

// Comentamos o UseHttpsRedirection pois o Render já lida com SSL e redirecionamento de forma externa.
// app.UseHttpsRedirection();

app.UseAuthorization();

app.UseCors("PokeDexPolicy");

app.MapControllers();

app.Run();
