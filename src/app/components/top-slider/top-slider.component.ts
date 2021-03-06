import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides, ModalController } from '@ionic/angular';
import { ProductDetailModalComponent } from '../product-detail-modal/product-detail-modal.component';

@Component({
  selector: 'app-top-slider',
  templateUrl: './top-slider.component.html',
  styleUrls: ['./top-slider.component.scss'],
})
export class TopSliderComponent implements OnInit {
  @ViewChild(IonSlides, {static: false}) slides: IonSlides;
  @Input() productos: any;
  @Input() slideperview: any;
  @Input() autoplay: any;
  @Input() enFavoritos = false;
  @Input() freemode = false;



  slideOpts = {
    slidesPerView: 1,
    freeMode: false,
    initialSlide: 0,
    autoplay: true,
    // centeredSlides:true
  };

  constructor(private router: Router, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.slideOpts.slidesPerView = this.slideperview
    this.slideOpts.autoplay = this.autoplay
    this.slideOpts.freeMode = this.freemode
  }

  redirectItem(id) {
    this.router.navigate(["/tabs/tab1/" + id]);
  }

  async slideDidLoad(event) {
    this.slides.update();
  }

  async detailModal(id: string) {

    const modal = await this.modalCtrl.create({
      component: ProductDetailModalComponent,
      componentProps: {
        id
      }
    });

    modal.present();

  }

}
