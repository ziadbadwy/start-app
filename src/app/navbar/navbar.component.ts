import { Component, OnInit } from '@angular/core';
import {MenuItem, PrimeIcons} from 'primeng/api';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    constructor() { }

     items!: MenuItem[];

    ngOnInit() {
        this.items = [
            {label: 'Home', icon:PrimeIcons.HOME,routerLink:'home'},
            {label: 'Menu', icon:PrimeIcons.LIST,routerLink:'menu'},
            {label: 'Profile', icon:PrimeIcons.USER,routerLink:'profile'},
            {label: 'Cart', icon:PrimeIcons.SHOPPING_CART,routerLink:'Cart'},
            {label: 'Log Out', icon:PrimeIcons.SIGN_OUT}

    ];
    }

}

