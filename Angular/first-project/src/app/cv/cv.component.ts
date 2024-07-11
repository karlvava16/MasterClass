import { Component } from '@angular/core'
import { WorkExperienceComponent } from '../work-experience/work-experience.component'
import { SkillsComponent } from '../skills/skills.component'
import { LinksComponent } from '../links/links.component'

@Component({
    selector: 'app-cv',
    standalone: true,
    imports: [WorkExperienceComponent, SkillsComponent, LinksComponent],
    templateUrl: './cv.component.html',
    styleUrl: './cv.component.css',
})
export class CvComponent {}
