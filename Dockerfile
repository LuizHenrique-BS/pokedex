# Use the SDK image to build the application
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# Copy the solution and project files to restore dependencies
# This layer is cached if the project files haven't changed
COPY ["PokeDex.sln", "./"]
COPY ["backend/PokeDex.Api/PokeDex.Api.csproj", "backend/PokeDex.Api/"]
COPY ["backend/PokeDex.Application/PokeDex.Application.csproj", "backend/PokeDex.Application/"]
COPY ["backend/PokeDex.Domain/PokeDex.Domain.csproj", "backend/PokeDex.Domain/"]
COPY ["backend/PokeDex.Infrastructure/PokeDex.Infrastructure.csproj", "backend/PokeDex.Infrastructure/"]

# Restore dependencies
RUN dotnet restore "backend/PokeDex.Api/PokeDex.Api.csproj"

# Copy the rest of the source code
COPY . .

# Build and publish the application
WORKDIR "/app/backend/PokeDex.Api"
RUN dotnet publish "PokeDex.Api.csproj" -c Release -o /app/publish /p:UseAppHost=false

# Use the ASP.NET runtime image for the final stage
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app

# Expose the port (Render uses the PORT environment variable, but 8080 is default for .NET 8)
EXPOSE 8080
ENV ASPNETCORE_URLS=http://+:8080

# Copy the published output from the build stage
COPY --from=build /app/publish .

# Define the entry point for the application
ENTRYPOINT ["dotnet", "PokeDex.Api.dll"]
