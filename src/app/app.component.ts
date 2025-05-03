import { Component } from '@angular/core';
import { CommonConnectorClientsService } from '../../projects/common-connector-clients/src/public-api';
import { environment } from '../environments/environment';
import { ClientModel } from '../../projects/common-connector-clients/src/lib/models/client.model';
import { StandarResponse } from '@gonzalocarmenado/general-http-core-hub';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(
    private readonly clientService: CommonConnectorClientsService
  ) {

  }

  public getDataFromConnector(): void {
    this.clientService.getClientList(environment.testAPI).then((response: StandarResponse<ClientModel[]>) => {
      console.log('Response from connector:', response);
    }).catch((error) => {
      console.error('Error from connector:', error);
    });
  }


  public postDataFromConnector(): void {
    const newClient: ClientModel = this.generateClientPost();
    this.clientService.postNewClient(environment.testAPI, newClient).then((response: StandarResponse<ClientModel>) => {
      console.log('Response from connector:', response);
    }).catch((error) => {
      console.error('Error from connector:', error);
    });
  }

  public putDataFromConnector(): void {
    const newClient: ClientModel = this.generateClientPost();
    this.clientService.putClient(environment.testAPI,2, newClient).then((response: StandarResponse<ClientModel>) => {
      console.log('Response from connector:', response);
    }).catch((error) => {
      console.error('Error from connector:', error);
    });
  }

  public deleteFromConnector(): void {
    this.clientService.deleteClientById(environment.testAPI,3).then((response: StandarResponse<ClientModel>) => {
      console.log('Response from connector:', response);
    }).catch((error) => {
      console.error('Error from connector:', error);
    });
  }
  


  public generateClientPost(): ClientModel {
    return {
      id: "1",
      createdAt: "2024-12-01T10:32:45Z",
      name: "Lucía Ortega",
      avatar: "https://i.pravatar.cc/150?img=1",
      lastname: "Ortega",
      secondLastname: "Fernández",
      phone: "+34 612 345 678",
      email: "lucia.ortega@example.com"
    };
  }
}
