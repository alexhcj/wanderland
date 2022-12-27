import s from './slider.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { CalendarIcon } from '../svg/calendar'
import { PencilIcon } from '../svg/pencil'
import { Button } from '../Button'
import { ControlLeft } from './Controls/ControlLeft'
import { ControlRight } from './Controls/ControlRight'

export const Slider = ({ posts }) => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	}

	return (
		<Carousel
            containerClass='carousel'
			swipeable={false}
			draggable={false}
			autoPlay={false}
			autoPlaySpeed={5000}
			transitionDuration={500}
			infinite={true}
			responsive={responsive}
			customLeftArrow={<ControlLeft />}
			customRightArrow={<ControlRight />}
		>
			{posts.map((post) => {
				const { id, title, date, author, desc, img } = post

				return (
					<div className={s.item} key={id}>
						<Image src={img} width={1920} height={930} alt={title} />
						<article className={s.article}>
							<div className={s.meta}>
								<Link href='/'>
									<a className={s.metaLink}>
										<CalendarIcon width={26} height={24} fill={'#fff'} />
										<p className={s.date}>{date}</p>
									</a>
								</Link>
								<Link href='/'>
									<a className={s.metaLink}>
										<PencilIcon width={24} height={22} fill={'#fff'} />
										<p className={s.author}>by {author}</p>
									</a>
								</Link>
							</div>
							<Link href='/'>
								<a>
									<h1 className={s.title}>{title}</h1>
								</a>
							</Link>
							<p className={s.text}>{desc}</p>
							<Button />
						</article>
					</div>
				)
			})}
		</Carousel>
	)
}

// TODO: width of article meta too long
// TODO: fix white gap under the slider item (li)
// TODO: change item animation on fading
// TODO: check for transition fading of slide item