import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { GetDataService } from '../../../services/get-data.service';
import { PeopleModel } from '../../../models/people.model';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-team-member',
    templateUrl: './team-member.component.html',
    styleUrls: ['./team-member.component.scss']
})
export class TeamMemberComponent implements OnInit, OnDestroy {
    @Input() id!: number;
    member!: PeopleModel;
    private sub$!: Subscription;

    constructor(private getData: GetDataService) {
    }

    ngOnInit() {
        this.sub$ = this.getData.getMemberById(this.id).pipe().subscribe(member => {
            this.member = member[0];
        });
    }

    ngOnDestroy(): void {
        if (this.sub$) {
            this.sub$.unsubscribe();
        }
    }

}
