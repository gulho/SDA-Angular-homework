import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {Student} from '../../models/students';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  @Input() studentsArr: [Student];

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  addNewStudent(studentAdd) {
    this.modalService.open(studentAdd, {}).result.then((result) => {alert('da'); });
  }
}
