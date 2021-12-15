import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors, FormGroup, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public usernamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)' //Basic regex 
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"; //email regex
  constructor() { }

  cantBeHermandad(control: FormControl): ValidationErrors | null{
    if(control.value?.trim().toLowerCase() === "hermandad"){
      return {
        hermandad: "Nickname can't be hermandad"
      }
    }
    return null;
 }

 
 passwordRegisterMatch(field1: string, field2: string){
  return (formGroup: AbstractControl): ValidationErrors | null=>{
    const password = formGroup.get(field1)?.value;
    const confirmPassowrd = formGroup.get(field2)?.value;

    if(password !== confirmPassowrd){
      formGroup.get(field2)?.setErrors({passwordValidation:"Password must be equals" });
      return {
        passwordValidation: "Password must be equals"
      }
    }else if(password === confirmPassowrd){
      formGroup.get(field2)?.setErrors(null);
    }
    return null;
  }
 }

}


