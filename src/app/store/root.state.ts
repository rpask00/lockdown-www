export type IdType = number | string;

export interface Login {
  id: IdType;
  username: string;
  email: string;
  password: string;
  usedAt: string;
  linked_websites: string[],
  collections: string[],
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface User {
  id: IdType;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
}

export interface UserDto extends Omit<User, 'id'> {
  password: string;
}


export interface RootState {
  login?: Login;
  loginLoading?: boolean;
  userLoading?: boolean;
  user?: User;
}

export const initialState: RootState = {};
