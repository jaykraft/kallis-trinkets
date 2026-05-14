import { Component, ChangeDetectionStrategy } from '@angular/core';

interface Value {
  iconPath: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-vision',
  templateUrl: './vision.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VisionComponent {
  readonly values: Value[] = [
    {
      iconPath: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
      title: 'Made with Love',
      description:
        'Every single item is crafted personally by hand. We pour genuine care into every engraving and print because we know you\'re giving someone a piece of your heart.',
    },
    {
      iconPath:
        'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
      title: 'Quality You Can Feel',
      description:
        "We use only premium materials and equipment to ensure your gift looks stunning and lasts a lifetime. No shortcuts — only the best for your loved ones.",
    },
    {
      iconPath:
        'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
      title: 'Truly One-of-a-Kind',
      description:
        "No two pieces are exactly alike. We work closely with you to bring your vision to life — your names, dates, and ideas become something truly unique.",
    },
  ];
}
