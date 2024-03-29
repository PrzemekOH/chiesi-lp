const GoalBottom = () => {
	return (
		<div className='goal bottom'>
			<img src='/assets/img/goal-bottom.png' alt='' className='goal__img' />
			<div className='goal__description'>
				<h3 className='goal__title'>Zmniejszenie emisji CO2</h3>
				<img src='/assets/img/minus90.svg' alt='' />
				<p>
					Grupa Chiesi posiada plan <b>inwestycyjny o wartości</b>
				</p>
				<p className='goal__description-box'>
					<span className='goal__description-box-percent'>350 milionów €</span>
				</p>
				<p>
					Jego celem jest opracowanie do 2025 r. innowacyjnego gazu nośnikowego znacznie zmniejszającego
					emisję dwutlenku węgla z inhalatorów aerozolowych stosowanych w leczeniu{' '}
					<b>astmy i przewlekłej obturacyjnej choroby płuc (POChP).</b>
				</p>
			</div>
		</div>
	);
};

export { GoalBottom };
