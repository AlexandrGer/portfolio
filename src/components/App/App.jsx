import React from 'react';
import './App.css';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { Social } from '../Social/Social';
import { Route, Routes } from 'react-router-dom';
import { Projects } from '../Projects/Projects';
import { Footer } from '../Footer/Footer';

function App() {
	return (
		<div className="page">
			<Header />
			<div className='page__container'>
				<Social />
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/projects' element={<Projects />} />
				</Routes>
				<Footer />
			</div>
		</div>
	);
}

export default App;
