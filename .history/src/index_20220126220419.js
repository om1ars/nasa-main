import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';


ReactDOM.render(
    <Suspense fallback={<h1 style={{color: 'red', fontSize: '60'}}>Loading...</h1>}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Suspense>,
    document.getElementById('root')
  )
  