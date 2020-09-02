// pages/index.jsx
import Head from 'next/head';

import Header from './_components/_layouts/Header';
const Home = () => (
	<div>
		<Head>
			<title>So.Fa.Dog</title>
			<link rel="icon" href="/color-logo.ico" />
		</Head>

		<div className="w-full">
			<Header/>
		</div>
	</div>
)

export default Home
