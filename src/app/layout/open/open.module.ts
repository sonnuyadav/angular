import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpenRoutingModule } from './open-routing.module';
import { OpenComponent } from './open.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, OpenRoutingModule, PageHeaderModule],
    declarations: [OpenComponent]
})
export class OpenModule {}
