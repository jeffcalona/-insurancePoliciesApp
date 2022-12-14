import React from 'react';
import Navigation from './Navigation';
import { AuthProvider } from './src/Context/AuthContext';

const App = () => {

  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
};

export default App;