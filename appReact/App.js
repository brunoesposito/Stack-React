import React from 'react';
import { Provider } from 'react-redux';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';

import store from './App/redux/storage';
import Routes from './App/routes';

function App() {
    return (
        <Provider store={store}>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <Routes />
                </ScrollView>
            </SafeAreaView>
        </Provider>
    );
};

export default App;
