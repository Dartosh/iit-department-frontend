import { TokensInterface } from '../tokens.interface';

export interface TokensStateInterface {
  isLoading: boolean;

  error: string;
  
  tokens: TokensInterface | null;
}