import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Prestation } from 'src/app/shared/models/prestation';

@Component({
  selector: 'app-page-add-prestation',
  templateUrl: './page-add-prestation.component.html',
  styleUrls: ['./page-add-prestation.component.scss']
})
export class PageAddPrestationComponent implements OnInit {
  public title: string;
  public label: string;

  constructor(private prestationService: PrestationsService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.title = 'prestation';
    this.label = 'ajouter prestation';
    this.route.data.subscribe((donnee) => {
      this.title = donnee.title;
      this.label = donnee.label;
    });
  }


  public add(item: Prestation){
    console.log(item);
    this.prestationService.add(item);
    // this.router.navigate(['prestations']);

    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
