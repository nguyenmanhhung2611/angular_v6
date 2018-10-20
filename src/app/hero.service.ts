import { Injectable } from '@angular/core';
import {HEROES} from './mock-heroes';
import { Hero } from './hero';

import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  /*getHeroes(): Hero[] {
    return HEROES;
  }*/

  // Observable - Waiting response form server. It's same meaning async/wait
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heros');
    return of(HEROES);
  }

}