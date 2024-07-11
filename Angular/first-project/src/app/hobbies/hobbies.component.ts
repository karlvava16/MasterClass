import { Component } from '@angular/core'

@Component({
    selector: 'app-hobbies',
    standalone: true,
    imports: [],
    templateUrl: './hobbies.component.html',
    styleUrl: './hobbies.component.css',
})
export class HobbiesComponent {
    Hobbies = [
        [
            'https://cdn.nba.com/manage/2024/07/GettyImages-2160618408.jpg',
            'play basketball',
        ],
        [
            'https://i.pcmag.com/imagery/roundups/06pbrFQKnLsVI0PIgatg35X-34..v1707500494.jpg',
            'play computer games',
        ],
        [
            'https://acousticlife.tv/wp-content/uploads/2019/07/how-to-play-acoustic-guitar.jpg',
            'play guitar',
        ],
    ]
}
