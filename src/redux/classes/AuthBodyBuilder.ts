import { AuthBodyInterface } from '../../models/interfaces/dto/AuthBodyInterface';

export class AuthBodyBuilder implements AuthBodyInterface{
  public username: string;
  public password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}