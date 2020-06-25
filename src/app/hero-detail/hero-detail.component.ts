import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero'
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    // holds info about the route to this instance of this component
    private heroService: HeroService,
    private location: Location
    // angular service for interacting with the browser
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    // + is a JS operator that converts strings to numbers (params are always strings)
    // .snapshot it a static image of the route info shortly after comp creation
    this.heroService.getHero(id)
      .subscribe( hero => {
        this.hero = hero;
      });
  }

  goBack(): void {
    this.location.back();
  }

}
