import { Component } from '@angular/core';
let heroCount = 2 ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = '';
  titleStyle = {'font-family' : 'Arial', 'color' : 'red'};
  username = "Anonymous";
  heroes = [
    "Batman",
    "Catwoman",
    "Hulk",
    "Iron man",
    "Super man"
  ];
  evils = [
    'Joker',
    'Luthor',
    'WonderTrump',
    'Waterman'
  ]
  heroToAdd= '';
  addHero(){
    this.heroes.push(this.heroToAdd);
   //this.title = 'La revue des '+ this.heroes.length + 'héros';
  }
  heroToRemove = '';
  removeHero(heroToRemove: string) {
    this.heroes.forEach((value, index) => {
      if (value == heroToRemove) this.heroes.splice(index, 1);
    });
  
}
}