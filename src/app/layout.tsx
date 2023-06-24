import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import './globals.scss'
export const metadata = {
	title: 'Code Canvas',
	description: 'Site Portfolio, Serhii Kozin',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
