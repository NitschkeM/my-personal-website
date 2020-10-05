import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';


// import React from 'react';
// import {render} from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // The HTML <html> element represents the root (top-level) element of an HTML document.
  // Permitted conent of an html element:
  //  - 1 <head> element, followed by:
  //  - 1 <body> element
  // <!DOCTYPE html>
  // <html lang=''>
  //    <head>  </head>
  //    <body>  </body>
  // </html>
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA             ********/ OUTDATED LINK \*********
serviceWorker.unregister();
