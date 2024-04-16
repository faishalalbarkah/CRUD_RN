import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './routes';
import { Provider } from 'react-redux'
import store from './services/store';

const App = () => {
    return (
        <>
        <Provider store={store}>
            <NavigationContainer>
                <Routes />
            </NavigationContainer>
        </Provider>

    </>
    )
}


export default App