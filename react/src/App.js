import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/storage';
import Routes from './routes';
import { GlobalStyle } from './global/style';

function App() {
    return (
        <>
            <GlobalStyle />
            <Provider store={store}>
                <Routes />
            </Provider>
        </>
    );
}

export default App;
