import { FC, PropsWithChildren } from 'react';
import { Pressable, View, Text } from 'react-native';
import { IButton } from './button.interface';
import cn from 'clsx';

const Button: FC<PropsWithChildren<IButton>> = ({ children, className, ...rest }) => {
  return (
    <Pressable
      className={cn('self-center mt-3.5 bg-[#47AA52] w-full font-light rounded-md py-3', className)}
      {...rest}>
      <Text className="text-white text-center font-medium text-lg">{children}</Text>
    </Pressable>
  );
};

export default Button;
