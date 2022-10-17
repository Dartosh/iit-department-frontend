import React from 'react';

import FeedsPage from './containers/feeds/feeds-page';
import ProfilePage from './containers/profile/profile-page';
import AuthPage from './containers/auth/auth-page';

function App() {
  return (
    <div className="App">
      <AuthPage />
      <ProfilePage />
      <FeedsPage />
    </div>
  );
}

export default App;
