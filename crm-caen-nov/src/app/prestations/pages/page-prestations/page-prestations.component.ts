import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/models/prestation';
import { State } from 'src/app/shared/enums/state.enum';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {
public collection: Prestation[];
public headers: string[];
public states = State;
public title: string;
public label: string;
public routeBtn: string;
public labelBtn: string;

  constructor(private prestationService: PrestationsService, private route: ActivatedRoute) {

  }



  ngOnInit() {
    this.collection = this.prestationService.collection;
    this.headers = [
      'Type',
      'Client',
      'NbJours',
      'TjmHT',
      'Total HT',
      'Total TTC',
      'State'
    ];
    this.route.data.subscribe((donnee) => {
      this.title = donnee.title;
      this.label = donnee.label;
    });
    this.labelBtn = 'ajouter une prestation';
    this.routeBtn = 'add';

  }

  public update(item: any, event) {
    this.prestationService.update(item, event.target.value);
  }

}
