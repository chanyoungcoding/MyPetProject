import axios, { AxiosError } from 'axios';
import { useMutation, useQuery } from 'react-query';
import { PetMapData, PetFoodData, UserRegisterData, UserLoginData, ImgRegisterData, UserData, PetFoodRegisterData, PetBuildingRegister, PetFoodDeleteData, PetBuildingDelete } from '../interface/interface';
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

export function useApiUserData(url:string) {
  const jwtToken = Cookies.get("jwt");
  const {data, isLoading, isError} = useQuery<UserData>({ 
    queryKey: ['UserData'], 
    queryFn: async () => {
      const response = await axios.get(`${url}`,{
        headers: {
          Authorization: `${jwtToken}`,
        }
      });
      return response.data;
  }})
  return {data, isLoading, isError }
}

export const usePetBuildingRegisterMutation = () => {
  const jwtToken = Cookies.get("jwt");
  return useMutation({
    mutationFn: async (data: PetBuildingRegister) => await axios.post('http://localhost:4000/api/users/registerBuilding', data, {
      headers: {
        Authorization: `${jwtToken}`,
      }
    }),
    mutationKey: 'PetBuildingRegister',
    onSuccess: (e) => {
      alert(e.data.message)
    },
    onError: (e) => {
      console.log(e);
    }
  })
}

export const usePetBuildingDeleteMutation = () => {
  const jwtToken = Cookies.get("jwt");
  return useMutation({
    mutationFn: async (data: PetBuildingDelete) => await axios.delete(`http://localhost:4000/api/users/deleteBuilding/${data.buildingName}`, {
      headers: {
        Authorization: `${jwtToken}`,
      }
    }),
    mutationKey: 'PetBuildingDelete',
    onSuccess: (e) => {
      if(e.data.message === '삭제완료') {
        alert('삭제 완료!!')
      }
      window.location.reload();
    },
    onError: (e) => {
      console.log(e);
    }
  })
}


export const usePetFoodRegisterMutation = () => {
  const jwtToken = Cookies.get("jwt");
  return useMutation({
    mutationFn: async (data: PetFoodRegisterData) => await axios.post('http://localhost:4000/api/users/registerFood', data, {
      headers: {
        Authorization: `${jwtToken}`,
      }
    }),
    mutationKey: 'PetFoodRegister',
    onSuccess: (e) => {
      alert(e.data.message)
    },
    onError: (e) => {
      console.log(e);
    }
  })
}

export const usePetFoodDeleteMutation = () => {
  const jwtToken = Cookies.get("jwt");
  return useMutation({
    mutationFn: async (data: PetFoodDeleteData) => await axios.delete(`http://localhost:4000/api/users/deleteFood/${data.foodName}`,{
      headers: {
        Authorization: `${jwtToken}`,
      }
    }),
    mutationKey: 'PetFoodDelete',
    onSuccess: (e) => {
      if(e.data.message === '삭제완료') {
        alert('삭제 완료!!')
      }
      window.location.reload();
    },
    onError: (e) => {
      console.log(e);
    }
  })
}

export const useImgRegisterMutation = () => {
  const jwtToken = Cookies.get("jwt");
  return useMutation({
    mutationFn: async (data: ImgRegisterData) => await axios.post('http://localhost:4000/api/users/registerImg', data, {
      headers: {
        Authorization: `${jwtToken}`,
      }
    }),
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
    mutationFn: async (data: UserRegisterData) => await axios.post('http://localhost:4000/api/users/register', data),
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
    mutationFn: async (data: UserLoginData) => await axios.post('http://localhost:4000/api/users/login', data),
    mutationKey: 'Login',
    onSuccess: (e) => {
      Cookies.set("jwt", JSON.stringify(e.data.token), {expires: 1})
      navigate('/opet')
    },
    onError: (e) => {
      console.log(e)
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