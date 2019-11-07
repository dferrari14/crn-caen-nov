import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-add-clients',
  templateUrl: './page-add-clients.component.html',
  styleUrls: ['./page-add-clients.component.scss']
})
export class PageAddClientsComponent implements OnInit {
  public title: string;
  public label: string;
  constructor() {

  }

  ngOnInit() {
    this.title = 'Client';
    this.label = 'Ajouter clients ';
  }

}
