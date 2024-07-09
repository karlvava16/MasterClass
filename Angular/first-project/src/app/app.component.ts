import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OddHobbiesComponent } from './odd-hobbies/odd-hobbies.component';
import { CvComponent } from './cv/cv.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OddHobbiesComponent, CvComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-master-project';
}
