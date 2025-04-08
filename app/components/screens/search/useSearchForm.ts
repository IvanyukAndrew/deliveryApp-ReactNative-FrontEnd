import { useForm } from 'react-hook-form';
import { useDebounce } from '../../../hooks/useDebounce';
import { useMemo } from 'react';
import { ISearchFormData } from './search.interface';

export const useSearhForm = () => {
  const { control, watch } = useForm<ISearchFormData>({
    mode: 'onChange',
  });

  const searchTerm = watch('searchTerm');
  const debouncedSearch = useDebounce(searchTerm, 500);
  console.log('debouncedSearch', debouncedSearch);

  return useMemo(() => ({ control, searchTerm, debouncedSearch }), [debouncedSearch]);
};
