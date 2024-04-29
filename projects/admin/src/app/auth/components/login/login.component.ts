import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm?:FormGroup
  hide = true;
constructor(private fb:FormBuilder){}

createForm()
{
  this.loginForm = this.fb.group({
    email:['', [Validators.required , Validators.email]],
    password:['',[Validators.required , Validators.minLength(6), Validators.maxLength(40)]]
  })
}
}
