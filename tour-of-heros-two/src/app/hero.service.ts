import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Hero from './type/hero.type';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  private heroes: Hero[] = [
    { id : 1, name : 'Chachou', pouvoir : "Gros Caractere"  },
    { id : 2, name : 'Chouchou', pouvoir : "Gros Lunette" },
    { id : 3, name : 'Tchoutchou', pouvoir : "Gros Tete" },
    {id:4, name: "P'tit chou", pouvoir : "Gros Couche"}
    ];

  constructor() {}

  getHeroes() : Hero[]{
    return this.heroes;
  }

  getHeroById(id: number): Hero {
    return this.heroes.find(( hero ) =>  hero.id ===id);
  }
}
