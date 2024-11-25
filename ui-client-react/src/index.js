import React from 'react';
import ReactDOM from 'react-dom/client';
import './presentation/styles/App.scss';
import { AppRouter } from './application/routes';
import { Provider } from 'react-redux';
import { store } from './application/redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);
