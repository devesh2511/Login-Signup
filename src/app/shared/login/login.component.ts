import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup
  message = '';

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router:Router,
    private tokenService:TokenService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required],
      role:['',Validators.required]
    }) 
  }

  login(){
    const formValue = this.loginForm.value
    this.loginService.login(formValue.username,formValue.password).subscribe({next: (res:any) => {
      this.tokenService.storeAccessToken(res.accessToken)
      this.tokenService.storeRefrshToken(res.refreshToken)
      localStorage.setItem("username",formValue.username);

      if(formValue.role  == 'customer'){
        this.router.navigate(['/'])
      }

      else if(formValue.role == 'admin'){
        this.router.navigate(['/admin'])
      }

      // this.router.navigate(['/'])
    },error : ()=>{
      this.message='Wrong username or password!!'
    }})
  }

}
