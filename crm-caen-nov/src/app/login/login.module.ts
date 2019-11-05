import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { LoggingRoutingModule } from './login-routing.module';



@NgModule({
  declarations: [PageLoginComponent],
  imports: [
    CommonModule,
    LoggingRoutingModule
  ]
})
export class LoginModule { }
