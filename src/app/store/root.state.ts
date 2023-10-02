export type IdType = number | string;

export interface LoginDto {
  username: string;
  email: string;
  password: string;
  linked_websites: string[];
  collections: string[];
}

export interface Login extends LoginDto {
  used_at: string;
  id: IdType;
}

export interface Attachment {
  id: IdType;
  name: string;
  size: number;
}

export interface SecuredNoteDto {
  note: string;
  title: string;
  color: CardColor;
}

export interface SecuredNote extends SecuredNoteDto {
  id: IdType;
  attachments: Attachment[];
  created_at: string;
  updated_at: string;
}

export enum CardColor {
  RED = 'red',
  BLUE = 'blue',
  GREEN = 'green',
  YELLOW = 'yellow',
  PURPLE = 'purple',
  ORANGE = 'orange',
  BLACK = 'black',
  DARKCYAN = 'darkcyan'
}

export interface PaymentDto {
  card_holder: string;
  card_number: string;
  security_code: number;
  expiration_month: number;
  expiration_year: number;
  name: string;
  color: CardColor;
  note: string;
}

export interface Payment extends PaymentDto {
  id: IdType;
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
  logins?: Login[];
  loginLoading?: boolean;
  loginsLoading?: boolean;

  payment?: Payment;
  payments?: Payment[];
  paymentLoading?: boolean;
  paymentsLoading?: boolean;

  securedNote?: SecuredNote;
  securedNotes?: SecuredNote[];
  securedNoteLoading?: boolean;
  securedNotesLoading?: boolean;

  userLoading?: boolean;
  user?: User;
}

export const initialState: RootState = {};
