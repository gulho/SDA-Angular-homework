import {Component, ContentChild, ElementRef, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
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
  @ViewChild('studentFormAlert', {static: false}) alert: ElementRef;
  classesEnum = ClassesEnum;
  keys = Object.keys;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    console.log(this.classesEnum);
  }

  addNewStudent(studentAdd) {
    this.modalService.open(studentAdd, {}).result.then((result) => {alert('da'); });
  }

  showError(error: string) {
    console.log(error);
    this.alert.nativeElement.value(error);
  }

  saveNewStudent(f: NgForm) {
    const firstName = f.value.formFirstName;
    this.showError('Fist name can\'t be empty!');
    if (firstName.isEmpty) {
      console.log();
      this.showError('Fist name can\'t be empty!');
    }

    const lastName = f.value.formLastName;
    const dateOfBirth = new Date(f.value.formDateOfBirth);
    const classess = f.value.formClasses;
    this.studentsArr.push(new Student(this.studentsArr.length + 1, firstName, lastName, dateOfBirth, classess));
  }

}
