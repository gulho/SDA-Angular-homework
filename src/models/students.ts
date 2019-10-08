import {ClassesEnum} from './classesEnum';

export class Student {
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
}

export const students = [
  new Student(1, 'Fry', 'Philip',
    new Date(1980, 10, 12), [ClassesEnum.ANGULAR]),
  new Student(2, 'Leela', 'Turanga',
    new Date(1985, 5, 15), [ClassesEnum.ANGULAR, ClassesEnum.JAVABASIC]),
  new Student(2, 'Bender', 'Rodriguez',
    new Date(1950, 4, 15), [ClassesEnum.JAVAADVANCED]),
  new Student(2, 'Hubert J.', 'Farnsworth',
    new Date(1970, 7, 20), [ClassesEnum.ANGULAR, ClassesEnum.JAVABASIC, ClassesEnum.JAVAADVANCED]),
  new Student(2, 'Dr. John A.', 'Zoidberg',
    new Date(1973, 9, 1), [ClassesEnum.JAVABASIC]),
];
