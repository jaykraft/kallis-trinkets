import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';

interface Product {
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  badge: string;
}

@Component({
  selector: 'app-gallery',
  imports: [NgOptimizedImage],
  templateUrl: './gallery.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent {
  private readonly scrollService = inject(ScrollService);

  readonly products: Product[] = [
    {
      name: 'Tumbler Engravings',
      description:
        'Beautifully laser-engraved custom tumblers — perfect for names, monograms, meaningful quotes, or custom artwork. Available in multiple sizes and colors.',
      imageSrc: '/assets/images/tumblers.png',
      imageAlt: 'Custom engraved tumbler with personalized design',
      badge: 'Most Popular',
    },
    {
      name: '3D Printed Figurines',
      description:
        'Adorable custom 3D-printed figurines — from cat companions to personalized keepsakes. A one-of-a-kind gift that captures something truly special.',
      imageSrc: '/assets/images/cat-figurine.png',
      imageAlt: '3D printed custom cat figurine',
      badge: 'Fan Favorite',
    },
  ];

  orderProduct(event: Event): void {
    this.scrollService.scrollToSection('inquiry', event);
  }
}
