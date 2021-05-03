import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from '../hero.service';
import {Location} from '@angular/common';




@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.css']
})
export class HeroEditComponent implements OnInit {

  hero;
  constructor(private route: ActivatedRoute, private heroService: HeroService, private location: Location, private router: Router) { }

  ngOnInit() {
  const id = Number(this.route.snapshot.paramMap.get('id')); this.hero = this.heroService.getHeroById(id);
  }

  goBack(){
    this.location.back();
    
  }

  save(){
    this.router.navigate(['/']);
  }
  
}
