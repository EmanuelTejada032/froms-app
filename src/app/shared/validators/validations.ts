import { FormControl } from "@angular/forms";

export const usernamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)' //Basic regex 
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"; //email regex



export const cantBeHermandad = (control: FormControl) => {
    if(control.value?.trim().toLowerCase() === "hermandad"){
      return {
        hermandad: "Nickname can't be hermandad"
      }
    }
    return null;
 }


// cantBeHermandad(control: FormControl){
//     if(control.value?.trim().toLowerCase() === "hermandad"){
//       return {
//         hermandad: "Nickname can't be hermandad"
//       }
//     }
//     return null;
//  }
