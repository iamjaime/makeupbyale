import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { PortfolioService } from '../portfolio.service';

declare var jquery:any;
declare var $ :any;

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

  isotope() {
    if (this.portfolioImages.length) {
      console.log('hello from portfolio items');
      var $container = $('.portfolio-items').isotope({
        itemSelector: '.portfolio-item',
        masonry: {
          columnWidth: '.portfolio-item'
        }
      });
      // filter items when filter link is clicked
      $('.portfolio-filter a').on('click', function() {
        var selector = $(this).attr('data-filter');
        $container.isotope({
          filter: selector
        });
        return false;
      });

      $('.portfolio-filter a').on('click', function() {
        $('.portfolio-filter').find('.current').removeClass('current');
        $(this).parent().addClass('current');
      });
    }
  }

  /**
   * Handles Getting the Portfolio Images
   */
  getPortfolioImages() {
    this.portfolio.getPortfolio().subscribe((res) => {
      console.log(res);
      this.portfolioImages = res.data;
      this.isotope();
    })
  }
}
