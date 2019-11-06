import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { fakePrestations } from './fake-prestations';
import { State } from 'src/app/shared/enums/state.enum';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {

  private pCollection: Prestation[];

  constructor() {
    this.collection = fakePrestations;
  }

  // get collection
  public get collection() {
    return this.pCollection;
  }

  // set collection
  public set collection(col: Prestation[]) {
    this.pCollection = col;
  }

 public update(item: Client, state: StateClient){
   item.state = state;
 }

  // add item in collection
  // update item in collection
  // delete item in collection
  // get item by id
}
