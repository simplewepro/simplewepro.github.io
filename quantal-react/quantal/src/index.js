import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './fonts/fonts.css';

import Header from './Header.js';
import FirstSection from './FirstSection.js';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Header />, 
	document.getElementById('root')
);
ReactDOM.render(
	<FirstSection />, 
	document.getElementById('root')
);

registerServiceWorker();
