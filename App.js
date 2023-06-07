import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './Screen/RootStack';
import {LogContextProvider} from './contexts/LogContext';

const App = () => {
  return (
    <NavigationContainer>
      <LogContextProvider>
        <RootStack />
      </LogContextProvider>
    </NavigationContainer>
  );
};

export default App;
