import {ClassesEnum} from './classesEnum';

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

export const teachers = [
  new Teacher(1, 'Luke', 'Skywalker', new Date(2030, 4, 20), [ClassesEnum.JAVABASIC, ClassesEnum.PYTHON], 'Tatooine University'),
  new Teacher(1, 'Han', 'Solo', new Date(2020, 6, 13), [ClassesEnum.SQL, ClassesEnum.CSS], 'Alderaan University'),
];
