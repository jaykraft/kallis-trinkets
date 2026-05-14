import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

interface Stat {
  value: string;
  label: string;
}

@Component({
  selector: 'app-our-story',
  imports: [NgOptimizedImage],
  templateUrl: './our-story.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OurStoryComponent {
  readonly stats: Stat[] = [
    { value: '100+', label: 'Happy Customers' },
    { value: '5 ★', label: 'Average Rating' },
    { value: '100%', label: 'Custom Made' },
  ];
}
