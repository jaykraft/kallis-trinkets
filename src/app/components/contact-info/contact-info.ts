import { Component, ChangeDetectionStrategy } from '@angular/core';

interface ContactItem {
  icon: string;
  label: string;
  value: string;
  href: string;
}

@Component({
  selector: 'app-contact-info',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="contact" class="py-20 lg:py-28 px-4" style="background-color: #3D2B1F;" aria-labelledby="contact-heading">
      <div class="max-w-6xl mx-auto">

        <div class="text-center mb-14">
          <span class="inline-block font-bold text-xs tracking-widest uppercase mb-4" style="color: #C8956C;">Get in Touch</span>
          <h2 id="contact-heading" class="font-serif text-4xl lg:text-5xl font-bold leading-tight" style="color: #FAF6F1;">
            We'd love to
            <br>
            <em class="font-medium not-italic" style="color: #C8956C;">hear from you</em>
          </h2>
          <p class="mt-4 text-base leading-relaxed max-w-lg mx-auto" style="color: #E8D5C0;">
            Have questions before placing an order? Want to check on your current order? We're always happy to chat!
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          @for (item of contactItems; track item.label) {
            <a
              [href]="item.href"
              class="group flex flex-col items-center text-center p-6 rounded-2xl border transition-colors"
              style="border-color: #7A5C4A; background: #4A3525;"
              [attr.aria-label]="item.label + ': ' + item.value"
              [attr.target]="item.href.startsWith('http') ? '_blank' : null"
              [attr.rel]="item.href.startsWith('http') ? 'noopener noreferrer' : null"
            >
              <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style="background: #C8956C1A;">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" aria-hidden="true" style="color: #C8956C;">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" [attr.d]="item.icon"/>
                </svg>
              </div>
              <p class="text-xs font-bold tracking-widest uppercase mb-1" style="color: #C8956C;">{{ item.label }}</p>
              <p class="text-sm font-medium" style="color: #FAF6F1;">{{ item.value }}</p>
            </a>
          }
        </div>

        <div class="mt-12 text-center">
          <p class="text-sm" style="color: #7A5C4A;">
            Business Hours: <span style="color: #E8D5C0;">Mon–Fri 9am–6pm &nbsp;•&nbsp; Sat 10am–4pm</span>
          </p>
        </div>

      </div>
    </section>
  `,
})
export class ContactInfoComponent {
  readonly contactItems: ContactItem[] = [
    {
      icon: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75',
      label: 'Email',
      value: 'hello@kallistrinkets.com',
      href: 'mailto:hello@kallistrinkets.com',
    },
    {
      icon: 'M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z',
      label: 'Phone',
      value: '(555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: 'M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z',
      label: 'Instagram',
      value: '@KallisTrinkets',
      href: 'https://instagram.com/kallistrinkets',
    },
    {
      icon: 'M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z',
      label: 'Facebook',
      value: "Kalli's Trinkets & More",
      href: 'https://facebook.com/kallistrinkets',
    },
  ];
}
