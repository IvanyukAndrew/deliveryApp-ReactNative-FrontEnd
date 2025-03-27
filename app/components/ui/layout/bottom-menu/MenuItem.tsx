import { FC } from 'react';
import { Pressable, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { IMenuItem, TypeNavigate } from './menu.interface';

interface iMenuItemProps {
  item: IMenuItem;
  nav: TypeNavigate;
  currentRoute?: string;
}

const MenuItem: FC<iMenuItemProps> = ({ item, nav, currentRoute }) => {
  const isActive = item.path === currentRoute;

  return (
    <Pressable onPress={() => nav(item.path)} className="items-center w-[20%]">
      <Feather name={item.icon} size={26} color={isActive ? '#47AA52' : '#374151'} />
    </Pressable>
  );
};

export default MenuItem;
