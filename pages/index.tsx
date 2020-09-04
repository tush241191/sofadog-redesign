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
						<div className="w-full md:w-11/12 mt-5 mx-auto sm:block sm:justify-center md:mt-8 relative">
							<img className="w-full mx-auto sfd-cover-image" src="/re_Landing page cover.png"></img>
							<div className="grid leading-tight sfd-font-comfortaa-bold sfd-slogan-text text-base md:text-3xl lg:text-4xl xl:text-5xl text-black absolute">
								<span className="text-left">10 second video news</span>
								<span className="text-left">on your phone</span>
							</div>
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
				<div className="pt-5">
					<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-24">
						<div className="">
							<ul className="flex flex-col-reverse md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
								<li className="mt-4">
									<div className="flex">
										<div className="mx-auto">
											<img className="w-4/5 mx-auto sm:w-8/12 md:w-3/4" src="/no_fake_news.svg"></img>
										</div>
									</div>
								</li>
								<li className="flex items-center">
									<div className="flex">
										<div className="ml-2 md:ml-4">
											<h4 className="sfd-purple-text sfd-font-bold text-3xl leading-6 text-gray-900">No fake news</h4>
											<p className="sfd-font-regular mt-2 text-base md:text-lg leading-6 text-gray-800">
												Each one of our news stories is custom-made and created by a professional video editor and journalist. We do our own fact checking. No AI, no Google Translate, no funny business.
                            				</p>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="sfd-download-section mt-48">
					<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-24">
						<div className="lg:text-center">
							<h3 className="sfd-font-bold mt-2 text-3xl leading-8 tracking-tight text-gray-900 sm:text-5xl sm:leading-10">
								Download the app and get swiping!
            				</h3>
						</div>

						<div className="md:mt-16">
							<ul className="flex flex-col-reverse md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
								<li className="mt-4">
									<div className="grid md:flex">
										<div className="flex justify-center md:justify-end">
											<img className="sfd-mobile-img sm:hidden" src="/mobile.png"></img>
											<img className="w-full hidden sm:block sm:w-3/5 md:w-8/12" src="/mobile@2x.png"></img>
											<div className="sm:flex justify-center hidden md:hidden ml-5">
												<img className="mr-1 w-28 cursor-pointer" src="/apple.svg"></img>
												<img className="ml-1 w-28 cursor-pointer" src="/android.svg"></img>
											</div>
										</div>
										<div className="flex justify-center sm:hidden md:hidden mt-5">
											<img className="mr-1 w-2/5 cursor-pointer" src="/apple.svg"></img>
											<img className="ml-1 w-2/5 cursor-pointer" src="/android.svg"></img>
										</div>

									</div>
								</li>
								<li className="flex">
									<div className="flex">
										<div className="mt-6">
											<img className="w-36 pl-2" src="/color-logo-with-text.png" alt="So.Fa.Dog"></img>
											<p className="sfd-font-regular mt-5 pl-2 pr-12 text-base md:text-lg leading-6 text-gray-800 lg:text-gray-800">
												Creative news templates and custom made videos with engaging audio give your ears and eyes a treat. We are never done improving and hope to offer you something exciting every time you open the So.Fa.Dog app.
                            				</p>
											<div className="hidden md:flex mt-28">
												<img className="mr-1 w-2/5 cursor-pointer" src="/apple.svg"></img>
												<img className="ml-1 w-2/5 cursor-pointer" src="/android.svg"></img>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="mt-10 md:mt-32">
					<div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-6">
						<div className="py-4 md:py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-8">
							<div className="max-w-lg mx-auto">
								<h2 className="sfd-purple-text sfd-font-bold text-2xl text-center md:text-right leading-8 tracking-wide text-gray-900 sm:text-5xl sm:leading-10">
									Got some feedbark?
                				</h2>
							</div>
						</div>
						<div className="bg-white md:pt-16 px-4 sm:px-6 lg:col-span-3 lg:pt-24 pb-10 lg:px-8 xl:pl-12">
							<div className="max-w-lg mx-auto lg:max-w-none">
								<form action="#" method="POST" className="grid grid-cols-1 row-gap-6">
									<div>
										<label htmlFor="message" className="sfd-font-regular sr-only">Message</label>
										<div className="relative rounded-md shadow-sm">
											<textarea id="message" rows={4} className="sfd-form-input sfd-font-regular block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150" placeholder="Message"></textarea>
										</div>
									</div>
									<div>
										<label htmlFor="email" className="sr-only sfd-font-regular">Email</label>
										<div className="relative rounded-md shadow-sm">
											<input id="email" type="email" className="sfd-form-input sfd-font-regular block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150" placeholder="Email" />
										</div>
									</div>
									<div className="flex">
										<div className="w-1/2 mr-4">
											<label htmlFor="full_name" className="sr-only sfd-font-regular">First Name</label>
											<div className="relative rounded-md shadow-sm">
												<input id="first_name" className="sfd-form-input sfd-font-regular block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150" placeholder="First Name" />
											</div>
										</div>
										<div className="w-1/2 ml-4">
											<label htmlFor="full_name" className="sr-only sfd-font-regular">Last Name</label>
											<div className="relative rounded-md shadow-sm">
												<input id="last_name" className="sfd-form-input sfd-font-regular block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150" placeholder="Last Name" />
											</div>
										</div>
									</div>
									<div className="w-full mt-10">
										<span className="inline-flex w-full md:w-1/5 rounded-md shadow-sm">
											<button type="submit" className="sfd-feedback-btn sfd-font-regular w-full inline-flex justify-center py-2 px-8 border border-transparent text-white text-base leading-6 font-medium rounded-md text-white focus:outline-none transition duration-150 ease-in-out">
												SEND
                            				</button>
										</span>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div className="sfd-font-regular mt-6 px-4 md:px-0 text-sm md:text-xl text-center">Your feedback is important to us, please write with any questions or feedback. Thanks for your support!</div>
				</div>
				<div className="sfd-footer md:py-10 mt-20">
					<div className="mt-6 mx-auto md:flex pt-12">
						<div className="w-full w-2/5">
							<div className="flex justify-center mb-4 md:mb-0 md:ml-20">
								<a href="#" className="text-gray-400 hover:text-gray-500">
									<img className="hidden md:block w-10" src="/facebook.svg"></img>
									<img className="md:hidden w-10" src="/facebook-m.svg"></img>
								</a>
								<a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
									<img className="hidden md:block w-10" src="/twitter.svg"></img>
									<img className="md:hidden w-10" src="/twitter-m.svg"></img>
								</a>
								<a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
									<img className="hidden md:block w-10" src="/youtube.svg"></img>
									<img className="md:hidden w-10" src="/youtube-m.svg"></img>
								</a>
								<a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
									<img className="hidden md:block w-10" src="/linkedin.svg"></img>
									<img className="md:hidden w-10" src="/linkedin-m.svg"></img>
								</a>
								<a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
									<img className="hidden md:block w-10" src="/instagram.svg"></img>
									<img className="md:hidden w-10" src="/instagram-m.svg"></img>
								</a>
								<a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
									<img className="hidden md:block w-10" src="/tiktok.svg"></img>
									<img className="md:hidden w-10" src="/tiktok-m.svg"></img>
								</a>
							</div>
						</div>
						<div className="w-full w-3/5 flex items-center justify-center">
							<nav className="md:-mx-5 -my-2 flex flex-wrap items-center justify-center">
								<div className="px-5 py-2">
									<a href="#" className="sfd-font-regular text-base leading-6 text-gray-800 md:text-white">
										Terms and Conditions
                    				</a>
								</div>
								<div className="px-5 py-2">
									<a href="#" className="sfd-font-regular text-base leading-6 text-gray-800 md:text-white">
										Privacy Policy
                    				</a>
								</div>
								<div className="px-5 py-2">
									<a href="#" className="sfd-font-regular text-base leading-6 text-gray-800 md:text-white">
										2020 Copyright
                    				</a>
								</div>
							</nav>

						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default Home
