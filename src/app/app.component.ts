import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],


})
export class AppComponent implements OnInit, OnDestroy {
  title = 'project';
  mediaSub: Subscription = new Subscription;
  deviceXs: boolean = false;
  constructor(public mediaObserver:MediaObserver) {

  }
  ngOnInit(){
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result:MediaChange) => {
      console.log(result.mqAlias);

      this.deviceXs = result.mqAlias === 'xs' ? true : false;
    }
    );
  }
  ngOnDestroy(){
    this.mediaSub.unsubscribe();
  }

  


  // Slider Images
  slides = [{'image': 'https://therichpost.com/wp-content/uploads/2021/02/Vuejs-Fashion-Ecommerce-Template-Free.png'}, {'image': 'https://therichpost.com/wp-content/uploads/2021/02/angular-11-bootstrap-4.5-Ecommerce-Template-Free.png'},{'image': 'https://therichpost.com/wp-content/uploads/2020/10/Angular-10-Learning-Education-Center-Free-Template-1.png'}, {'image': 'https://therichpost.com/wp-content/uploads/2020/11/Reactjs-Easy-Shop-Free-Template-with-Source-Code.png'}, {'image': 'https://therichpost.com/wp-content/uploads/2021/02/angular-11-bootstrap-4.5-Ecommerce-Template-Free.png'}];

}
