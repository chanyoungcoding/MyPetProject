import axios from 'axios';
import { useQuery } from 'react-query';

interface PetMapData {
  번호: number;
  Name: string;
  buildingName: string;
  address: string;
  phoneNumber: string | undefined;
  latitude: number;
  longitude: number; 
}

export function useApiPetMapData(url:string) {
  const {data, isLoading, isError} = useQuery<PetMapData[]>({ 
    queryKey: ['PetMapData'], 
    queryFn: async () => {
      const response = await axios.get(url);
      return response.data;
  }})
  return {data, isLoading, isError }
}