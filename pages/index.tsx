// pages/index.jsx
import Head from 'next/head';

import Header from './_components/_layouts/Header';
const Home = () => (
	<div className="bg-white">
		<Head>
			<title>So.Fa.Dog</title>
			<link rel="icon" href="/color-logo.ico" />
		</Head>

		<div className="w-full">
			<Header />
			<div className="main-section">
				<main className="mt-2 mx-auto max-w-screen-xl px-4 sm:mt-2 sm:px-6 md:mt-4 lg:mt-6 xl:mt-8">
					<div className="text-center">
						<h2 className="sfd-purple-text sfd-font-bold text-4xl tracking-tight leading-10 sm:text-5xl sm:leading-none md:text-6xl">
							Meet so.fa.dog's App
        			</h2>
						<p className="sfd-font-regular mt-3 max-w-md mx-auto text-base text-gray-800 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
							Hungry for news but short on time? So.Fa.Dog video news app delivers the latest  news when
							you’re on your way. Our custom made short-form videos cover the hottest and most crucial
							news without any nerve-racking advertising.
        			</p>
						<div className="mt-5 mx-auto sm:block sm:justify-center md:mt-8">
							<img className="w-full md:w-4/5 mx-auto sfd-cover-image" src="/re_Landing page cover.png"></img>
						</div>
					</div>
				</main>
				<div className="bg-white mt-20">
					<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-24">
						<div className="md:text-center">
							<h3 className="sfd-font-bold mt-2 text-3xl leading-8 tracking-tight text-gray-900 sm:text-5xl sm:leading-10">
								What’s so special about us?
            				</h3>
						</div>

						<div className="mt-10 md:mt-20">
							<ul className="flex flex-col-reverse md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
								<li className="mt-4">
									<div className="flex">
										<div className="mx-auto">
											<img className="w-full sm:mx-auto sm:w-8/12 md:w-3/4" src="/no_ads.svg"></img>
										</div>
									</div>
								</li>
								<li className="flex items-center">
									<div className="flex">
										<div className="ml-2 md:ml-4">
											<h4 className="sfd-purple-text sfd-font-bold text-3xl leading-6 text-gray-900">No ads</h4>
											<p className="sfd-font-regular mt-2 text-base leading-6 text-gray-800">
												We believe that the best things in life are free. Free of advertisements that is. Our app delivers only news, no nerve-racking advertising or pop-ups.
                            				</p>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="sfd-no-long-read-section w-full bg-white">
					<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 pt-1">
						<div className="md:mt-10">
							<ul className="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
								<li className="flex md:pt-14">
									<div className="flex">
										<div className="ml-2 md:ml-28">
											<h4 className="sfd-font-bold text-3xl leading-6 sfd-purple-text md:text-white">No long reads</h4>
											<p className="sfd-font-regular mt-2 text-base md:text-lg leading-6 text-gray-800 md:text-white">
												Your daily dose of exitement through eight categories that cover the whole world – from scientific discoveries and world economy to arts and fashion news. Each story in 10 seconds. 24/7/365. Just swipe and enjoy!
                            				</p>
										</div>
									</div>
								</li>
								<li className="mt-7">
									<div className="flex">
										<div className="mx-auto flex justify-center md:justify-end">
											<img className="sm:hidden" src="/barber.png"></img>
											<img className="hidden sm:block sm:mx-auto sm:w-3/4" src="/barber@2x.png"></img>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default Home
