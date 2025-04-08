import { useQuery } from '@tanstack/react-query';
import { ProductService } from '../../../services/product.service';

export const useGetAllProducts = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ['get all products'],
    queryFn: () => ProductService.getProducts(),
    select: (data) => data,
  });

  return { products, isLoading };
};
