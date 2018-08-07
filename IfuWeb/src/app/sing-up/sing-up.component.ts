import { Component, OnInit } from '@angular/core';
import { user } from '../shared/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {
  user : user;

  constructor() { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if (form != null)
    form.reset();
    this.user = {
      UserName: '',
      Password : '',
      Email : '',
      FirstName : '',
      LastName : ''
    }
  }
}
