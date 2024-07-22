import { Component, Input, Output, EventEmitter } from '@angular/core'
import { ICategory } from '../models/icategory'

@Component({
    selector: 'app-element',
    standalone: true,
    imports: [],
    templateUrl: './element.component.html',
    styleUrl: './element.component.css',
})
export class ElementComponent {
    @Input() childInput?: ICategory
}
