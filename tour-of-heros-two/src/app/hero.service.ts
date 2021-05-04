import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import Hero from './type/hero.type';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  private heroesUrl= 'api/heroes';

  constructor(private http: HttpClient) {}

  getHeroes() : Observable<Hero[]>{
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHeroById(id: number): Observable<Hero>{
    return this.http.get<Hero>(this.heroesUrl+ '/' +id );
  }
}
