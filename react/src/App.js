import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/storage';
import Routes from './routes';
import { GlobalStyle } from './global/style';

function App() {
    return (
        <>
            <GlobalStyle />
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Routes />
                </PersistGate>
            </Provider>
        </>
    );
}

export default App;
