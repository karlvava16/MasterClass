import { ISubcategory } from './isubcategory'

export interface ICategory {
    name: string
    link: string
    imagePath: string
    subcategories?: ISubcategory[]
}
