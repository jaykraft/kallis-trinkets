import { inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private readonly document = inject(DOCUMENT);

  scrollToSection(sectionId: string, event?: Event): void {
    event?.preventDefault();
    this.document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}
