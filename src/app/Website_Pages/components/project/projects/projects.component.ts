import { Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { RadioButton } from 'primeng/radiobutton';
import { Checkbox } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [GalleriaModule,FormsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  images: any[] | undefined;

  position: 'bottom' | 'top' | 'left' | 'right' = 'bottom';

  showIndicatorsOnItem: boolean = false;

  // positionOptions = [
  //     {
  //         label: 'Bottom',
  //         value: 'bottom'
  //     },
  //     // {
  //     //     label: 'Top',
  //     //     value: 'top'
  //     // },
  //     // {
  //     //     label: 'Left',
  //     //     value: 'left'
  //     // },
  //     // {
  //     //     label: 'Right',
  //     //     value: 'right'
  //     // }
  // ];
  ngOnInit() {
    this.loadImages().then((images) => {
        this.images = images;
    });
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
