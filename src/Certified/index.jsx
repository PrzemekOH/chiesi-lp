import { NetZero } from './NetZero';

const Certified = () => {
	return (
		<section className='certified'>
			<img src='/assets/img/certified_img.png' alt='' className='certified__img' />
			<div className='certified__copy'>
				<h2 className='certified__copy-title'>
					Dzięki przestrzeganiu zasad zrównoważonego rozwoju Chiesi zdobyło certyfikat B Corp
				</h2>
				<p className='certified__copy-subtitle'>
					Certyfikat B Corp to potwierdzenie, że działalność gospodarcza firmy prowadzona jest w sposób
					odpowiedzialny.
				</p>
				<ul className='certified__copy-list'>
					<p>Jest to najbardziej restrykcyjny system kontroli tego typu na świecie:</p>
					<li>
						ponad <b>5,200</b> firm, ponad <b>150</b> branż z ponad <b> 80</b> krajów
					</li>
					<li>
						jedynie <b>3%</b> firm wnioskujących o certyfikat B Corp, pomyślnie przechodzi weryfikację
					</li>
				</ul>
				<p className='certified__copy-confirmation'>
					<p className='super-font'>Jesteśmy jedną z&nbsp;nich!</p>
					Certyfikat pierwszy raz uzyskaliśmy w 2019 r.
				</p>
			</div>
			{/* <NetZero /> */}
		</section>
	);
};

export { Certified };
