import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { HobbiesComponent } from './hobbies/hobbies.component'
import { CvComponent } from './cv/cv.component'

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, HobbiesComponent, CvComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'angular-master-project'
}
