import { NgModule } from '@angular/core';
import { GraphikComponent } from './graphik.component';
import { ButtonComponent } from './button/button.component';
import { Button1Component } from './button/components/button1/button1.component';



@NgModule({
  declarations: [GraphikComponent, ButtonComponent, Button1Component],
  imports: [
  ],
  exports: [GraphikComponent]
})
export class GraphikModule { }
