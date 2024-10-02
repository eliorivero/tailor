import { APP_NAME } from '@/lib/constants'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
	title: `Home | ${APP_NAME}`,
}

export default function IndexPage(): JSX.Element {
	return (
		<Link
			href="/donate-with-elements"
			className="card elements-style-background"
		>
			<h2 className="bottom">Donate with Elements</h2>
			<Image src="/elements-card-payment.svg" alt="Payment" width="202" height="202" />
		</Link>
	)
}
