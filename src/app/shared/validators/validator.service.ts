import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

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
}
