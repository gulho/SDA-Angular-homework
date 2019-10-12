import {ClassesEnum} from '../../../models/classesEnum';
import {ajax} from 'rxjs/ajax';

/*export class Student {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  classes: Array<ClassesEnum>;


  constructor(id: number, firstName: string, lastName: string, dateOfBirth: Date, classes: Array<ClassesEnum>) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.classes = classes;
  }
}*/

export class Student1 {
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

/*export const students = [
  new Student(1, 'Fry J.', 'Philip',
    new Date(1980, 10, 12), [ClassesEnum.ANGULAR]),
  new Student(2, 'Leela', 'Turanga',
    new Date(1985, 5, 15), [ClassesEnum.ANGULAR, ClassesEnum.JAVABASIC]),
  new Student(3, 'Bender', 'Rodriguez',
    new Date(1950, 4, 15), [ClassesEnum.JAVAADVANCED]),
  new Student(4, 'Hubert J.', 'Farnsworth',
    new Date(1970, 7, 20), [ClassesEnum.ANGULAR, ClassesEnum.JAVABASIC, ClassesEnum.JAVAADVANCED]),
  new Student(5, 'Dr. John A.', 'Zoidberg',
    new Date(1973, 9, 1), [ClassesEnum.JAVABASIC]),
];*/

export class StudentsData {
/*  getAllStudents() {
    /!*return students;*!/
    let result = [];
    const getStudents = ajax('http://5d7e077fd756030014184069.mockapi.io/teacher');
    getStudents.subscribe( res => result = res.response);
    console.log(result);
    return result;
  }*/
/*  public createStudent(student: Student1) {
    const createNewStudent = ajax({
      url: 'http://5d7e077fd756030014184069.mockapi.io/teacher',
      method: 'POST',
      body: student
    });
    createNewStudent.subscribe(res => console.log(res.response));
  }*/
}
