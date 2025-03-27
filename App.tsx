import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './global.css';
import Navigation from './app/navigation/Navigation';
import AuthProvider from './app/providers/auth/AuthProvider';

export default function App() {
  return (
    <>
      <AuthProvider>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </AuthProvider>
      <StatusBar style="light" />
    </>
  );
}
