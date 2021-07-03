import { Component, OnInit } from '@angular/core';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';


@Component({
  selector: 'app-puertas',
  templateUrl: './puertas.component.html',
  styleUrls: ['./puertas.component.css'],
  
})
export class PuertasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  url="./assets/img/soldador.jpg";
  img1="./assets/img/img1.jpg";
  img2="./assets/img/img2.jpg";
  img3="./assets/img/img3.jpg";
  img4="./assets/img/img4.jpg";
  img5="./assets/img/img5.jpg";
  imagen1="./assets/img/imagen1.jpg";
  imagen2="./assets/img/imagen2.jpg";
  imagen3="./assets/img/imagen3.jpg";
  imagen4="./assets/img/imagen4.jpg";
  imagen5="./assets/img/imagen5.jpg";
  imagen6="./assets/img/imagen6.jpg";
  imagen7="./assets/img/imagen7.jpg";
  imagen8="./assets/img/imagen8.jpg";
  imagen9="./assets/img/imagen9.jpg";
  imagen10="./assets/img/imagen10.jpg";


  slides = [{'image': 'https://therichpost.com/wp-content/uploads/2021/02/Vuejs-Fashion-Ecommerce-Template-Free.png'}, {'image': 'https://therichpost.com/wp-content/uploads/2021/02/angular-11-bootstrap-4.5-Ecommerce-Template-Free.png'},{'image': 'https://therichpost.com/wp-content/uploads/2020/10/Angular-10-Learning-Education-Center-Free-Template-1.png'}, {'image': 'https://therichpost.com/wp-content/uploads/2020/11/Reactjs-Easy-Shop-Free-Template-with-Source-Code.png'}, {'image': 'https://therichpost.com/wp-content/uploads/2021/02/angular-11-bootstrap-4.5-Ecommerce-Template-Free.png'}];

}


