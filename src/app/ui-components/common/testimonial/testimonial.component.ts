import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { GetDataService } from '../../../services/get-data.service';
import { TestimonialModel } from '../../../models/testimonial.model';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-testimonial',
    templateUrl: './testimonial.component.html',
    styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit, OnDestroy {
    @Input() id!: number;
    testimonial!: TestimonialModel;
    private sub$!: Subscription;

    constructor(private getData: GetDataService) {
    }

    ngOnInit() {
        this.getData.getTestimonialById(this.id).subscribe(testimonial => {
            this.testimonial = testimonial[0];
        });
    }

    ngOnDestroy(): void {
        if (this.sub$) {
            this.sub$.unsubscribe();
        }
    }

}
