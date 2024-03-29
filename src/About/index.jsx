const About = () => {
	return (
		<section id="o-nas" className='about'>
			<img src='/assets/img/about_img.png' alt='' className='about__img' />
			<div className='about__copy'>
				<h2 className='about__copy-title'>O nas</h2>
				<p className='about__copy-description'>
					<span>
                        <b>
						Chcemy sprawić, aby świat poczuł się lepiej dzięki produktom leczniczym przyjaznym środowisku.
                        </b>
					</span>
					<span>
						Tradycyjne firmy dążą do wypracowania zysku dla akcjonariuszy. Firma Chiesi chce być
						<b> siłą wywołującą pozytywny wpływ:</b> zmieniamy nasz sposób myślenia i metody pracy we
						wszystkich obszarach, aby tworzyć wspólną wartość.
					</span>
					<span>
						Wykorzystując szanse biznesowe, dbamy jednocześnie o pokonywanie wyzwań społecznych, a sukces
						naszej firmy przyczynia się do rozwoju społeczeństwa.
					</span>
					<span>
						Jesteśmy mocno zaangażowani w realizację Celów Zrównoważonego Rozwoju określonych przez ONZ i
						mamy jasną wizję:&nbsp;
						<b>
							zmiana modelu działania branży farmaceutycznej poprzez nowe zasady prowadzenia działalności!
						</b>
					</span>
				</p>
			</div>
		</section>
	);
};

export { About };
