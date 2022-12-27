import Image from 'next/image'
import Link from 'next/link'
import { CalendarIcon } from '../svg/calendar'
import { PencilIcon } from '../svg/pencil'
import { Button } from '../Button'
import { LinkBg } from '../svg/LinkBg'
import { Tag } from '../svg/tag'
import s from './essential.module.css'

const filter = 'tips'

export const EssentialPosts = ({ posts }) => {
	return (
		<div className={s.posts}>
			<div className='container'>
				<div className={s.header}>
					<p className={s.section}>Essentials</p>
					<h2 className={s.sectionTitle}>
						Travel essentials{' '}
						<span className={s.tagBg}>
							<LinkBg fill={'#f2f1ea'} bgColor={'#f2f1ea'} />
							<span className={s.tagText}>{filter}</span>
						</span>
					</h2>
				</div>
				<div className={s.items}>
					{posts.map((post) => {
						const { id, img, date, author, title, desc, tag } = post

						return (
							<div className={s.item} key={id}>
								<div className={s.img}>
									<Image src={img} width={1300} height={865} alt={title} />
									<div className={s.tag}>
										<Link href='/'>
											<a className={s.link}>
												<LinkBg fill={'#f2f1ea'} bgColor={'#f2f1ea'} />
												<span className={s.linkInner}>
													<Tag width={30} height={18} fill={'#878787'} />
													{tag}
												</span>
											</a>
										</Link>
									</div>
								</div>
								<article className={s.article}>
									<div className={s.meta}>
										<div className={s.metaLink}>
											<CalendarIcon width={18} height={16} fill={'#878787'} />
											<Link href='/'>
												<a className={s.date}>{date}</a>
											</Link>
										</div>
										<div className={s.metaLink}>
											<PencilIcon width={18} height={16} fill={'#878787'} />
											<Link href='/'>
												<a className={s.author}>by {author}</a>
											</Link>
										</div>
									</div>
									<h5 className={s.title}>
										<Link href='/'>
											<a>{title}</a>
										</Link>
									</h5>
									<p className={s.text}>{desc}</p>
									<Button url='/destinations' type='transparent' />
								</article>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

// TODO: find another tag icon
