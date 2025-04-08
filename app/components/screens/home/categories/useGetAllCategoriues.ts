import { useQuery } from '@tanstack/react-query';
import { CategoryService } from '../../../../services/category.service';

export const useGetAllCategoriues = () => {
  const { data: categeries, isLoading } = useQuery({
    queryKey: ['get categories'],
    queryFn: () => CategoryService.getCategories(),
    select: (data) => data,
  });

  return { categeries, isLoading };
};
