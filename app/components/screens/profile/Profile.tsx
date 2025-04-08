import { FC } from 'react';
import { Image, Text, View } from 'react-native';
import { useAuth } from '../../../hooks/useAuth';
import { useProfile } from './useProfile';
import Layout from '../../ui/layout/Layout';
import Heading from '../../ui/Heading';
import Button from '../../ui/button/Button';
import { AuthService } from '../../../services/auth/auth.service';

const Profile: FC = () => {
  const { setUser } = useAuth();
  const { profile } = useProfile();

  return (
    <Layout>
      <Heading isCenter>Profile</Heading>

      <View className="my-6 items-center justify-center">
        <Image
          source={{ uri: profile?.avatarPath }}
          className="w-40 h-40 rounded-full"
          alt={profile?.name}
        />
      </View>

      <Button onPress={() => AuthService.logout().then(() => setUser(null))} className="mt-5">
        Logout
      </Button>
    </Layout>
  );
};

export default Profile;
