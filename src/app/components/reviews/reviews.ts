import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { DecimalPipe } from '@angular/common';

interface Review {
  name: string;
  rating: number;
  comment: string;
  date: string;
}

@Component({
  selector: 'app-reviews',
  imports: [ReactiveFormsModule, DecimalPipe],
  templateUrl: './reviews.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewsComponent {
  readonly reviews = signal<Review[]>([
    {
      name: 'Sarah M.',
      rating: 5,
      comment:
        "Absolutely beautiful tumbler! The engraving was perfect and arrived exactly as I envisioned. Will definitely order again!",
      date: 'May 2025',
    },
    {
      name: 'James T.',
      rating: 5,
      comment:
        "The 3D printed cat figurine was the best gift I've ever given my daughter. She burst into happy tears — so detailed and precious.",
      date: 'April 2025',
    },
    {
      name: 'Linda R.',
      rating: 5,
      comment:
        "Amazing quality and such a personal touch. Kalli went above and beyond to make sure everything was perfect. Highly recommend!",
      date: 'March 2025',
    },
  ]);

  readonly averageRating = computed(() => {
    const all = this.reviews();
    return all.length ? all.reduce((sum, r) => sum + r.rating, 0) / all.length : 0;
  });

  readonly stars = [1, 2, 3, 4, 5];

  readonly hoverStar = signal(0);
  readonly selectedStar = signal(0);
  readonly displayStar = computed(() => this.hoverStar() || this.selectedStar());
  readonly showNoRatingError = signal(false);

  readonly submitted = signal(false);

  readonly reviewForm = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(2)] }),
    comment: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(10)] }),
  });

  get nameControl() { return this.reviewForm.controls.name; }
  get commentControl() { return this.reviewForm.controls.comment; }

  isInvalid(control: FormControl): boolean {
    return control.invalid && (control.dirty || control.touched);
  }

  onStarClick(star: number): void {
    this.selectedStar.set(star);
    this.showNoRatingError.set(false);
  }

  onStarHover(star: number): void {
    this.hoverStar.set(star);
  }

  onStarLeave(): void {
    this.hoverStar.set(0);
  }

  filledStars(rating: number): number[] {
    return Array.from({ length: rating }, (_, i) => i + 1);
  }

  emptyStars(rating: number): number[] {
    return Array.from({ length: 5 - rating }, (_, i) => i + 1);
  }

  onSubmit(): void {
    if (this.selectedStar() === 0) {
      this.showNoRatingError.set(true);
    }
    if (this.reviewForm.invalid || this.selectedStar() === 0) {
      this.reviewForm.markAllAsTouched();
      return;
    }
    const newReview: Review = {
      name: this.reviewForm.controls.name.value,
      rating: this.selectedStar(),
      comment: this.reviewForm.controls.comment.value,
      date: 'Just now',
    };
    this.reviews.update(current => [newReview, ...current]);
    this.submitted.set(true);
    this.reviewForm.reset();
    this.selectedStar.set(0);
    this.showNoRatingError.set(false);
  }

  resetReviewForm(): void {
    this.submitted.set(false);
  }
}
