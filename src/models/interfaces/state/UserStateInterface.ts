import { UserInterface } from '../user.interface';

export interface UserStateInterface {
  isLoading: boolean;

  error: string;
  
  user: UserInterface | null;
}