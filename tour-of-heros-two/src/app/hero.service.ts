import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import Hero from './type/hero.type';

const HttpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}


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

  updateHero(hero: Hero): Observable<any>{
    return this.http.put<any>(this.heroesUrl, hero, HttpOptions);
  }

  insertHero(hero: Hero): Observable<Hero> {
  return this.http.post<Hero>(this.heroesUrl, hero, HttpOptions);
  }
  deleteHero(hero: Hero): Observable<any> {
  return this.http.delete<any>(this.heroesUrl + '/' + hero.id);
  }
}
