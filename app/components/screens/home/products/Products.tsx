import { FC } from 'react';
import { Text, View } from 'react-native';
import { useProducts } from './useProducts';
import Loader from '../../../ui/Loader';
import Catalog from '../../../ui/catalog/Catalog';

const Products: FC = () => {
  const { products, isLoading } = useProducts();

  return isLoading ? <Loader /> : <Catalog title="Products" products={products || []} />;
};

export default Products;
