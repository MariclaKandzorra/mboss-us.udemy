import React from 'react';
import ReactDOM from 'react-dom';
import Tailwindcss from 'tailwindcss';
import './library/css/globals.sass';
import './style.css';
import './assets/img/hero.gif';
import Banner from './application/components/Banner.js';
import Footer from './application/components/Footer.js';
import Header from './application/components/Header.js';
import InfoCard from './application/components/InfoCard.js';
import LargeCard from './application/components/LargeCard.js';
import MediumCard from './application/components/MediumCard.js';
import SmallCard from './application/components/SmallCard.js';
import Home from './index.js';

import * as serviceWorker from './src/serviceWorker.js';

run( Banner, Footer, Header, InforCard, LargeCard, MediumCard, SmallCard, Home);

ReactDOM.render(<Home />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
