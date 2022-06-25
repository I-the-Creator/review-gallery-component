import React from 'react';
import { Slider } from './components/slider';
import image from './image.jpg';

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
						id: 1,
						name: 'Дана Воронцова',
						jobPosition: 'Продавец',
						text: 'Доходы и расходы как на ладони',
						image,
					},
                    {
						id: 2,
						name: 'Катерина Воронцова',
						jobPosition: 'Менеджер',
						text: 'Доходы и расходы как на ладони. Отлично',
						image,
					}
				]}
			/>
		</div>
	);
}

export default App;
