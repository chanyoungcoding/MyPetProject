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
  image: string;
}

export interface UserRegisterData {
  username: string;
  email: string;
  password: string;
  checkpassword: string;
}
export interface UserData {
  username: string;
  email: string;
  password: string;
  img: string | undefined;
  petName: string;
  selectedDate: Date | string;
}

export type UserLoginData = Omit<UserRegisterData, 'email' | 'checkpassword'>;

export interface ImgRegisterData {
  jwt: string | undefined;
  imageUrl: string;
  petName: string;
  selectedDate: Date | null;
}

export interface DatePickData {
  selectedDate: Date | null;
  handleDateChange: (date: Date | null) => void;
}

export interface NamePickData {
  petName: string;
  handlePetName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
