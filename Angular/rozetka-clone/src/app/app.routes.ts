import { Routes } from '@angular/router';
import { ElementsComponent } from './elements/elements.component';
import { Error404PageComponent } from './error404-page/error404-page.component';

export const routes: Routes = [
    { path: '', redirectTo: 'categories', pathMatch: 'full' },
    { path: 'categories', component: ElementsComponent },
    { path: '**', component: Error404PageComponent },
];
