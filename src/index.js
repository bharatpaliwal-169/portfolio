import React from 'react';
import ReactDOM from 'react-dom';
import { CursorProvider } from "react-cursor-custom";
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <CursorProvider
      color="gray"
      ringSize={25}
      transitionTime={75}
    >
      <App />
    </CursorProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
