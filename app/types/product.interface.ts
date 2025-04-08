import { ICategory } from './category.interface';

export interface IProduct {
  id: string;
  name: string;
  slug: string;
  description: number;
  price: number;
  image: string;
  careatedAt: string;
  category: ICategory;
}
