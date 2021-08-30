import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm; //get the element called #myForm with a local reference from the html

  initialFormData= {
      name: "",
      price: 0,
      stock: 10
  }
  constructor() { }

  ngOnInit(): void {
  }

  validateNameField(){
    return this.myForm?.controls.name?.invalid && this.myForm?.controls.name?.touched
  }
  validatePriceField(){
    return this.myForm?.controls.price?.invalid && this.myForm?.controls.price?.touched
  }

  sendProductToSave(){
    console.log(this.myForm)
    this.myForm.resetForm({
      name:  this.initialFormData.name,
      price: this.initialFormData.name,
      stock: this.initialFormData.name
    })
  }
}
