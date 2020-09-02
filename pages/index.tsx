// pages/index.jsx
import Head from 'next/head'

const Home = () => (
	<div>
		<Head>
			<title>So.Fa.Dog</title>
			<link rel="icon" href="/color-logo.ico" />
			<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
		</Head>

		<div className="container mx-auto">
			<h1 className="text-lg text-center m-4">TailwindUI/Next.js</h1>
			<p className="bg-green-600">This is a test of the tailwind next integration.</p>
		</div>
	</div>
)

export default Home
