import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { OpenService } from './open.service';

@Component({
    selector: 'app-open',
    templateUrl: './open.component.html',
    styleUrls: ['./open.component.scss'],
    animations: [routerTransition()]
})
export class OpenComponent implements OnInit {
    constructor(
        //private openService: OpenService
    ) {}

    ngOnInit() {}
}
