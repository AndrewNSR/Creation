import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-caro',
  templateUrl: './caro.component.html',
  styleUrls: ['./caro.component.css']
})
export class CaroComponent {
  customOptions: OwlOptions = {
    items:1,
    dots: true,
  }
}
