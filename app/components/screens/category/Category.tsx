import { FC } from 'react';
import { Text } from 'react-native';
import Layout from '../../ui/layout/Layout';
import Loader from '../../ui/Loader';
import Catalog from '../../ui/catalog/Catalog';
import { useCategory } from './useCategory';

const Category: FC = () => {
  const { category, products, isLoading } = useCategory();

  if (isLoading) return <Loader />;

  return (
    <Layout>
      {category ? (
        <Catalog products={products || []} title={category.name} />
      ) : (
        <Text>Category not found</Text>
      )}
    </Layout>
  );
};

export default Category;
