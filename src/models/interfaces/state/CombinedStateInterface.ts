import { TokensStateInterface } from "./TokensStateInterface";
import { UserStateInterface } from "./UserStateInterface";

export interface CombinedStateInterface {
    tokens: TokensStateInterface;
    user: UserStateInterface;
}