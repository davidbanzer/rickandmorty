import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Character } from 'src/app/data/interfaces/Character';
import { Info } from 'src/app/data/interfaces/Info';
import { CharacterService } from 'src/app/data/services/api/character.service';
import {Gender} from 'src/app/data/constants/character/Gender';
import {Status} from 'src/app/data/constants/character/Status';
@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit{

  charactersList: Character[];
  pageInformation: Info;
  currentPage: number;
  statusFilter: string;
  genderFilter: string;
  nameFilter: string;
  specieFilter: string;
  characterSuscription: Subscription | undefined;
  genderEnum = Gender;
  statusEnum = Status;
  isLoading: boolean;
  

  constructor(private characterService: CharacterService) { 
    this.charactersList = [];
    this.pageInformation = {
      count: 0,
      pages: 0,
      next: '',
    }
    this.currentPage = 1;
    this.statusFilter = Status.All;
    this.genderFilter = Gender.All;
    this.nameFilter = '';
    this.specieFilter = '';
    this.isLoading = true;

  }

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void{
    this.isLoading = true;
    this.characterSuscription = this.characterService.getCharacters(this.currentPage,this.nameFilter,this.specieFilter,this.genderFilter,this.statusFilter).subscribe((response) => {
      this.charactersList = response.results;
      this.pageInformation = response.info;
      this.isLoading = false;
    });
  }

  applyFilters(): void {
    this.currentPage = 1;
    this.loadCharacters();
  }

  nextPage(): void{
    if(this.pageInformation.next){
      this.charactersList = [];
      this.currentPage++;
      this.loadCharacters();
    }
  }
  previousPage(): void{
    if(this.currentPage > 1){
      this.charactersList = [];
      this.currentPage--;
      this.loadCharacters();
    }
  }
  enumValues(enumObj: any): any[] {
    return Object.values(enumObj);
  }

  capitalizeFirstLetter(word: string): string{
    return word.charAt(0).toUpperCase() + word.slice(1);
  }


  ngOnDestroy(): void {
    if(this.characterSuscription){
      this.characterSuscription.unsubscribe();
    }
  }
  
}
