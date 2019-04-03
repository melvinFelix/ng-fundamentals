import { Component } from "@angular/core";
import { componentFactoryName } from "@angular/compiler";

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styles: [`
        .nav.navbar-nav {
            font-size: 15px;
        }
        #searchForm {
            margin-left: 100px;
        }
        @media (max-width: 1200px) {
            #searchForm {
                display: none
            }
        }
    `]
})

export class NavBarComponent {

}