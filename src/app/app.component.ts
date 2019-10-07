import { Component } from '@angular/core';
import {Students} from '../models/students';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SDA-Angular-homework';
  studentsArray = Students;
}
