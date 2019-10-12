import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { ValidationComponent } from './validation/validation.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [UserComponent, ValidationComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [UserComponent]
})
export class LoginModule { }
