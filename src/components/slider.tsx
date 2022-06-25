import cn from 'classnames';
import { useState } from 'react';

import { SlideProps } from './slider.props';
import styles from './slider.module.css';
import { ReactComponent as Arrow } from './arrow.svg';

export const Slider = ({ reviews }: SlideProps): JSX.Element => {
	const [slide, setSlide] = useState<number>(0);

	return (
		<div className={styles.slider}>
			<div className={styles.slide}>
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
			<button className={cn(styles.arrow, styles.arrowLeft)}>
				<Arrow />
			</button>
			<button className={cn(styles.arrow, styles.arrowRight)}>
				<Arrow />
			</button>
		</div>
	);
};
