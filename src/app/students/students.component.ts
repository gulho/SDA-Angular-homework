import {Component, OnInit, ViewChild} from '@angular/core';
import {Student1, StudentsData} from './data/students';
import {NgbAlert, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';
import {ClassesEnum} from '../../models/classesEnum';
import {Teacher1, TeacherData} from '../teachers/data/teachers';
import {StudentService} from './data/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  studentsArr = [];
  @ViewChild('studentFormAlert', {static: false}) alert: NgbAlert;
  classesEnum = ClassesEnum;
  keys = Object.keys;

  validFirstName = false;
  validLastName = false;
  validDateOfBirth = false;

  constructor(private modalService: NgbModal, private studentService: StudentService) {
  }

  ngOnInit() {
    this.studentService.getAllStudent().subscribe((data: any[]) => this.studentsArr = data);
    console.log(this.studentsArr);
  }

  addNewStudent(studentAdd) {
    this.modalService.open(studentAdd, {});
  }

  saveNewStudent(f: NgForm) {
    const firstName = f.value.formFirstName.trim();
    const lastName = f.value.formLastName.trim();
    const dateOfBirth = new Date(f.value.formDateOfBirth);
    const classes = [];

    for (const item in this.classesEnum) {
      if (f.controls[item].value) {
        classes.push(ClassesEnum[item]);
      }
    }

    (firstName.length === 0) ? this.validFirstName = true : this.validFirstName = false;
    (lastName.length === 0) ? this.validLastName = true : this.validLastName = false;
    // @ts-ignore
    (isNaN(dateOfBirth)) ? this.validDateOfBirth = true : this.validDateOfBirth = false;

/*    if (!this.validDateOfBirth && !this.validLastName && !this.validFirstName) {
      this.studentsArr.push(new Student(this.studentsArr.length + 1, firstName, lastName, dateOfBirth, classes));
      this.modalService.dismissAll();
    }*/

    this.studentService.createStudent(new Student1(
      firstName + lastName,
      dateOfBirth,
      true,
      'schoolTallinn',
      classes));
    this.modalService.dismissAll();
  }

}
