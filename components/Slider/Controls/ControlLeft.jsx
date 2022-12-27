import s from './controlLeft.module.css'
import { ControlBgIcon } from '../../svg/controlBg'
import { ControlArrowIcon } from '../../svg/controlArrow'

export const ControlLeft = ({ onClick, ...rest }) => {
	const {
		onMove,
		carouselState: { currentSlide, deviceType },
	} = rest

	return (
		<button className={s.control} onClick={() => onClick()}>
			<ControlBgIcon width={67} height={45} fill={'#fff'} />
			<ControlArrowIcon width={40} height={31} fill={'#000'} />
		</button>
	)
}