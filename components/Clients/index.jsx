import Image from 'next/image'
import Link from 'next/link'
import s from './clients.module.css'

export const Clients = () => {
	return (
		<div className={s.clients}>
			<div className='container'>
				<div className={s.items}>
					<Link href='/'>
						<a className={s.item}>
							<Image src='/images/client-1.png' width={150} height={95} />
						</a>
					</Link>
					<Link href='/'>
						<a>
							<Image className={s.item} src='/images/client-2.png' width={150} height={95} />
						</a>
					</Link>
					<Link href='/'>
						<a>
							<Image className={s.item} src='/images/client-3.png' width={150} height={95} />
						</a>
					</Link>
					<Link href='/'>
						<a>
							<Image className={s.item} src='/images/client-4.png' width={150} height={95} />
						</a>
					</Link>
					<Link href='/'>
						<a>
							<Image className={s.item} src='/images/client-5.png' width={150} height={95} />
						</a>
					</Link>
				</div>
			</div>
		</div>
	)
}