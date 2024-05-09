import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {

  heroe:any={};
  mostrar: boolean | undefined;

  constructor (private activatedRoute: ActivatedRoute, private _heoresService:HeroesService){
    this.activatedRoute.params.subscribe(params =>{
      this.heroe=this._heoresService.getHeroe(params['id']);
      console.log(this.heroe);

      if(this._heoresService.getHeroe(params['id']).casa == "Marvel"){
      this.mostrar = true;

      }else{
        this.mostrar = false;
      }
    })
    
  }
}

