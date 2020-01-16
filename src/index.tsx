import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './global/App';
import * as serviceWorker from './global/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
