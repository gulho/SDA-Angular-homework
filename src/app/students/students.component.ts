import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Student} from '../../models/students';
import {NgbAlert, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';
import {ClassesEnum} from '../../models/classesEnum';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  @Input() studentsArr: [Student];
  @ViewChild('studentFormAlert', {static: false}) alert: NgbAlert;
  classesEnum = ClassesEnum;
  keys = Object.keys;

  validFirstName = false;
  validLastName = false;
  validDateOfBirth = false;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
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
        classes.push(item);
      }
    }

    (firstName.length === 0) ? this.validFirstName = true : this.validFirstName = false;
    (lastName.length === 0) ? this.validLastName = true : this.validLastName = false;
    // @ts-ignore
    (isNaN(dateOfBirth)) ? this.validDateOfBirth = true : this.validDateOfBirth = false;

    if (!this.validDateOfBirth && !this.validLastName && !this.validFirstName) {
      this.studentsArr.push(new Student(this.studentsArr.length + 1, firstName, lastName, dateOfBirth, classes));
      this.modalService.dismissAll();
    }
  }

}
