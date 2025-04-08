import { useQuery } from '@tanstack/react-query';
import { useTypedRoute } from '../../../hooks/useTypedRoute';
import { ProductService } from '../../../services/product.service';

export const useProduct = () => {
  const { params } = useTypedRoute<'Product'>();

  const { data: product, isLoading } = useQuery({
    queryKey: ['get category by slug', params.slug],
    queryFn: () => ProductService.getBySlug(params.slug),
  });

  return { isLoading, product };
};
