import axios, { AxiosError } from 'axios';
import { useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Swal from "sweetalert2";

import { 
  PetMapData, 
  PetFoodData, 
  UserRegisterData,
  UserLoginData, 
  ImgRegisterData,
  UserData,
  PetFoodRegisterData,
  PetBuildingRegister,
  PetFoodDeleteData,
  PetBuildingDelete
} from '../interface/interface';

const alertSuccess = (message:string) => {
  Swal.fire({
    icon: "success",
    title: `${message}`,
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  });
}

const alertRegisterSuccess = (message:string) => {
  Swal.fire({
    icon: "success",
    title: `${message}`,
    confirmButtonText: "확인",
    confirmButtonColor: "#3085d6",
    showConfirmButton: true,
  }).then(result => {
    if(result.isConfirmed) {
      const navigate = useNavigate();
      navigate('/login')
    }
  });
}

const alertError = (message:string) => {
  Swal.fire({
    icon: "error",
    title: `${message}`,
    showCancelButton:true,
    cancelButtonText:"확인",
    cancelButtonColor:"#d33",
    showConfirmButton: false,
  });
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
      const message = e.data.message;
      alertSuccess(message)
    },
    onError: (error:AxiosError) => {
      if (error.response) {
        const responseData = error.response.data as { message: string }; // 타입 단언
        alertError(responseData.message);
      }
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
        return window.location.reload();
      }
    },
    onError: (error:AxiosError) => {
      if (error.response) {
        const responseData = error.response.data as { message: string }; // 타입 단언
        alertError(responseData.message);
      }
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
      const message = e.data.message;
      alertSuccess(message);
    },
    onError: (error:AxiosError) => {
      if (error.response) {
        const responseData = error.response.data as { message: string }; // 타입 단언
        alertError(responseData.message);
      }
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
        return window.location.reload();
      }
    },
    onError: (error:AxiosError) => {
      if (error.response) {
        const responseData = error.response.data as { message: string }; // 타입 단언
        alertError(responseData.message);
      }
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
      const message = e.data.message;
      alertSuccess(message);
    },
    onError: (error:AxiosError) => {
      if (error.response) {
        const responseData = error.response.data as { message: string }; // 타입 단언
        alertError(responseData.message);
      }
    }
  })
}

export const useRegisterMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (data: UserRegisterData) => await axios.post('http://localhost:4000/api/users/register', data),
    mutationKey: 'Register',
    onSuccess: (e) => {
      const message = e.data.message;
      alertRegisterSuccess(message);
    },
    onError: (error:AxiosError) => {
      if (error.response) {
        const responseData = error.response.data as { message: string }; // 타입 단언
        alertError(responseData.message);
      }
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
    onError: (error:AxiosError) => {
      if (error.response) {
        const responseData = error.response.data as { message: string }; // 타입 단언
        alertError(responseData.message);
      }
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