import { Component, signal, ChangeDetectionStrategy, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';

interface NavLink {
  label: string;
  sectionId: string;
}

@Component({
  selector: 'app-navbar',
  imports: [NgOptimizedImage],
  templateUrl: './navbar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block sticky top-0 z-50' },
})
export class NavbarComponent {
  private readonly scrollService = inject(ScrollService);

  readonly isMenuOpen = signal(false);

  readonly navLinks: NavLink[] = [
    { label: 'Our Story', sectionId: 'our-story' },
    { label: 'Vision', sectionId: 'vision' },
    { label: 'Gallery', sectionId: 'gallery' },
    { label: 'Reviews', sectionId: 'reviews' },
    { label: 'Contact', sectionId: 'contact' },
  ];

  toggleMenu(): void {
    this.isMenuOpen.update(v => !v);
  }

  scrollTo(sectionId: string, event: Event): void {
    this.scrollService.scrollToSection(sectionId, event);
    this.isMenuOpen.set(false);
  }
}
