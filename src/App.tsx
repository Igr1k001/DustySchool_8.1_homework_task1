import React from 'react';

import './App.css';
import { Button } from './components/Button/Button';

function App() {
  return (
    <div className="App">
			<div className='Buttons'>
				<div className='LightBox'>
					<div className='LightPrimary'>
						<Button theme='light' type='primary'></Button>
						<Button theme='light' type='primary' hover></Button>
						<Button theme='light' type='primary' disable></Button>
					</div>
					<div className='LightSecondary'>
						<Button theme='light' type='secondary'></Button>
						<Button theme='light' type='secondary' hover></Button>
						<Button theme='light' type='secondary' disable></Button>
					</div>
				</div>
				<div className='DarkBox'>
					<div className='DarkPrimary'>
						<Button theme='dark' type='primary'></Button>
						<Button theme='dark' type='primary' hover></Button>
						<Button theme='dark' type='primary' disable></Button>
					</div>
					<div className='DarkSecondary'>
						<Button theme='dark' type='secondary'></Button>
						<Button theme='dark' type='secondary' hover></Button>
						<Button theme='dark' type='secondary' disable></Button>
					</div>
				</div>
			</div>
    </div>
  );
}

export default App;
