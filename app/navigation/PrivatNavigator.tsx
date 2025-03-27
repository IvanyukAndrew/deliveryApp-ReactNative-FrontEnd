import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FC } from 'react';
import { TypeRootStackParamList } from './navigation.types';
import { routes } from './routes';
import { useAuth } from '../hooks/useAuth';
import Auth from '../components/screens/auth/Auth';
import Home from '../components/screens/home/Home';

const Stack = createNativeStackNavigator<TypeRootStackParamList>();

const PrivateNavigator: FC = () => {
  const { user } = useAuth();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: '#ffffff',
        },
      }}>
      {user ? (
        routes.map((route) => <Stack.Screen key={route.name} {...route} />)
      ) : (
        <Stack.Screen name="Auth" component={Auth} />
      )}
    </Stack.Navigator>
  );
};

export default PrivateNavigator;
