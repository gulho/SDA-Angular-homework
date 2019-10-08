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
  new Teacher(1, 'Luke', 'Skywalker', new Date(2070, 4, 20), [ClassesEnum.JAVABASIC, ClassesEnum.PYTHON], 'Tatooine University'),
  new Teacher(2, 'Han', 'Solo', new Date(2060, 6, 13), [ClassesEnum.SQL, ClassesEnum.CSS], 'Alderaan University'),
  new Teacher(3, 'Princess', 'Leia', new Date(2070, 4, 20), [ClassesEnum.ANGULAR, ClassesEnum.CSS], 'Rebel Alliance University'),
  new Teacher(4, 'Obi-Wan', 'Kenobi', new Date(2031, 11, 25), [ClassesEnum.JAVAADVANCED, ClassesEnum.PYTHON], 'The Alec Guinness University'),
  new Teacher(5, 'R2', 'D2', new Date(2085, 12, 31), [ClassesEnum.CSS], 'The Alec Guinness University'),
];
