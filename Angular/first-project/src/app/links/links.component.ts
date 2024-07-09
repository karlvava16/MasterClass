import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
    selector: 'app-links',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './links.component.html',
    styleUrls: ['./links.component.css'],
})
export class LinksComponent {
    links = [
        ['Github', 'https://github.com/karlvava16'],
        ['LinkedIn', 'https://www.linkedin.com/in/vladyslav-karlinskyi/'],
        ['Telegram', 'https://t.me/karl_vava'],
    ]
}
