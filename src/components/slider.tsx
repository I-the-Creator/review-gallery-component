import cn from 'classnames';
import { useState } from 'react';

import { SlideProps } from './slider.props';
import styles from './slider.module.css';
import { ReactComponent as Arrow } from './arrow.svg';

const FADE_DURATION = 300;

export const Slider = ({ reviews }: SlideProps): JSX.Element => {
	const [slide, setSlide] = useState<number>(0);

	// slide state - fade-in or fade-out
	const [fadeState, setsFadeState] = useState<'fade-in' | 'fade-out'>('fade-in');

	//Timer statу
	const [currentTimer, setCurrentTimer] = useState<NodeJS.Timeout>();

	const handleClick = (move: number) => {
		const timer = setTimeout(() => {
			setSlide((slide) => slide + move); // upon timer change the slide number
			setsFadeState('fade-in'); // and run 'fade-in'
		}, FADE_DURATION);
		clearTimeout(currentTimer); // clear current timer if exists
		setsFadeState('fade-out');
		setCurrentTimer(timer); // set new timer
	};

	return (
		<div className={styles.slider}>
			<div
				className={cn(styles.slide, styles[fadeState])}
				style={{ transitionDuration: `${FADE_DURATION}ms` }}
			>
				<div className={styles.left}>
					<div className={styles.text}>{reviews[slide].text}</div>
					<div className={styles.name}>{reviews[slide].name}</div>
					<div className={styles.jobPosition}>{reviews[slide].jobPosition}</div>
				</div>
				<div
					className={styles.right}
					style={{ backgroundImage: `url(${reviews[slide].image})` }}
				></div>
			</div>
			{slide > 0 && (
				<button
					className={cn(styles.arrow, styles.arrowLeft)}
					onClick={() => handleClick(-1)}
				>
					<Arrow />
				</button>
			)}
			{slide < (reviews.length - 1) && (
				<button
					className={cn(styles.arrow, styles.arrowRight)}
					onClick={() => handleClick(1)}
				>
					<Arrow />
				</button>
			)}
		</div>
	);
};
