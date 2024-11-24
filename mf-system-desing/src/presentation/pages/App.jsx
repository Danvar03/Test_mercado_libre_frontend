import React, { Suspense } from 'react';

const Header = React.lazy(() => import('remote/Header'));

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Header />
  </Suspense>
);

export default App;
