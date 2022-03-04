import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProjectModel } from '../models/project.model';
import { GetDataService } from '../services/get-data.service';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit, OnDestroy {
    projectSub!: Subscription;
    projects: ProjectModel[] = [];

    constructor(private getData: GetDataService, private title: Title) {
        title.setTitle('pcs-web - Projects');
    }

    ngOnInit() {
        this.projectSub = this.getData.projects.subscribe(projects => {
            console.log(projects);

            if (projects.length) {
                this.projects = projects;
            }
        })
    }

    ngOnDestroy(): void {
        if (this.projectSub) {
            this.projectSub.unsubscribe();
        }
    }
}
