import { Component, OnInit } from '@angular/core';
import Hero from '../type/hero.type';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  heroes:Hero[] = [
    { id : 1, name : 'Chachou', pouvoir : "Gros Caractere"  },
    { id : 2, name : 'Chouchou', pouvoir : "Gros Lunette" },
    { id : 3, name : 'Tchoutchou', pouvoir : "Gros Tete" },
    {id:4, name: "P'tit chou", pouvoir : "Gros Couche"}
    ];
  constructor() { }

  selectedHero: Hero;

  selectHero(hero:Hero){
    this.selectedHero = hero; 
  }
  ngOnInit(): void {
  }

}
