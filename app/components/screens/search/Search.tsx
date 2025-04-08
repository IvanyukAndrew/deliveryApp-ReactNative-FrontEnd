import { FC } from 'react';
import { Text, View } from 'react-native';
import Layout from '../../ui/layout/Layout';
import { useSearch } from './useSearch';
import Heading from '../../ui/Heading';
import Field from '../../ui/field/Field';
import { ISearchFormData } from './search.interface';
import Loader from '../../ui/Loader';
import Catalog from '../../ui/catalog/Catalog';

const Search: FC = () => {
  const { products, isLoading, control, searchTerm } = useSearch();
  return (
    <Layout>
      <Heading>Search</Heading>

      <View className="mt-3">
        <Field<ISearchFormData>
          control={control}
          name="searchTerm"
          placeholder="Typed something..."
          keyboardType="web-search"
        />
      </View>
      {!!searchTerm ? (
        <View className="mt-2">
          {isLoading ? <Loader /> : <Catalog products={products || []} />}
        </View>
      ) : null}
    </Layout>
  );
};

export default Search;
