import { Component, OnInit, NgModule} from '@angular/core';
import { debug } from 'util';
//import { MDBBootstrapModule } from 'angular-bootstrap-md';

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
   // $(function() {
      // ------------------------------------------------------- //
      // Multi Level dropdowns
      // ------------------------------------------------------ //
      $("ul.dropdown-menu [data-toggle='dropdown']").on("click", function(event) {
        event.preventDefault();
        event.stopPropagation();
    
        $(this).siblings().toggleClass("show");
    
    
        if (!$(this).next().hasClass('show')) {
          $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
          $('.dropdown-submenu .show').removeClass("show");
        });
    
      });

    
   // });
    
    // $('.multi-level-dropdown .dropdown-submenu > a').on("mouseenter", function(e) {
    //   debugger;
    //   var submenu = $(this);
    //   $('.multi-level-dropdown .dropdown-submenu .dropdown-menu').removeClass('show');
    //   submenu.next('.dropdown-menu').addClass('show');
    //   e.stopPropagation();
    // });
  
    // $('.multi-level-dropdown .dropdown').on("hidden.bs.dropdown", function() {
    //   debugger;
    //   // hide any open menus when parent closes
    //   $('.multi-level-dropdown .dropdown-menu.show').removeClass('show');
    // });
  }

}
