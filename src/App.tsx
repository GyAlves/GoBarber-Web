import React from 'react';

import SignUp from './pages/SignUp';
import SignIn from './pages/Signin';
import GlobalStyle from './styles/global';

import { AuthProvider } from './contexts/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
      <GlobalStyle />
    </AuthProvider>
  </>
);
export default App;
