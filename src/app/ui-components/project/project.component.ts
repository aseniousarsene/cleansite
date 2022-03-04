import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProjectModel } from '../../models/project.model';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnDestroy {
  projectId!: number;
  project: ProjectModel | null = null;
  private sub$!: Subscription;

  constructor(
    private getData: GetDataService,
    private router: Router,
    private title: Title
  ) {
    this.title.setTitle('pcs-web - From dirt to Kings');
  }

  ngOnInit() {
    this.projectId = +this.router.url.split('/').slice(-1)[0];
    this.getData.getProjectById(this.projectId).subscribe(p => {
      this.project = p || null;
    });
  }

  ngOnDestroy(): void {
    if (this.sub$) {
      this.sub$.unsubscribe();
    }
  }

}
