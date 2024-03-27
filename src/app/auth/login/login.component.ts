import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = this.formBuilder.group({
    email: ['',[Validators.required,Validators.email]],
    password: ['', Validators.required],
  });

  

get password(){
  return this.loginForm.controls.password;
}

get email(){
  return this.loginForm.controls.email;
}

login(){
  if(this.loginForm.valid){
    console.log("llamar servicio login")
  }
  else{
    this.loginForm.markAllAsTouched();
  }
}

lightMode(){
  var b = document.querySelector("html");
  b?.setAttribute("data-bs-theme", "light");
}

darkMode(){
  var b = document.querySelector("html");
  b?.setAttribute("data-bs-theme", "dark");
}

autoMode(){
  var b = document.querySelector("html");
  b?.setAttribute("data-bs-theme", "auto");
}

  constructor(private formBuilder: FormBuilder) {}

}
