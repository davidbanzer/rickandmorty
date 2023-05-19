import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersListComponent } from './pages/characters-list/characters-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CharactersRoutingModule } from './characters-routing.module';



@NgModule({
  declarations: [
    CharactersListComponent
  ],
  imports: [
    SharedModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }
