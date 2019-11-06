import { Directive, Input,  HostBinding, OnChanges } from '@angular/core';
import { Prestation } from '../models/prestation';
import { State } from '../enums/state.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: State;
  @HostBinding('class') hostAttr: string;
  constructor() {
  }

  ngOnChanges(): void {
    console.log(this.appState);
    this.hostAttr = this.formatClass(this.appState);
  }

  private formatClass(state: any): string {
    return `state-${state.normalize('NFD').replace(/[\u0300-\u036f\s]/g, '').toLowerCase()}`;
  }

}
