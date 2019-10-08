import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ClassesEnum} from '../../models/classesEnum';
import {Teacher} from '../../models/teachers';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  @Input() teachersArr: [Teacher];
  classesEnum = ClassesEnum;
  keys = Object.keys;

  validFirstName = false;
  validLastName = false;
  validDateOfBirth = false;
  validEducation = false;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  addNewTeacher(teacherAdd) {
    this.modalService.open(teacherAdd, {});
  }

  saveNewTeacher(f: NgForm) {
    const firstName = f.value.formFirstName.trim();
    const lastName = f.value.formLastName.trim();
    const dateOfBirth = new Date(f.value.formDateOfBirth);
    const classes = [];
    const education =  f.value.formEducation.trim();

    for (const item in this.classesEnum) {
      if (f.controls[item].value) {
        classes.push(ClassesEnum[item]);
      }
    }

    (education.length === 0 ) ? this.validEducation = true : this.validEducation = false;
    (firstName.length === 0) ? this.validFirstName = true : this.validFirstName = false;
    (lastName.length === 0) ? this.validLastName = true : this.validLastName = false;
    // @ts-ignore
    (isNaN(dateOfBirth)) ? this.validDateOfBirth = true : this.validDateOfBirth = false;

    if (!this.validDateOfBirth && !this.validLastName && !this.validFirstName && !this.validEducation) {
      this.teachersArr.push(new Teacher(this.teachersArr.length + 1, firstName, lastName, dateOfBirth, classes, education));
      this.modalService.dismissAll();
    }
  }
}
