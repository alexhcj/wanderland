import Image from 'next/image'
import s from './divider.module.css'

export const Divider = () => {
	return (
		<div className={s.divider}>
			<Image src='/images/divider.png' width={1920} height={144} />
		</div>
	)
}
