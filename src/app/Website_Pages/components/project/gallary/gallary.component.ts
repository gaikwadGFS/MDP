import { Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
@Component({
  selector: 'app-gallary',
  standalone: true,
  imports: [GalleriaModule],
  templateUrl: './gallary.component.html',
  styleUrl: './gallary.component.css'
})
export class GallaryComponent {
  displayCustom: boolean =false;

  activeIndex: number = 0;

  images: any[] =[];

  responsiveOptions: any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];

  constructor() {}

  ngOnInit() {
    this.loadImages().then((images: any[]) => {
      this.images = images;
    });
  }

  

  imageClick(index: number) {
      this.activeIndex = index;
      this.displayCustom = true;
  }

  loadImages(): Promise<any[]> {
    return Promise.resolve([
      {
        itemImageSrc: 'assets/constructions-1.jpg',
        thumbnailImageSrc: 'assets/constructions-1.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1',
      },
      {
        itemImageSrc: 'assets/constructions-2.jpg',
        thumbnailImageSrc: 'assets/constructions-2.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1',
      },
      {
        itemImageSrc: 'assets/constructions-3.jpg',
        thumbnailImageSrc: 'assets/constructions-3.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1',
      },
      {
        itemImageSrc: 'assets/constructions-2.jpg',
        thumbnailImageSrc: 'assets/constructions-2.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1',
      },
      {
        itemImageSrc: 'assets/constructions-4.jpg',
        thumbnailImageSrc: 'assets/constructions-4.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1',
      },
      {
        itemImageSrc: 'assets/constructions-1.jpg',
        thumbnailImageSrc: 'assets/constructions-1.jpg',
        alt: 'Description for Image 1',
        title: 'Title 1',
      },
    ]);
  }
}
