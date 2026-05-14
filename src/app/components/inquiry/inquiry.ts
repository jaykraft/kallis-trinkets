import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

@Component({
  selector: 'app-inquiry',
  imports: [ReactiveFormsModule],
  templateUrl: './inquiry.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InquiryComponent {
  readonly submitState = signal<SubmitState>('idle');

  readonly productTypes = [
    { value: 'tumbler', label: 'Tumbler Engraving' },
    { value: 'figurine', label: '3D Printed Figurine' },
    { value: 'general', label: 'General Inquiry' },
  ];

  readonly form = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(2)] }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    productType: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    message: new FormControl('', { nonNullable: true }),
  });

  get nameControl() { return this.form.controls.name; }
  get emailControl() { return this.form.controls.email; }
  get productTypeControl() { return this.form.controls.productType; }

  isInvalid(control: FormControl): boolean {
    return control.invalid && (control.dirty || control.touched);
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitState.set('submitting');

    // Wire up to your form service here (e.g. Formspree, EmailJS, or a backend API)
    setTimeout(() => {
      this.submitState.set('success');
      this.form.reset();
    }, 800);
  }

  resetForm(): void {
    this.submitState.set('idle');
  }
}
