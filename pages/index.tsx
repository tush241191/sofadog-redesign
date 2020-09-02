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
			<Header />
			<main className="mt-2 mx-auto max-w-screen-xl px-4 sm:mt-2 sm:px-6 md:mt-4 lg:mt-6 xl:mt-8">
				<div className="text-center">
					<h2 className="sfd-purple-text text-4xl tracking-tight leading-10 font-extrabold sm:text-5xl sm:leading-none md:text-6xl">
						Meet so.fa.dog's App
					</h2>
					<p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
						Hungry for news but short on time? So.Fa.Dog video news app delivers the latest  news when
						you’re on your way. Our custom made short-form videos cover the hottest and most crucial
						news without any nerve-racking advertising.
        			</p>
					<div className="mt-5 max-w-md mx-auto sm:block sm:justify-center md:mt-8">
						<img className="w-full rounded-md shadow" src="/20200830_Cover@2x.png"></img>
					</div>
				</div>
			</main>
		</div>
	</div>
)

export default Home
