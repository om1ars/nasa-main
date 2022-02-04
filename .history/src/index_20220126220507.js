import i18next from 'i18next';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

i18next.use(HttpApi)


ReactDOM.render(
    <Suspense fallback={<h1 >Loading...</h1>}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Suspense>,
    document.getElementById('root')
  )
  