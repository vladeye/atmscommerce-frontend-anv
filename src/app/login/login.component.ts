import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../_service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {

  private signInForm: FormGroup;
  private formSubmitAttemp: boolean;

  constructor(
      private fb:FormBuilder,
      private authService:AuthService
  ) { }

  ngOnInit() {
    this.signInForm = this.fb.group({
      userName: ['',[Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string){
    return(
        (!this.signInForm.get(field).valid && this.signInForm.get(field).touched) ||
        (this.signInForm.get(field).untouched && this.formSubmitAttemp)
    );
  }

  onSubmit(){
    if(this.signInForm.valid){
      //this.authService.login(this.signInForm.value);
      this.authService.login();
    }
    this.formSubmitAttemp = true;
  }

}

