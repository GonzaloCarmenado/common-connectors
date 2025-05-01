import { Injectable } from '@angular/core';
import { GeneralHttpCoreHubService, StandarResponse } from '@gonzalocarmenado/general-http-core-hub';
import { ClientModel } from './models/client.model';

@Injectable({
  providedIn: 'root'
})
export class CommonConnectorClientsService {

  constructor(
    private readonly commonRest: GeneralHttpCoreHubService
  ) { }

  public getClientList(env: string): Promise<StandarResponse<ClientModel[]>> {
    return  this.commonRest.commonGet<ClientModel[]>(`${env}/clients`)
      .then((response: StandarResponse<ClientModel[]>) => {
        return response;
      },
        (error) => {
          console.error('Error fetching client list:', error);
          throw error;
        }
      )
  }

  public postNewClient(env: string, newClient:ClientModel): Promise<StandarResponse<ClientModel[]>> {
    return  this.commonRest.commonPost<ClientModel[]>(`${env}/clients`,newClient)
      .then((response: StandarResponse<ClientModel[]>) => {
        return response;
      },
        (error) => {
          console.error('Error fetching client list:', error);
          throw error;
        }
      )
  }
}
