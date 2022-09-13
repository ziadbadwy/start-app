import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperOptions } from 'swiper';
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { CarService } from '../car.service';
import {DataViewModule} from 'primeng/dataview';
import { Car } from '../car';

SwiperCore.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class HomeComponent implements OnInit {
  cars!:Car[];
  constructor(carService: CarService ) {}

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  onSwiper([swiper]: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
  ngOnInit(): void {
    

  }
}


