import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './global.css';
import Navigation from './app/navigation/Navigation';
import AuthProvider from './app/providers/auth/AuthProvider';
import Toast from './app/components/ui/Toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './app/store/store';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <AuthProvider>
            <SafeAreaProvider>
              <Navigation />
            </SafeAreaProvider>
          </AuthProvider>
        </PersistGate>
      </Provider>
      <StatusBar style="auto" />
      <Toast />
    </QueryClientProvider>
  );
}
