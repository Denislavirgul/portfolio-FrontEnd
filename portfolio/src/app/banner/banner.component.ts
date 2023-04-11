import { Component } from '@angular/core';
import { NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [NgbCarouselModule, NgIf],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);



  images = [
    'assets/carousel/c01.jpg',
    'assets/carousel/c02.jpg',
    'assets/carousel/c03.jpg'
  ];

  // images = [0,1,2].map((n) =>
  //   'assets/carousel/c01.jpg',
  //   'assets/carousel/c02.jpg',
  //   'assets/carousel/c03.jpg'
  // );




  // images:any[] = [
  //   {src: "assets/carousel/c01.jpg"},
  //   {src: "assets/carousel/c02"},
  //   {src: "assets/carousel/03.jpg"}
  // ];


  // images:any[] = [
  //   {src: 'assets/carousel/c01.jpg'},
  //   {src: "assets/carousel/c02"},
  //   {src: "assets/carousel/03.jpg"}
  // ];


}
