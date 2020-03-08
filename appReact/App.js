import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';

import { store, persistor } from './App/redux/storage';
import Routes from './App/routes';

function App() {
    return (
        <Provider store={store}>
            <StatusBar barStyle="dark-content" />
            <PersistGate loading={null} persistor={persistor}>
                <SafeAreaView>
                    <ScrollView contentInsetAdjustmentBehavior="automatic">
                        <Routes />
                    </ScrollView>
                </SafeAreaView>
            </PersistGate>
        </Provider>
    );
};

export default App;
