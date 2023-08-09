import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import { Montserrat } from 'next/font/google'
import React from 'react'
import './(root)/globals.scss'
export const metadata = {
	title: 'Code Canvas',
	description: 'Site Portfolio, Serhii Kozin',
}
const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['400', '700'],
})
export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={montserrat.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
