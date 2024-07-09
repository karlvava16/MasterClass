import { Component } from '@angular/core'

@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.css',
})
export class SkillsComponent {
    skills = [
        'C++',
        'C#',
        'Python',
        'JavaScript',
        'TypeScript',
        '.NET',
        'Maui',
        'WPF',
        'WinForms',
        'API',
        'Win32',
        'ADO.NET',
        'ASP.NET',
        'T-SQL',
        'HTML',
        'CSS',
        'SASS',
        'React',
        'Angular',
        'Linux',
    ]
}
