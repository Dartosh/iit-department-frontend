import { UserInterface } from "../../models/interfaces/user.interface";
import { UpdateUserInterface } from "../../models/interfaces/users/update-user.interface";
import debug from "../debug";
import httpsService from "../http";

class UsersService {
  private readonly API_ENDPOINTS = {
    getUserById: (id: number) => `api/v1/profile/${id}`,
    updateUserById: (id: number) => `api/v1/profile/update/${id}`,
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

  public async updateUserProfileById(
    userId: number,
    userBody: UpdateUserInterface,
  ): Promise<UserInterface> {
    try {
      const userResponse =
        await httpsService.put<UserInterface>(this.API_ENDPOINTS.updateUserById(userId), userBody);

      debug.success('Success on update user by id: ', userResponse.data);

      return userResponse.data;
    } catch (error: any) {
      debug.error('Failed to update user by id: ', error);

      throw new Error('Failed to update user by id');
    }
  }
}

const usersService = new UsersService();

export default usersService;
