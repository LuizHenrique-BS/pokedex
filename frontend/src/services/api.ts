import axios, { AxiosError } from "axios";
import { HttpStatus } from "../enums/HttpStatus";

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
      if (axiosError.response.status === HttpStatus.NOT_FOUND) {
        throw new Error("Pokémon not Found. Try another name!");
      } else if (axiosError.response.status === HttpStatus.INTERNAL_SERVER_ERROR) {
        throw new Error("Server internal Error!");
      }
    }
    
    throw new Error("Network error! Please check your connection.");
  }
};
