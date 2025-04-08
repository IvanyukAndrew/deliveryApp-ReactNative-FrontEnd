import { getCategoriesUrl } from '../config/api.config';
import { ICategory } from '../types/category.interface';
import { request } from './api/request.api';

export const CategoryService = {
  async getCategories() {
    return request<ICategory[]>({
      url: getCategoriesUrl(''),
      method: 'GET',
    });
  },

  async getBySlugCategory(slug: string) {
    return request<ICategory>({
      url: getCategoriesUrl(`/by-slug/${slug}`),
      method: 'GET',
    });
  },
};
