import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  username: string;
  password: string;

  ngOnInit() {
  }

  login(f: NgForm) {
    this.username = f.value.username;
    this.password = f.value.password;
    console.log(this.username);
  }
}
