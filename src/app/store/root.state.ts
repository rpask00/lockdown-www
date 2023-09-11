export interface Login {
  id?: number;
  username: string;
  email: string;
  password: string;
  usedAt: string;
  linked_websites: string[],
  collections: string[],
}


export interface RootState {
}

export const initialState: RootState = {};
