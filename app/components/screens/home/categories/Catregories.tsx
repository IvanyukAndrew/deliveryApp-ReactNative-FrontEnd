import { FC } from 'react';
import { View } from 'react-native';
import { useGetAllCategoriues } from './useGetAllCategoriues';
import Loader from '../../../ui/Loader';
import Heading from '../../../ui/Heading';
import CategotyItem from './CategotyItem';

const Catregories: FC = () => {
  const { isLoading, categeries } = useGetAllCategoriues();

  return isLoading ? (
    <Loader />
  ) : (
    <View className="flex flex-col mt-5 mb-4">
      <Heading>Catregories</Heading>

      <View className="flex flex-row justify-center mt-5">
        {categeries?.map((category) => (
          <CategotyItem category={category} key={category.id} />
        ))}
      </View>
    </View>
  );
};

export default Catregories;
