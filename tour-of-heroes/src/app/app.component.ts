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
  ]
  heroToAdd= '';
  addHero(){
    this.heroes.push(this.heroToAdd);
   //this.title = 'La revue des '+ this.heroes.length + 'héros';
  }
  
}
