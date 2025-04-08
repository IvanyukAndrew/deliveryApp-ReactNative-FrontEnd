import { FC } from 'react';
import { Text, View } from 'react-native';
import { useGetAllProducts } from './useGetAllProducts';
import Loader from '../../ui/Loader';
import Layout from '../../ui/layout/Layout';
import Heading from '../../ui/Heading';
import Catalog from '../../ui/catalog/Catalog';

const Explorer: FC = () => {
  const { products, isLoading } = useGetAllProducts();

  return isLoading ? (
    <Loader />
  ) : (
    <Layout>
      <Catalog products={products || []} title="Explorer" />
    </Layout>
  );
};

export default Explorer;
