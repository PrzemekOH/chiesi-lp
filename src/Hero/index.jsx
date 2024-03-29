const Hero = () => {
	return (
		<section className='hero'>
			<img src='/assets/img/header_corner.svg' alt='' className='hero-corner' />
			<div className='hero__copy'>
				<p className='hero__copy-pretitle'>Jesteśmy zaangażowani w realizację celów zrównoważonego rozwoju</p>
				<h1 className='hero__copy-title'>Realizujemy cele zrównoważonego rozwoju</h1>
				<a href="#o-nas" className='hero__copy-btn'>Dowiedz się więcej</a>
			</div>
		</section>
	);
};

export { Hero };
