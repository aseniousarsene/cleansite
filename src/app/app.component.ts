import { Component } from '@angular/core';
import { slideInAnimation } from './animations';
import { RouterOutlet } from '@angular/router';
import { GetDataService } from './services/get-data.service';
import { take } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    animations: [
        slideInAnimation
        // animation triggers go here
    ]
})
export class AppComponent {

    prepareRoute(outlet: RouterOutlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }

    constructor(private getData: GetDataService) {
        this.getData.getProjects().pipe(take(1)).subscribe(() => { });
    }
}
