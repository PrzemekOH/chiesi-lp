const GoalTop = () => {
	return (
		<div className='goal'>
			<img src='/assets/img/goal-top.png' alt='' className='goal__img' />
			<div className='goal__description'>
				<h3 className='goal__title'>Energia ze źródeł odnawialnych</h3>
				<p>
					W naszej działalności świadomie polegamy w coraz większym stopniu na odnawialnych źródłach energii.
				</p>
				<p>W 2021 roku:</p>
				<p className='goal__description-box'>
					<span className='goal__description-box-percent'>92%</span>
					<span>
						<b>energii elektrycznej zużytej przez Grupę Chiesi</b>
						pochodziło z certyfikowanych instalacji energii odnawialnej
					</span>
				</p>
				<p className='goal__description-box'>
					<span className='goal__description-box-percent'>100%</span>
					<span>
						<b>energii elektrycznej zużytej w naszych zakładach produkcyjnych</b>
						pochodziło z odnawialnych źródeł
					</span>
				</p>
				<p>
					Gleba, powietrze i woda to zasoby, które <b>zobowiązujemy się chronić.</b>
				</p>
				<p>Dane z raportu nt. zrównoważonego rozwoju Chiesi za 2021 r.</p>
			</div>
		</div>
	);
};

export { GoalTop };
