import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from './car';
import { ApiFunctionService } from './api-function.service';


@Injectable({
  providedIn: 'root'
})
export class CarService  extends ApiFunctionService<Car>{

  constructor( http: HttpClient) {
    super("https://coffee-eg.herokuapp.com/api/items",http)
   }
  

  
                

}
