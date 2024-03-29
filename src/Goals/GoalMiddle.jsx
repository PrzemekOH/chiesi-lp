const GoalMiddle = () => {
	return (
		<div className='goal middle'>
			<div className='goal__description'>
				<h3 className='goal__title'>Recykling odpadów</h3>
				<img src='/assets/img/plus9.svg' alt='' />
				<p>W 2021 r. Grupa Cheisi wytworzyła</p>
				<p className='goal__description-box'>
					<span className='goal__description-box-percent'>o 26%</span>
					<span>mniej odpadów niż w 2020 r.,</span>
				</p>
				<p className='goal__description-box'>
					<span className='goal__description-box-percent'>o 30%</span>
					<span>mniej odpadów niż w 2019 r.,</span>
				</p>
			</div>
			<img src='/assets/img/goal-middle.png' alt='' className='goal__img' />
		</div>
	);
};

export { GoalMiddle };
