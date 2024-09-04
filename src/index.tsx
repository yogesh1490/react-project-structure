// src/index.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { CssBaseline } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import router from './routes'; // Import the router

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>r
    <CssBaseline />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>,

  </React.StrictMode>
);
