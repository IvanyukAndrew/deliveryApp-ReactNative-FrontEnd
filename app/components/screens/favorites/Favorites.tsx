import { FC } from 'react';
import { Text, View } from 'react-native';
import { useProfile } from '../profile/useProfile';
import Layout from '../../ui/layout/Layout';
import Catalog from '../../ui/catalog/Catalog';

const Favorites: FC = () => {
  const { profile } = useProfile();

  return (
    <Layout>
      <Catalog title="Favorites" products={profile?.favorites || []} />
    </Layout>
  );
};

export default Favorites;
