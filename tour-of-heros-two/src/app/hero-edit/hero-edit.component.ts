import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from '../hero.service';
import {Location} from '@angular/common';
import Hero from '../type/hero.type';




@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.css']
})
export class HeroEditComponent implements OnInit {

  hero;
  constructor(private route: ActivatedRoute, private heroService: HeroService, private location: Location, private router: Router) { }

  ngOnInit() {
  const id = Number(this.route.snapshot.paramMap.get('id')); 
  this.heroService.getHeroById(id).subscribe((hero: Hero) => this.hero = hero);
  }

  goBack(){
    this.location.back();
    
  }

  save(){
    this.router.navigate(['/']);
  }
  
}
