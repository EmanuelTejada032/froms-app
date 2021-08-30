import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Person {
  name: string;
  favorites: Favorite[];
}

interface Favorite{
 id: number;
 name: string;
}

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent implements OnInit {

  newFavoriteGame: string = ""
  person: Person = {
    name: "Emanuel",
    favorites: [
      {
        id: 1, name: "Brawlhalla"
      },
      {
        id: 2, name: "SAS"
      },
    ]
  }

  @ViewChild('myForm') myForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  validateNameField(){
    return this.myForm?.controls.name?.errors && this.myForm?.controls.name?.touched
  }

  removeFavoriteFromList(index: number){
    this.person.favorites.splice(index, 1)
  }

  addFavoriteToList(){
    const newFavorite: Favorite = {
      id: this.person.favorites.length + 1,
      name: this.newFavoriteGame
    }

    this.person.favorites.push({...newFavorite})
  }

  enterfunc(){
    console.log("enter func triggered")
  }
  save(){
    console.log("Sending data");
    console.log(this.myForm.value)
  }
}
