import type { Metadata } from 'next'

import '../styles.css'

interface LayoutProps {
	children: React.ReactNode
}

export const metadata: Metadata = {
	title: {
		default: 'Tailor',
		template: '%s | Tailor',
	},
	twitter: {
		card: 'summary_large_image',
		description:
			'Tailor what you need to get it!',
		images: [
			{
				url: 'https://nextjs-typescript-react-stripe-js.vercel.app/social_card.png',
			},
		],
		site: '@tailor',
		title: 'Tailor',
	},
}

export default function RootLayout({ children }: Readonly<LayoutProps>) {
	return (
		<html lang="en">
			<body>
				<div className="container">
					<header>
						<div className="header-content">
							<h1>
								<span className="light">Stripe Sample</span>
								<br />
								Next.js, TypeScript, and Stripe 🔒💸
							</h1>
						</div>
					</header>
					{children}
				</div>
			</body>
		</html>
	)
}
