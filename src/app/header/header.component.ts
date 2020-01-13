import { Component, OnInit, NgModule } from '@angular/core';
import { debug } from 'util';

declare var $: any;
declare var jQuery: any;



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('button.navbar-toggler').on("click", function (event) {
      event.preventDefault();
     // $('#navbarContent').hide();
      //debugger;
    });

    // ------------------------------------------------------- //
    // Multi Level dropdowns
    // ------------------------------------------------------ //

    $("li.dropdown-submenu a.dropdown-toggle").on("click", function (event) {
      event.preventDefault();
      event.stopPropagation();

      $(this).parent().parent().find('.show').removeClass('show');
      var current = $(this).parent('.dropdown-submenu').find('.dropdown-menu');
      current.addClass('show');
    });

    $('.dropdown').on('hidden.bs.dropdown', function (e) {
      $('ul.dropdown-menu').removeClass('show');
    });

  }

}

