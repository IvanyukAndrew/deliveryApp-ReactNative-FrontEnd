import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Pressable, Text, View } from 'react-native';
import { IAuthFormData } from '../../../types/auth.interface';
import Loader from '../../ui/Loader';
import Button from '../../ui/button/Button';
import AuthFields from './AuthFields';
import { useAuthMutations } from './useAuthMutations';

const Auth: FC = () => {
  const [isReg, setIsReg] = useState(false);

  const { reset, handleSubmit, control } = useForm<IAuthFormData>({
    mode: 'onChange',
  });

  const { loginSync, registerSync, isLoading } = useAuthMutations(reset);

  const onSubmit: SubmitHandler<IAuthFormData> = (data) => {
    if (isReg) registerSync(data);
    else loginSync(data);
  };

  return (
    <View className="mx-2 items-center justify-center h-full">
      <View className="w-9/12">
        <Text className="text-center text-black text-3xl font-medium mb-8">
          {isReg ? 'Singn up' : 'Singn in'}
        </Text>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <AuthFields control={control} />

            <Button onPress={handleSubmit(onSubmit)}>{isReg ? 'Singn up' : 'Singn in'}</Button>

            <Pressable onPress={() => setIsReg(!isReg)}>
              <Text className="text-black text-center text-base mt-6">
                {isReg ? 'Already have an account' : 'Dont have an account'}
                <Text className="text-[#47AA52]">{isReg ? ' Singn in' : ' Singn up'}</Text>
              </Text>
            </Pressable>
          </>
        )}
      </View>
    </View>
  );
};

export default Auth;
