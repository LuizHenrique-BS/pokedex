import axios, { AxiosError } from 'axios';

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

const api = axios.create({
  baseURL: 'https://localhost:7181/api', // Ajuste para a sua porta real
});

export const getPokemon = async (name: string) => {
  try {
    const response = await api.get(`/pokemon/${name.toLowerCase()}`);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response?.status === 404) {
      throw new Error('Pokémon not Found!');
    }
    throw new Error('An error occurred while retrieving the data.');
  }
};