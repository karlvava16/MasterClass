import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
    selector: 'app-error404-page',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './error404-page.component.html',
    styleUrl: './error404-page.component.css',
})
export class Error404PageComponent {}
