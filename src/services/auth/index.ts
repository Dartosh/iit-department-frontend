import { AuthMethodsEnum } from "../../models/enums/authMethodsEnum";
import { TokensInterface } from "../../models/interfaces/tokens.interface";
import { AuthBodyBuilder } from "../../redux/classes/AuthBodyBuilder";
import debug from "../debug";
import httpsService from "../http";
import { AuthTokensType } from "./interfaces/auth-tokens.type";
import { LocalStorageKeysType } from "./interfaces/local-storage-keys.type";

class AuthService {
  private readonly LOCAL_STORAGE_KEYS: LocalStorageKeysType = {
    token: '@authentication/auth_token',
    refreshToken: '@authentication/auth_refresh_token',
    fingerprint: '@authentication/fingerprint',
  }

  private readonly API_ENDPOINTS = {
    refresh: 'api/v1/auth/jwt/refresh',
  }

  public async authUser(username: string, password: string) {
    try {
        const authBody = new AuthBodyBuilder(username, password);

        const response = await httpsService.post<TokensInterface>(AuthMethodsEnum.create, authBody);

        debug.success('Authentication request result', response.data);
  
        if (response.status !== 200) {
          return Promise.reject(`Incorrect status ${response.status}`);
        }

        if (response.data) {
          this.setAuthTokens(response.data);
          
          return response.data;
        }
      } catch (error: any) {
        debug.error(
          `Failed with POST request by path: ${URL}${AuthMethodsEnum.create}`,
          error,
        );

        throw await error.response?.json();
      }
  }

  public async getAuthToken() {
    try {
        const token = window.localStorage.getItem(this.LOCAL_STORAGE_KEYS.token);

        if (token) {
          return token;
        }

        return Promise.reject(false);
    } catch (error) {
        throw error;
    }
  }

  public async getRefreshToken() {
    try {
        const refreshToken = window.localStorage.getItem(this.LOCAL_STORAGE_KEYS.refreshToken);

        if (refreshToken) {
          return refreshToken;
        }

        return Promise.reject(false);
    } catch (error) {
        throw error;
    }
  }

  public async setAuthTokens(props: TokensInterface) {
    try {
        if (!!props.access) {
          window.localStorage.setItem(this.LOCAL_STORAGE_KEYS.token, props.access);
        }

        if (!!props.refresh) {
          window.localStorage.setItem(this.LOCAL_STORAGE_KEYS.refreshToken, props.refresh);
        }

        return Promise.resolve(true);
      } catch (error) {
        throw error;
      }
  }

  public async requestNewTokens() {
    try {
        const refreshToken = this.getRefreshToken();
    
        const request = await fetch(`${process.env.REACT_APP_BASE_URL}${this.API_ENDPOINTS.refresh}`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            refresh: refreshToken,
          }),
        });
  
        debug.success('Authentication request result: ', request);
  
        return request.json();
      } catch (error: any) {
        debug.error(
          `Failed with POST request by path: ${process.env.REACT_APP_BASE_URL}${this.API_ENDPOINTS.refresh}`,
          error,
        );

        throw await error.response?.json();
      }
  }
}

const authService = new AuthService();

export default authService;