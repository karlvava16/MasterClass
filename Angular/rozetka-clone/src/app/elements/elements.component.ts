import { Component } from '@angular/core';
import { ElementComponent } from '../element/element.component';
import { CategoriesService } from '../services/categories/categories.service';
import { ICategory } from '../models/icategory';

@Component({
    selector: 'app-elements',
    standalone: true,
    imports: [ElementComponent],
    templateUrl: './elements.component.html',
    styleUrls: ['./elements.component.css'],
})
export class ElementsComponent {
    categories?: ICategory[];

    constructor(private categoriesService: CategoriesService) {
        this.loadCategories();
    }

    loadCategories(): void {
        this.categoriesService.getCategories().subscribe((data) => {
            this.categories = data;
        });
    }
}
