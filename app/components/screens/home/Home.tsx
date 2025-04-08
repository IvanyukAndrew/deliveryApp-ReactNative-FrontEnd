import { FC } from 'react';
import { Text, View } from 'react-native';
import Header from './Header';
import Banner from './banner/Banner';
import Layout from '../../ui/layout/Layout';
import Catregories from './categories/Catregories';
import Products from './products/Products';

const Home: FC = () => {
  return (
    <Layout>
      <Header />
      <Banner />
      <Catregories />
      <Products />
    </Layout>
  );
};

export default Home;
