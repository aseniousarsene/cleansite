import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { GetDataService } from '../../../services/get-data.service';
import { BlogModel } from '../../../models/blog.model';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-blog-list',
    templateUrl: './blog-list.component.html',
    styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit, OnDestroy {
    @Input() postNum!: number;
    public posts!: BlogModel[];
    private sub$!: Subscription;

    constructor(private getData: GetDataService) {

        this.getData.getBlogs().subscribe(resp => {
            this.posts = resp;
        });
    }

    ngOnInit() {
    }

    ngOnDestroy(): void {
        if (this.sub$) {
            this.sub$.unsubscribe();
        }
    }

}
