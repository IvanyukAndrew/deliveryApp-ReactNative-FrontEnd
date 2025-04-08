import { useQuery } from '@tanstack/react-query';
import { ProductService } from '../../../services/product.service';
import { useSearhForm } from './useSearchForm';

export const useSearch = () => {
  const { control, searchTerm, debouncedSearch } = useSearhForm();

  const { data: products, isLoading } = useQuery({
    queryKey: ['search products'],
    queryFn: () => ProductService.getProducts(debouncedSearch),
    enabled: !!debouncedSearch,
  });

  return { products, isLoading, control, searchTerm };
};
