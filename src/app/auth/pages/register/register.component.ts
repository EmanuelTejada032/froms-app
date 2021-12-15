import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { cantBeHermandad, emailPattern, usernamePattern } from '../../../shared/validators/validations';
import { ValidatorService } from '../../../shared/validators/validator.service';
import { EmailAsyncValidatorService } from '../../../shared/validators/email-async-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {


  myForm: FormGroup = this.formBuilder.group({
      username:['', [Validators.required, Validators.pattern(this.validationService.usernamePattern)]],
      email:['', [Validators.required, Validators.pattern(this.validationService.emailPattern)], [this.validatorAsyncService]],
      nickname:['', [Validators.required, this.validationService.cantBeHermandad]],
      password:['', [Validators.required, Validators.minLength(6)]],
      confirmPassword:['', [Validators.required]]
  }, {
    validators:[this.validationService.passwordRegisterMatch('password', 'confirmPassword')]
  })

  get emailErrorMessage(): string{
    const errors = this.myForm.get('email')?.errors;
    if(errors?.required){
      return "Email is required";
    }else if(errors?.pattern){
      return "Email is not in a valid format";
    }else if(errors?.emailTaken){
      return "This email is already in use";
    }
    return'';
  }
  constructor(private formBuilder: FormBuilder, private validationService: ValidatorService, private validatorAsyncService: EmailAsyncValidatorService) { }

  ngOnInit(): void {
    this.myForm.reset({
      username: "Emanuel Tejada",
      email: "hermandad@gmail.com",
      nickname: "hermandad032",
      password: "123456",
      confirmPassword: "123456"
    })
  }

  isValidField(field: string){
    return this.myForm.get(field)?.invalid && this.myForm.get(field)?.touched
  }

  registerUser(){
    console.log(this.myForm.value)
    if(this.myForm.invalid){
      console.log("Invalid data");
      this.myForm.markAllAsTouched();
      return;
    }

    console.log("data sent");
    
  }

}
