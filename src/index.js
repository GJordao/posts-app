// Config
import registerServiceWorker from './registerServiceWorker';
// React
import React from 'react';
import ReactDOM from 'react-dom';
// Redux
import { Provider } from "react-redux";
// Store
import store from "./config/store";
// CSS
import './index.css';
// Components
import App from './App';

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
