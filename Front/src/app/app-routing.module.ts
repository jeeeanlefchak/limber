
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AppComponent } from './app.component';

export const baseRoutes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(baseRoutes, { useHash: true })
    ],
    exports: [RouterModule]
})
export class BaseRoute {
    constructor(router: Router) {
        // router.events.subscribe((event) => {
        //     router.navigate(['']);
        // });
    }
}
