import axios from 'axios';
import { useMutation, useQuery } from 'react-query';
import { PetMapData, PetFoodData, UserRegisterData, UserLoginData } from '../interface/interface';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

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

export const useRegisterMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (data: UserRegisterData) => await axios.post('http://localhost:4000/register', data),
    mutationKey: 'Register',
    onSuccess: (e) => {
      alert('회원가입에 성공하였습니다.');
      console.log(e);
    },
    onError: () => {
      navigate('/')
    }
  })
}

export const useLoginMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (data: UserLoginData) => await axios.post('http://localhost:4000/login', data),
    mutationKey: 'Login',
    onSuccess: (e) => {
      alert('환영합니다.');
      Cookies.set('jwt', e.data.token, { expires: 1 / 24})
      console.log(e.data.token)
    },
    onError: () => {
      navigate('/login')
    }
  })
}


//Test

export function useTest(url:string, jwt:string | undefined) {
  const {data, isLoading, isError} = useQuery({ 
    queryKey: ['Test'], 
    queryFn: async () => {
      const response = await axios.get(`${url}?jwt=${jwt}`);
      return response.data;
  }})
  return {data, isLoading, isError }
}