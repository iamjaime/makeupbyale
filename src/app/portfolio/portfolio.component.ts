import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.isotope()
  }

  isotope() {
    if ($('.portfolio-items').length) {
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

}
