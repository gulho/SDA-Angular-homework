import {ClassesEnum} from '../../../models/classesEnum';
import { ajax } from 'rxjs/ajax';

export class Teacher {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  classes: Array<ClassesEnum>;
  education: string;

  constructor(id: number, firstName: string, lastName: string, dateOfBirth: Date, classes: Array<ClassesEnum>, education: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.classes = classes;
    this.education = education;
  }
}

export class Teacher1 {
  teacherId: number;
  name: string;
  joinDate: Date;
  isActive: boolean;
  school: string;
  specialistFields: string[];

  constructor(name: string, joinDate: Date, isActive: boolean, school: string, specialistFields: string[]) {
    this.name = name;
    this.joinDate = joinDate;
    this.isActive = isActive;
    this.school = school;
    this.specialistFields = specialistFields;
  }
}

/*export const teachers = [
  new Teacher(1, 'Luke', 'Skywalker', new Date(2070, 4, 20), [ClassesEnum.JAVABASIC, ClassesEnum.PYTHON], 'Tatooine University'),
  new Teacher(2, 'Han', 'Solo', new Date(2060, 6, 13), [ClassesEnum.SQL, ClassesEnum.CSS], 'Alderaan University'),
  new Teacher(3, 'Princess', 'Leia', new Date(2070, 4, 20), [ClassesEnum.ANGULAR, ClassesEnum.CSS], 'Rebel Alliance University'),
  new Teacher(4, 'Obi-Wan', 'Kenobi', new Date(2031, 11, 25), [ClassesEnum.JAVAADVANCED, ClassesEnum.PYTHON], 'The Alec Guinness University'),
  new Teacher(5, 'R2', 'D2', new Date(2085, 12, 31), [ClassesEnum.CSS], 'The Alec Guinness University'),
];*/

export class TeacherData {
  public getAllTeachers(): any[] {
    let result = [];
    const getTeachers = ajax({url: 'http://5d7e077fd756030014184069.mockapi.io/teacher', method: 'GET'});
    getTeachers.subscribe( res =>  result = res.response );
    //console.log(result);
    return result;
  }
  public createTeacher(teacher: Teacher1) {
    const createNewTeacher = ajax({
      url: 'http://5d7e077fd756030014184069.mockapi.io/teacher',
      method: 'POST',
      body: teacher
    });
    createNewTeacher.subscribe(res => console.log(res.response));
  }
}
