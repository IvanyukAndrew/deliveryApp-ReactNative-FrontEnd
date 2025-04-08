import { FC } from 'react';
import { Image, Text, View } from 'react-native';
import { useProduct } from './useProduct';
import Loader from '../../ui/Loader';
import Layout from '../../ui/layout/Layout';
import { getMediaSource } from '../../../utils/getMediaSource';
import ProductHeader from './ProductHeader';
import ProductInfo from './product-info/ProductInfo';
import AddToCartButton from './product-info/AddToCartButton';

const Product: FC = () => {
  const { isLoading, product } = useProduct();

  if (isLoading) return <Loader />;
  if (!product) return null;

  return (
    <Layout>
      <ProductHeader product={product} />
      <View className="items-center justify-center mt-4">
        <Image source={getMediaSource(product.image)} width={260} height={260} />
      </View>
      <ProductInfo product={product} />
      <AddToCartButton product={product} />
    </Layout>
  );
};

export default Product;
