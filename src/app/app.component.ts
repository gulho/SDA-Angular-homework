import { Component } from '@angular/core';
import {Students} from '../models/students';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
   styleUrls: ['./app.component.css', './css/bootstrap.css', './css/bootstrap-grid.css', './css/bootstrap-reboot.css']
  // styleUrls: ['./app.component.css', './css/bootstrap.css', './css/bootstrap-grid.css', './css/bootstrap-reboot.css']
})
export class AppComponent {
  title = 'SDA-Angular-homework';
  studentsArray = Students;
}
