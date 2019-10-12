import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TeachersComponent } from './teachers/teachers.component';
import { StudentsComponent } from './students/students.component';
import {FormsModule} from '@angular/forms';
import {LoginModule} from './login/login.module';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './login/user/user.component';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  {
    path: 'teacher',
    component: TeachersComponent
  },
  {
    path: 'student',
    component: StudentsComponent
  },
  {
    path: 'login',
    component: UserComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TeachersComponent,
    StudentsComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    LoginModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
