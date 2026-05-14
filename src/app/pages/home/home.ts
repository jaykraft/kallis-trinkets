import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar';
import { HeroComponent } from '../../components/hero/hero';
import { OurStoryComponent } from '../../components/our-story/our-story';
import { VisionComponent } from '../../components/vision/vision';
import { GalleryComponent } from '../../components/gallery/gallery';
import { InquiryComponent } from '../../components/inquiry/inquiry';
import { ReviewsComponent } from '../../components/reviews/reviews';
import { ContactInfoComponent } from '../../components/contact-info/contact-info';
import { FooterComponent } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [
    NavbarComponent,
    HeroComponent,
    OurStoryComponent,
    VisionComponent,
    GalleryComponent,
    InquiryComponent,
    ReviewsComponent,
    ContactInfoComponent,
    FooterComponent,
  ],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
