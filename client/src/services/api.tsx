import axios, { AxiosError } from 'axios';
import { useMutation, useQuery } from 'react-query';
import { PetMapData, PetFoodData, UserRegisterData, UserLoginData, ImgRegisterData, UserData, PetFoodRegisterData, PetBuildingRegister } from '../interface/interface';
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

export function useApiUserData(url:string, name:string | undefined) {
  const {data, isLoading, isError} = useQuery<UserData[]>({ 
    queryKey: ['UserData'], 
    queryFn: async () => {
      const response = await axios.get(`${url}?name=${name}`);
      return response.data;
  }})
  return {data, isLoading, isError }
}

export const usePetBuildingRegisterMutation = () => {
  return useMutation({
    mutationFn: async (data: PetBuildingRegister) => await axios.post('http://localhost:4000/pet-building-register', data),
    mutationKey: 'PetBuildingRegister',
    onSuccess: (e) => {
      alert(e.data.message)
    },
    onError: (e) => {
      console.log(e);
    }
  })
}


export const usePetFoodRegisterMutation = () => {
  return useMutation({
    mutationFn: async (data: PetFoodRegisterData) => await axios.post('http://localhost:4000/pet-petFood-register', data),
    mutationKey: 'PetFoodRegister',
    onSuccess: (e) => {
      alert(e.data.message)
    },
    onError: (e) => {
      console.log(e);
    }
  })
}

export const useImgRegisterMutation = () => {
  return useMutation({
    mutationFn: async (data: ImgRegisterData) => await axios.post('http://localhost:4000/pet-img-register', data),
    mutationKey: 'ImgRegister',
    onSuccess: (e) => {
      alert(e.data.message)
    },
    onError: (e) => {
      console.log(e);
    }
  })
}

export const useRegisterMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (data: UserRegisterData) => await axios.post('http://localhost:4000/register', data),
    mutationKey: 'Register',
    onSuccess: (e) => {
      alert('회원가입에 성공하였습니다.');
      navigate('/login')
    },
    onError: (error:AxiosError) => {
      alert('등록된 이메일 입니다.')
      navigate('/register')
    }
  })
}

export const useLoginMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (data: UserLoginData) => await axios.post('http://localhost:4000/login', data),
    mutationKey: 'Login',
    onSuccess: (e) => {
      Cookies.set('jwt', e.data.token, { expires: 1 / 24})
      navigate('/opet')
    },
    onError: () => {
      alert('아이디 또는 비밀번호가 틀렸습니다.')
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