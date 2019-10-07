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

export const Students = [
  new Student(1, 'firstName', 'lastName',
    new Date(1980, 10, 12), [ClassesEnum.Angular, ClassesEnum.JavaBasic]),
  new Student(2, 'firstName2', 'lastName2',
    new Date(1985, 5, 15), [ClassesEnum.Angular, ClassesEnum.JavaBasic]),
];
