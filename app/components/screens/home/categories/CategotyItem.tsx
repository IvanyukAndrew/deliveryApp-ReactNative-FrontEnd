import { FC } from 'react';
import { Pressable, Text, Image } from 'react-native';
import { ICategory } from '../../../../types/category.interface';
import { useTypedNavigation } from '../../../../hooks/useTypedNavigation';
import { getMediaSource } from '../../../../utils/getMediaSource';

interface ICategotyItem {
  category: ICategory;
}

const CategotyItem: FC<ICategotyItem> = ({ category }) => {
  const { navigate } = useTypedNavigation();

  return (
    <Pressable
      className="rounded-xl bg-gray-100 p-5 mx-2"
      key={category.id}
      onPress={() => navigate('Category', { slug: category.slug })}>
      <Image
        source={getMediaSource(category.image)}
        className="w-14 h-12 p-3"
        style={{ resizeMode: 'cover' }}
        alt={category.name}
      />
      <Text className="font-normal text-xs text-center">{category.name}</Text>
    </Pressable>
  );
};

export default CategotyItem;
