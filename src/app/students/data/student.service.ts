import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Student1} from './students';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private STUDENT_API = 'http://5d7e077fd756030014184069.mockapi.io/student';

  constructor(private httpClient: HttpClient) {

  }

  public getAllStudent() {
      return this.httpClient.get(this.STUDENT_API);
  }

  public createStudent(student: Student1) {
    this.httpClient.post(this.STUDENT_API, student).subscribe(ret => console.log(ret));
  }
}
