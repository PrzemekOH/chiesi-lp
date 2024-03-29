import { NetZero } from '../Certified/NetZero';

const Actions = () => {
	return (
		<section id='nasze-dzialania' className='actions'>
            <div className="actions-wrapper">
			<NetZero />
			<h2 className='actions__title'>Nasze działania</h2>
			<div className='actions__box'>
				<div className='actions__box-item'>
					<div className='actions__box-item-img'>
						<img src='/assets/img/icon1.svg' alt='' />
					</div>
					<p className='actions__box-item-description'>
						<b>Przyjęcie nowego statusu prawnego B Corp*</b>
						<br />
						(Włochy i USA - 2018; Francja - 2021) oznacza, że mamy prawny obowiązek dbać o środowisko, a
						zrównoważony rozwój leży u podstaw wszystkich decyzji w firmie.
					</p>
				</div>
				<div className='actions__box-item'>
					<div className='actions__box-item-img'>
						<img src='/assets/img/icon2.svg' alt='' />
					</div>
					<p className='actions__box-item-description'>
						<b>Opracowanie już w 2019 roku pierwszego inhalatora ciśnieniowego</b> <br />z dozownikiem o
						minimalnym poziomie emisji CO2
					</p>
				</div>
				<div className='actions__box-item'>
					<div className='actions__box-item-img'>
						<img src='/assets/img/icon3.svg' alt='' />
					</div>
					<p className='actions__box-item-description'>
						<b>Opracowanie w 2019 r. wspólnie z naszymi dostawcami Kodeksu Współzależności,</b> <br />
						czyli kodeksu postępowania obowiązującego w całym łańcuchu wartości, zainspirowanego Celami
						Zrównoważonego Rozwoju ONZ.
					</p>
				</div>
				<div className='actions__box-item'>
					<div className='actions__box-item-img'>
						<img src='/assets/img/icon4.svg' alt='' />
					</div>
					<p className='actions__box-item-description'>
						<b>Dołączenie w marcu 2021 r. do Ramowej Konwencji ONZ</b> <br />w sprawie zmian klimatu Race to
						Zero.
					</p>
				</div>
			</div>
            </div>
		</section>
	);
};

export { Actions };
