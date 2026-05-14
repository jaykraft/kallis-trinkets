import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-footer',
  imports: [NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer style="background-color: #2E1F14;" aria-label="Site footer">
      <div class="max-w-6xl mx-auto px-4 py-12">
        <div class="flex flex-col md:flex-row items-center justify-between gap-8">

          <!-- Brand -->
          <div class="flex items-center">
            <img
              ngSrc="assets/images/logo.png"
              width="110"
              height="80"
              alt="Kalli's Trinkets & More"
              class="object-contain"
            />
          </div>

          <!-- Nav links -->
          <nav aria-label="Footer navigation">
            <ul class="flex flex-wrap justify-center gap-x-6 gap-y-2 list-none p-0 m-0">
              @for (link of footerLinks; track link.sectionId) {
                <li>
                  <a
                    [href]="'#' + link.sectionId"
                    (click)="scrollTo(link.sectionId, $event)"
                    class="text-xs font-medium transition-colors"
                    style="color: #7A5C4A;"
                  >
                    {{ link.label }}
                  </a>
                </li>
              }
            </ul>
          </nav>

          <!-- Copyright -->
          <p class="text-xs" style="color: #7A5C4A;">
            &copy; 2025 Kalli's Trinkets &amp; More. All rights reserved.
          </p>
        </div>

        <div class="mt-8 pt-8 text-center" style="border-top: 1px solid #4A3525;">
          <p class="text-xs" style="color: #4A3525;">
            Handcrafted with love &mdash; every piece, every time.
          </p>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  private readonly scrollService = inject(ScrollService);

  readonly footerLinks = [
    { label: 'Our Story', sectionId: 'our-story' },
    { label: 'Vision', sectionId: 'vision' },
    { label: 'Gallery', sectionId: 'gallery' },
    { label: 'Order', sectionId: 'inquiry' },
    { label: 'Reviews', sectionId: 'reviews' },
    { label: 'Contact', sectionId: 'contact' },
  ];

  scrollTo(sectionId: string, event: Event): void {
    this.scrollService.scrollToSection(sectionId, event);
  }
}
