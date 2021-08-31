import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent implements OnInit {

  myForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
    favorites: this.formBuilder.array([
      ['Metal Gear'],
      ['Death Stranding'],
    ], Validators.required)
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
   
  }

  isValidField(field: string){
    return this.myForm.controls[field].errors &&
           this.myForm.controls[field].touched
  }
  save(){
    if(this.myForm.invalid){
      console.log("Invalid fields")
      this.myForm.markAllAsTouched();
      return;
    }

  
    console.log(this.myForm)
  }
}
