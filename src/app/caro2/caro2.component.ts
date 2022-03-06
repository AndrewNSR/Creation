import { Component} from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-caro2',
  templateUrl: './caro2.component.html',
  styleUrls: ['./caro2.component.css']
})
export class Caro2Component {

  public config: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 2,
    centeredSlides: true,
    freeMode: false,
    spaceBetween: 100,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: true,
    pagination: false,
    loop:true,
    allowTouchMove: false,
    breakpoints: {
      320:{
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: false,
      },
      480:{
        slidesPerView: 1,
        spaceBetween: 30,
      },
      685:{
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024:{
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1440:{
        slidesPerView: 2,
        spaceBetween: 20,
      }
    }
  };

  public disabled: boolean = false;

  ngAfterViewInit() {
   
  }
}
