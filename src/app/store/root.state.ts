
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


export interface RootState {
  login?: Login;
  loginLoading?: boolean;
}

export const initialState: RootState = {};
