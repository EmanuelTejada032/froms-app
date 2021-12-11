import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
      // ['Metal Gear'],
      // ['Death Stranding'],
    ], Validators.required)
  });

  get favoritesArr(){
    return this.myForm.get('favorites') as FormArray;
  }

  newFavoriteElement: FormControl = this.formBuilder.control('', Validators.required)

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
   
  }


  isValidField(field: string){
    return this.myForm.controls[field].errors &&
           this.myForm.controls[field].touched
  }

  addNewFavoriteElement(){
    if(this.newFavoriteElement.invalid){ return; }

    this.favoritesArr.push(this.formBuilder.control(this.newFavoriteElement.value, Validators.required));
    this.newFavoriteElement.reset();
  }

  removeFavoriteElementFromList(index: number){
   this.favoritesArr.removeAt(index);
  }


  save(){
    if(this.myForm.invalid){
      console.log("Invalid fields")
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value)
    this.myForm.reset();
    this.favoritesArr.clear()
  }
}
