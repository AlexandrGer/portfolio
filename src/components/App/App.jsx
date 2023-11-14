import React from 'react';
import './App.css';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { Social } from '../Social/Social';

function App() {
	return (
		<div className="page">
			<Header />
			<div className='page__container'>
				<Main />
			</div>
			<Social />
		</div>
	);
}

export default App;
