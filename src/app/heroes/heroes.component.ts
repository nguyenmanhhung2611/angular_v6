import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
// import {Observable} from 'rxjs';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  // Properties
  heroes: Hero[];
  selectedHero: Hero;
  hero: Hero = {
    id: 1,
    name: 'windstorm'
  };

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit() {
    this.getHeroes();
  }

  // Methods
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(hero.name);
  }

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();

    // Observable - Waiting response form server. It's same meaning async/wait
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
