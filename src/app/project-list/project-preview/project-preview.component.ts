import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectModel } from 'src/app/models/project.model';

@Component({
    selector: 'app-project-preview',
    templateUrl: './project-preview.component.html',
    styleUrls: ['./project-preview.component.scss']
})
export class ProjectPreviewComponent implements OnInit {

    @Input() project!: ProjectModel;

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    goToProject(projectId: number) {
        this.router.navigate(['/project', projectId]);
    }
}
