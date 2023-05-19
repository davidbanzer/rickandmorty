import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/data/interfaces/Character';
import { Info } from 'src/app/data/interfaces/Info';
import { CharacterService } from 'src/app/data/services/api/character.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit{

  charactersList: Character[];
  pageInformation: Info;

  constructor(private characterService: CharacterService) { 
    this.charactersList = [];
    this.pageInformation = {
      count: 0,
      pages: 0,
      next: '',
    }
  }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(){
    this.characterService.getCharacters().subscribe((response) => {
      this.charactersList = response.results;
      this.pageInformation = response.info;
    });
  }
  loadMoreCharacters(){
    if(this.pageInformation.next){
      let pageNumber: number = +this.pageInformation.next.split('=')[1];
      this.characterService.getCharacters(pageNumber).subscribe((response) => {
        this.charactersList = this.charactersList.concat(response.results);
        this.pageInformation = response.info;
      });
    }
  }
}
