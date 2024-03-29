import { GoalTop } from "./GoalTop";
import { GoalMiddle } from "./GoalMiddle";
import { GoalBottom } from "./GoalBottom";

const Goals = () => {
	return (
		<section id="innowacje" className='goals'>
			<h2 className='goals__title'>Innowacje dla realizacji celów zrównoważonego rozwoju</h2>
			<p className='goals__subtitle'>
				Jesteśmy mocno zaangażowani w realizację <b>Celów Zrównoważonego Rozwoju</b> określonych przez ONZ i
				mamy jasną wizję:
				<b> zmiana modelu działania branży farmaceutycznej poprzez nowe zasady prowadzenia działalności!</b>
			</p>
			<GoalTop />
			<GoalMiddle />
			<GoalBottom />
		</section>
	);
};

export { Goals };
