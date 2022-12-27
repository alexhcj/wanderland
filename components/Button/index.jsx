import Link from 'next/link'
import { ArrowIcon } from '../svg/arrow'
import classNames from 'classnames/bind'
import s from './button.module.css'

let cx = classNames.bind(s)

export const Button = ({url = '/', type}) => {
    let btn = cx('btn', type)
    
	return (
        <Link href={url}>
			<a className={btn}>
				<span className={s.text}>Read more</span>
				<ArrowIcon />
				<ArrowIcon />
			</a>
		</Link>
	)
}

// btn types: 'transparent'

// TODO: add rotate to arrow
// TODO: change right arrow animation, first would be good to make better
// BUG: rotation causes bluring
