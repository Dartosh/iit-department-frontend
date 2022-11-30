import { UserInterface } from "../../models/interfaces/user.interface";
import debug from "../debug";
import httpsService from "../http";

class UsersService {
  private readonly API_ENDPOINTS = {
    getUserById: (id: number) => `api/v1/profile/${id}`,
  }

  public async getUserProfileById(userId: number): Promise<UserInterface> {
    try {
      const userResponse = await httpsService.get<UserInterface>(this.API_ENDPOINTS.getUserById(userId));

      debug.success('Success on get user by id: ', userResponse.data);

      return userResponse.data;
    } catch (error: any) {
      debug.error('Failed to get user by id: ', error);

      throw new Error('Failed to get user by id');
    }
  }
}

const usersService = new UsersService();

export default usersService;
