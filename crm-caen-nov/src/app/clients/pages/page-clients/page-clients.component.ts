import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Client } from 'src/app/shared/models/Client';
import { StateClient } from 'src/app/shared/enums/state-client.enum';



@Component({
  selector: 'app-page-clients',
  templateUrl: './page-clients.component.html',
  styleUrls: ['./page-clients.component.scss']
})

export class PageClientsComponent implements OnInit {
public collection: Client[];
public headers: string[];
public states = StateClient;
public title: string;
public label: string;
public routeBtn: string;
public labelBtn: string;

  constructor(private clientService: ClientsService ) {
  }



  ngOnInit() {
    this.collection = this.clientService.collection;
    this.headers = [
      'id',
      'name',
      'email',
      'etat'
    ];
    this.title = 'Client';
    this.label = 'Tous le clients !';
    this.title = 'Client';
    this.labelBtn = 'ajouter un clients';
    this.routeBtn = 'add';
  }

  public update(item: any, event) {
    this.clientService.update(item, event.target.value);
  }

}
