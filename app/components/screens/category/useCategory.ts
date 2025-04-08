import { useQuery } from '@tanstack/react-query';
import { useTypedRoute } from '../../../hooks/useTypedRoute';
import { CategoryService } from '../../../services/category.service';
import { ProductService } from '../../../services/product.service';

export const useCategory = () => {
  const { params } = useTypedRoute<'Category'>();
  console.log('params', params);

  const { data: category, isLoading: isCategoryLoading } = useQuery({
    queryKey: ['get category by slug', params.slug],
    queryFn: () => CategoryService.getBySlugCategory(params.slug),
  });

  const categoryId = category?.id || '';

  const { data: products, isLoading: isProductsLoading } = useQuery({
    queryKey: ['get products by category', categoryId],
    queryFn: () => ProductService.getByCategory(params.slug),
    enabled: !!categoryId,
  });

  return { category, products, isLoading: isCategoryLoading || isProductsLoading };
};
