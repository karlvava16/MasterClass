import { Component } from '@angular/core'
import { WorkTimeComponent } from '../work-time/work-time.component'
import { SkillsComponent } from '../skills/skills.component'
import { LinksComponent } from '../links/links.component'

@Component({
    selector: 'app-cv',
    standalone: true,
    imports: [WorkTimeComponent, SkillsComponent, LinksComponent],
    templateUrl: './cv.component.html',
    styleUrl: './cv.component.css',
})
export class CvComponent {}
