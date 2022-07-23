import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


<meta name="viewport" content="width=device-width, initial-scale=1"> </meta>

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="cardgame">
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
