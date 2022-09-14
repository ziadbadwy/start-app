import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { SelectItem } from 'primeng/api';
import { CarService } from '../car.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],

})
export class MenuComponent implements OnInit {
  cars!: Car[];

  sortOptions?: SelectItem[];

  sortOrder?: number;

  sortField?: string;


  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.get().subscribe((data: any) => {
      this.cars = data;
    });
  }
  Toast() {
    const msg = document.getElementById('snackbar') as HTMLInputElement
    msg.className="show";
    setTimeout(() => {
      msg.className=msg.className.replace("show","")
    }, 3000);

  }
}
