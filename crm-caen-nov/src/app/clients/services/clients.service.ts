import { Injectable } from '@angular/core';
import { fakeclients } from './fake-clients';
import { Client } from 'src/app/shared/models/client';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private pCollection: Client[];

  constructor() {
    this.collection = fakeclients;
  }

  // get collection
  public get collection() {
    return this.pCollection;
  }

  // set collection
  public set collection(col: Client[]) {
    this.pCollection = col;
  }

  public update(item: Client, state: StateClient){
    item.state = state;
  }
}
