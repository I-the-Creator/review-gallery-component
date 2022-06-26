import React from 'react';
import { Slider } from './components/slider';
import image from './image.jpg';
import dummy from '../src/data/dummy.json';

function App() {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
			}}
		>
			<Slider
				reviews={[
					{
						id: dummy[0].id,
						name: dummy[0].name,
						jobPosition: dummy[0].jobPosition,
						text: dummy[0].text,
						image,
					},
                    {
						id: 2,
						name: 'Катерина Воронцова',
						jobPosition: 'Менеджер',
						text: 'Доходы и расходы как на ладони. Отлично',
						image,
					},
					{
						id: 3,
						name: 'Дмитрий Петров',
						jobPosition: 'Директор',
						text: 'Все работает как часы. Очень удобно',
						image,
					}
				]}
			/>
		</div>
	);
}

export default App;
