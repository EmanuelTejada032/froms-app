import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { gameType } from 'src/app/interfaces/register-interfaces';



@Component({
  selector: 'app-formgroup-array',
  templateUrl: './formgroup-array.component.html',
  styles: [
  ]
})

export class FormgroupArrayComponent implements OnInit {

  gameTypeList: string[] = ["1v1", "2v2", "3v3", "crew mode"];
  characterList: string[] = ["Bodvar", "Mordex", "Nix", "Hatori", "Rayman","Cross", "Wshang", "Asuri"];
  gameListArray: gameType[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  saveSignUpData(){
    console.log("Common game array data", this.gameListArray);
    console.log("All form data", this.tournamentSignUp.value)
    this.tournamentSignUp.reset({username:"Hermandad"});
    this.gamesList.clear()
    this.gameListArray = [];
    this.gameTypeForm.reset({
      gameMode: this.gameTypeListDefault,
      characterSelection:this.characterListDefault
    });
  }

  get gamesList(){
    return this.tournamentSignUp.get('gamesList') as FormArray
  }

  get characterListDefault(){
    return `${this.characterList[0]}`
  }
  get gameTypeListDefault(){
    return `${this.gameTypeList[0]}`
  }

  tournamentSignUp: FormGroup = this.formBuilder.group({
    username: ['Hermandad', Validators.required],
    gamesList: this.formBuilder.array([
      
    ])
  })

  gameTypeForm: FormGroup = this.formBuilder.group({
    gameMode: [this.gameTypeListDefault, Validators.required],
    characterSelection: [this.characterListDefault, Validators.required]
  });

  isValidField(fieldName: string){
      
  }

  addNewForm(){
    this.gameListArray.push(this.gameTypeForm.value)
    this.gamesList.push(this.formBuilder.group(this.gameTypeForm.value, Validators.required))
  }

  removeGameFromGameList(index: number){
    this.gameListArray.splice(index,1)
    this.gamesList.removeAt(index);
  }
}
