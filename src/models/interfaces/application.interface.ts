import { TokensInterface } from './tokens.interface';
import { UserInterface } from './user.interface';

export interface ApplicationInterface {
  isLoading: boolean;

  error: string;

  tokens: TokensInterface | null;

  user: UserInterface | null;
}