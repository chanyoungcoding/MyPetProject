import axios from 'axios';
import { useQuery } from 'react-query';
import { PetMapData, PetFoodData } from '../interface/interface';

export function useApiPetMapData(url:string) {
  const {data, isLoading, isError} = useQuery<PetMapData[]>({ 
    queryKey: ['PetMapData'], 
    queryFn: async () => {
      const response = await axios.get(url);
      return response.data;
  }})
  return {data, isLoading, isError }
}

export function useApiPetFoodData(url:string, name:string | undefined) {
  const {data, isLoading, isError} = useQuery<PetFoodData[]>({ 
    queryKey: ['PetFoodData'], 
    queryFn: async () => {
      const response = await axios.get(`${url}?name=${name}`);
      return response.data;
  }})
  return {data, isLoading, isError }
}