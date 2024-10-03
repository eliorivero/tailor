import type { Metadata } from 'next'

import './globals.css'
import TopBar from '@/components/TopBar'

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
		description: 'Land it today!',
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
				<div className="flex h-screen flex-col">
					<TopBar />
					<div className="flex-1 flex flex-col md:flex-row">
						<div className="w-full md:w-1/2 bg-background flex items-center justify-center p-8 md:p-12">
							<header>
								<div className="header-content">
									<h1>
										<span className="light">Tailor</span>
										<p>Land it today!</p>
									</h1>
								</div>
							</header>
						</div>
						<div className="w-full md:w-1/2 bg-muted flex items-center justify-center p-8 md:p-12 bg-violet-200">
							{children}
						</div>
					</div>
				</div>
			</body>
		</html>
	)
}
