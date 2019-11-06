import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tableau-dark',
  templateUrl: './tableau-dark.component.html',
  styleUrls: ['./tableau-dark.component.scss']
})
export class TableauDarkComponent implements OnInit {
  @Input() public headers: string[];
  constructor() { }

  ngOnInit() {
  }

}
