import { Component } from '@angular/core';
import { Heroe, HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes:Heroe[]=[];

  constructor (private _heroesService:HeroesService){

  }

  ngOnInit():void{
    this.heroes=this._heroesService.getHeores();
    console.log(this.heroes);
  }

}
