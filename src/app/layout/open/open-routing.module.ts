import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpenComponent } from './open.component';

const routes: Routes = [
    {
        path: '', component: OpenComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OpenRoutingModule {
}
