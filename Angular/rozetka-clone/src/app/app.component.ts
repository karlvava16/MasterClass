import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { ElementsComponent } from './elements/elements.component'
import { HttpClientModule } from '@angular/common/http'

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, ElementsComponent, HttpClientModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'], // Fixed typo from 'styleUrl' to 'styleUrls'
})
export class AppComponent {
    title = 'rozetka-clone'
}
