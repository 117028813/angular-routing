import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  hero = {
    id: 1
  }
  selectedId

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.selectedId = this.route.snapshot.paramMap.get('id')
  }

}
