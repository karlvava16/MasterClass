import { Component } from '@angular/core'

@Component({
    selector: 'app-odd-hobbies',
    standalone: true,
    imports: [],
    templateUrl: './odd-hobbies.component.html',
    styleUrl: './odd-hobbies.component.css',
})
export class OddHobbiesComponent {
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
