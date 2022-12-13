import { TechonologyInterface } from "../../models/interfaces/technologies/technology.interface";
import { UserInterface } from "../../models/interfaces/user.interface";
import { UpdateUserInterface } from "../../models/interfaces/users/update-user.interface";
import debug from "../debug";
import httpsService from "../http";

class TechnologiesService {
  private readonly API_ENDPOINTS = {
    getTechnologiesList: 'api/v1/technology/list',
    createTechnology: 'api/v1/technology/create',
    updateTechnologyById: (id: number) => `api/v1/technology/update/${id}`,
    getTechnologyById: (id: number) => `api/v1/technology/${id}`,
    technologyImageById: (id: number) => `api/v1/technology/${id}/image`,
  }

  public async getTechnologiesList(): Promise<TechonologyInterface[]> {
    try {
      const technologiesResponse = await httpsService.get<TechonologyInterface[]>(this.API_ENDPOINTS.getTechnologiesList);

      debug.success('Success on get technologies list: ', technologiesResponse.data);

      return technologiesResponse.data;
    } catch (error: any) {
      debug.error('Failed to get technologies list: ', error);

      throw new Error('Failed to get technologies list');
    }
  }

  public async getTechnologiesById(id: number): Promise<TechonologyInterface> {
    try {
      const technologyResponse = await httpsService.get<TechonologyInterface>(this.API_ENDPOINTS.getTechnologyById(id));

      debug.success('Success on get technology by id: ', technologyResponse.data);

      return technologyResponse.data;
    } catch (error: any) {
      debug.error('Failed to get technology by id: ', error);

      throw new Error('Failed to get technology by id');
    }
  }
}

const technologiesService = new TechnologiesService();

export default technologiesService;
