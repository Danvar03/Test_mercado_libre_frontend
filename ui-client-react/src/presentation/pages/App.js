import "../styles/App.css";
import React from "react";
const Header = process.env.NODE_ENV === 'development'
  ? React.lazy(() => import('remote/Header')) 
  : null;

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<div>Loading...</div>}>
        <Header />
      <h1> Mercado -Libre-Test</h1>
      </React.Suspense>
    </div>
  );
}

export default App;
