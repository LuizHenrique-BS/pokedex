// Defina a interface baseada no que o seu .NET retorna (PokemonDto)
export interface PokemonData {
  id: number;
  name: string;
  types: string[];
  imageUrl: string;
  height: number;
  weight: number;
  description: string;
  games: string[];
  stats: Record<string, number>;
}