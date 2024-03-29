const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer-wrapper'>
				<div className='footer__logo'>
					<p className='footer__logo-title super-font'>
						Sprawmy by&nbsp;świat
						<span>poczuł się lepiej</span>
					</p>
					<img src='/assets/img/logo_color.svg' alt='' className='footer__logo-img' />
				</div>
				<div className='footer__menu'>
					<ul className='footer__menu-top'>
						<li>
							<a href='#o-nas'>O nas</a>
						</li>
						<li>
							<a href='#nasza-misja'>Nasza misja</a>
						</li>
						<li>
							<a href='#nasze-dzialania'>Nasze działania</a>
						</li>
						<li>
							<a href='#innowacje'>Innowacje</a>
						</li>
						<li>
							<a href='#'>Kontakt</a>
						</li>
					</ul>
					<div className='footer__menu-bottom'>
						<p className='footer__menu-copyright'>&copy; Chiesi Wszelkie prawa zastrzeżone</p>
						<div className='footer__menu-bottom-docs'>
							<a href='#'>Polityka prwatności</a>
							<a href='#'>RODO klauzule informacyjne</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export { Footer };
