import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private TEACHER_API = 'http://5d7e077fd756030014184069.mockapi.io/teacher';
  constructor(private httpClient: HttpClient) { }
  public getTeachers() {
    return this.httpClient.get(this.TEACHER_API);
  }
}
