import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import Hero from './type/hero.type';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const heroes = [
      { id : 1, name : 'Chachou', pouvoir : "Grosse Caractere"  },
    { id : 2, name : 'Chouchou', pouvoir : "Grosse Lunette" },
    { id : 3, name : 'Tchoutchou', pouvoir : "Grosse Tete" },
    {id:4, name: "P'tit chou", pouvoir : "Grosse Couche"}
    ];
    return { heroes };
    
  }
  genId(heroes: Hero[]): number{
    return heroes.length>0 ? Math.max(...heroes.map(hero => hero.id)) +1 :11;
  }
}
