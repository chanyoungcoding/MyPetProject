export interface PetMapData {
  번호: number;
  Name: string;
  buildingName: string;
  address: string;
  phoneNumber: string | undefined;
  latitude: number;
  longitude: number; 
}

export interface PositionData {
  content: string;
  address: string;
  phoneNumber: string;
  latlng: any;
}

export interface PetFoodData {
  name: string;
  introduce: string;
  eat: string;
}

export interface UserRegisterData {
  username: string;
  email: string;
  password: string;
}

export type UserLoginData = Omit<UserRegisterData, 'email'>;

export interface ImgRegisterData {
  jwt: string | undefined;
  imageUrl: string;
}
