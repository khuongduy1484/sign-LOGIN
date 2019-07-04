import { Component, OnInit } from '@angular/core';
import {User} from './register.model';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.confirmPassword) ? null : {
    passwordnotmatch: true
  };
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  register: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.register = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pwGroup: this.fb.group({
        password: '',
        confirmPassword: ''
      }, {validators: comparePassword})
    });
    this.register.patchValue({
      email: 'info@example.com'
    });
    this.user = new User('', '', '', '', '', '', '', '');
  }

}

