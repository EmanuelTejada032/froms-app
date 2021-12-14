import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { cantBeHermandad, emailPattern, usernamePattern } from '../../../shared/validators/validations';
import { ValidatorService } from '../../../shared/validators/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {


  myForm: FormGroup = this.formBuilder.group({
      username:['', [Validators.required, Validators.pattern(this.validationService.usernamePattern)]],
      email:['', [Validators.required, Validators.pattern(this.validationService.emailPattern)]],
      nickname:['', [Validators.required, this.validationService.cantBeHermandad]],

  })

  constructor(private formBuilder: FormBuilder, private validationService: ValidatorService) { }

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
