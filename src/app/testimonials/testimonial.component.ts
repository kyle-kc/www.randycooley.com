import { Component, Input } from '@angular/core';

@Component({
    selector: 'testimonial',
    templateUrl: './testimonial.component.html',
})
export class TestimonialComponent {
    @Input() testimonial: any;
}