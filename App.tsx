import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigations/root/RootNavigator';
import { AppStateStatus, Platform } from 'react-native';
import { QueryClient, QueryClientProvider, focusManager } from '@tanstack/react-query';
import useOnlineManager from './src/hooks/useOnlineManager';
import useAppState from './src/hooks/useAppState';

function onAppStateChange(status: AppStateStatus) {
	if (Platform.OS !== 'web') {
		focusManager.setFocused(status === 'active');
	}
}

const queryClient = new QueryClient({
	defaultOptions: { queries: { retry: 2 } },
});

function App() {
	useOnlineManager();
	useAppState(onAppStateChange);

	return (
		<QueryClientProvider client={queryClient}>
			<NavigationContainer>
				<RootNavigator />
			</NavigationContainer>
		</QueryClientProvider>
	);
}

export default App;
