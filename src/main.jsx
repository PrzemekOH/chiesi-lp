import React from 'react';
import ReactDOM from 'react-dom/client';
import { Hero } from './Hero';
import { Header } from './Header';
import { About } from './About';
import { Mission } from './Mission';
import { Certified } from './Certified';
import { Actions } from './Actions';
import { Goals } from './Goals';
import {Footer} from './Footer';

import './style.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Header />
		<Hero />
		<About />
		<Mission />
		<Certified />
		<Actions />
		<Goals />
    <Footer/>
	</React.StrictMode>
);
