import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class CategoriesService {
    private jsonURL = 'http://localhost:3000/categories' // Updated to match json-server URL

    constructor(private http: HttpClient) {}

    getCategories(): Observable<any> {
        return this.http.get(this.jsonURL)
    }
}
