import axios, { AxiosError } from 'axios';

const api = axios.create({
  baseURL: "https://localhost:7181/api", // That same API link in launchSettings
});

export const getPokemon = async (name: string) => {
  try {
    const response = await api.get(`/pokemon/${name.toLowerCase()}`);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    
    if (axiosError.response) {
      const status = axiosError.response.status;

      if (status === 404) {
        throw new Error("POKEMON_NOT_FOUND");
      }
      
      if (status >= 500) {
        throw new Error("SERVER_ERROR");
      }
    }
    
    throw new Error("NETWORK_ERROR");
  }
};