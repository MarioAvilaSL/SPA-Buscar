import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent {
  heroes:any[]=[]
  
  termino!: string;

constructor(private activatedRoute:ActivatedRoute,
  private _heroesService:HeroesService, private router:Router ){

}
ngOnInit(){
  this.activatedRoute.params.subscribe(params => {
    this.termino = params['palabra'];
    this.heroes = this._heroesService.buscarHeroes(params['palabra']);
    console.log(this.heroes);
  });

  
}
//opcion para ver mas 
verHeroe(idx:number){
  this.router.navigate(['/heroe', idx]);
  console.log(idx);
}

}
