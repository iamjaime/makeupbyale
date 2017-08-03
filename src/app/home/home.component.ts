import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [{provide: CarouselConfig, useValue: { interval: 5000 }}]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
