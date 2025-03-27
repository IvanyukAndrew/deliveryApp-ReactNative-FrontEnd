import { Text, TextInput, View } from 'react-native';
import { IField } from './field.interface';
import { Controller } from 'react-hook-form';
import cn from 'clsx';

const Field = <T extends Record<string, any>>({
  control,
  name,
  rules,
  className,
  ...rest
}: IField<T>): JSX.Element => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
        <>
          <View
            className={cn(
              'bg-wthite w-full pb-4 pt-2.5 px-4 my-1.5 rounded-md',
              error ? 'border border-red-500' : 'border border-gray-400',
            )}>
            <TextInput
              autoCapitalize="none"
              onChangeText={onChange}
              onBlur={onBlur}
              value={(value || '').toString()}
              className="text-black text-base"
              placeholderTextColor="#6A6A6A"
              {...rest}
            />
          </View>
          {error && <Text className="text-red-500">{error.message}</Text>}
        </>
      )}
    />
  );
};

export default Field;
