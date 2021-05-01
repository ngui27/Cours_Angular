import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.css']
})
export class HeroEditComponent implements OnInit {

  id;
  constructor(private route: ActivatedRoute) { 

    this.id = route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
  }

}
