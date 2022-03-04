import { Component, OnInit, Input } from '@angular/core';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';

@Component({
    selector: 'app-icon-list',
    templateUrl: './icon-list.component.html',
    styleUrls: ['./icon-list.component.scss']
})
export class IconListComponent implements OnInit {
    @Input() icons!: IconProp[];
    @Input() size!: SizeProp;

    constructor() {
    }

    ngOnInit() {
    }

}
