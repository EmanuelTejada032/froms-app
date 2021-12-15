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

  constructor(private formBuilder: FormBuilder, private validationService: ValidatorService, private validatorAsyncService: EmailAsyncValidatorService) { }

  ngOnInit(): void {
    this.myForm.reset({
      username: "Emanuel Tejada",
      email: "hermandad@gmail.com",
      nickname: "hermandad032"
    })
  }

  isValidField(field: string){
    return this.myForm.get(field)?.invalid && this.myForm.get(field)?.touched
  }

  registerUser(){
    console.log(this.myForm.value)
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
    }
  }

}
