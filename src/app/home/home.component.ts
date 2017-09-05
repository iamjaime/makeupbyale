import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [{provide: CarouselConfig, useValue: { interval: 5000 }}]
})
export class HomeComponent implements OnInit {

  portfolioImages : any;

  constructor(public portfolio: PortfolioService) { }

  ngOnInit() {
    this.getPortfolioImages();
  }

  /**
   * Handles Getting the Portfolio Images
   */
  getPortfolioImages() {
    this.portfolio.getPortfolio().subscribe((res) => {
      console.log(res);
      this.portfolioImages = res.data;
    })
  }
}
