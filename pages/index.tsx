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
					<div className="mt-5 mx-auto sm:block sm:justify-center md:mt-8">
						<img className="w-full md:w-4/5 mx-auto sfd-cover-image" src="/cover_img2.jpeg"></img>
					</div>
				</div>
			</main>
			<div className="pt-12 bg-white mt-10">
				<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-24">
					<div className="lg:text-center">
						<h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl sm:leading-10">
							What’s so special about us?
      					</h3>
					</div>

					<div className="mt-10 md:mt-20">
						<ul className="flex flex-col-reverse md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
							<li className="mt-4">
								<div className="flex">
									<div className="mx-auto">
										<img className="w-full md:w-3/4" src="/no_ads.svg"></img>
									</div>
								</div>
							</li>
							<li className="flex items-center">
								<div className="flex">
									<div className="ml-2 md:ml-4">
										<h4 className="sfd-purple-text text-3xl leading-6 font-bold text-gray-900">No ads</h4>
										<p className="mt-2 text-base leading-6 text-gray-800">
											We believe that the best things in life are free. Free of advertisements that is. Our app delivers only news, no nerve-racking advertising or pop-ups.
              							</p>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="sfd-no-long-read-section w-full py-12 md:py-0 bg-white md:h-68">
				<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 pt-1">
					<div className="mt-10">
						<ul className="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
							<li className="flex pt-10">
								<div className="flex">
									<div className="ml-2 md:ml-28">
										<h4 className="text-3xl leading-6 font-bold text-white">No long reads</h4>
										<p className="mt-2 text-base leading-6 text-white">
											Your daily dose of exitement through eight categories that cover the whole world – from scientific discoveries and world economy to arts and fashion news. Each story in 10 seconds. 24/7/365. Just swipe and enjoy!
              							</p>
									</div>
								</div>
							</li>
							<li className="mt-7">
								<div className="flex">
									<div className="mx-auto flex md:justify-end">
										<img className="w-full md:w-3/4" src="/barber.svg"></img>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="pt-2 bg-white">
				<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-24">
					<div className="">
						<ul className="flex flex-col-reverse md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
							<li className="mt-4">
								<div className="flex">
									<div className="mx-auto">
										<img className="w-full md:w-3/4" src="/no_fake_news.svg"></img>
									</div>
								</div>
							</li>
							<li className="flex items-center">
								<div className="flex">
									<div className="ml-2 md:ml-4">
										<h4 className="sfd-purple-text text-3xl leading-6 font-bold text-gray-900">No fake news</h4>
										<p className="mt-2 text-base leading-6 text-gray-800">
											Each one of our news stories is custom-made and created by a professional video editor and journalist. We do our own fact checking. No AI, no Google Translate, no funny business.
              							</p>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="sfd-download-section py-12 bg-white mt-28">
				<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-24">
					<div className="lg:text-center">
						<h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl sm:leading-10">
							Download the app and get swiping!
      					</h3>
					</div>

					<div className="mt-10 md:mt-16">
						<ul className="flex flex-col-reverse md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
							<li className="mt-4">
								<div className="flex">
									<div className="flex justify-end">
										<img className="w-full md:w-8/12" src="/mobile.svg"></img>
									</div>
								</div>
							</li>
							<li className="flex">
								<div className="flex">
									<div className="mt-16">
										<img className="w-36 pl-2" src="/Logo-With-Text.svg"></img>
										<p className="mt-6 pl-2 pr-12 text-lg leading-6 text-gray-800">
											Creative news templates and custom made videos with engaging audio give your ears and eyes a treat. We are never done improving and hope to offer you something exciting every time you open the So.Fa.Dog app.
              							</p>
										<div className="flex mt-28">
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
			<div className="relative bg-white mt-20">
				<div className="absolute inset-0">
					<div className="absolute inset-y-0 left-0 w-1/2"></div>
				</div>
				<div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-6">
					<div className="py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-8">
						<div className="max-w-lg mx-auto">
							<h2 className="sfd-purple-text text-2xl text-right leading-8 font-extrabold tracking-wide text-gray-900 sm:text-5xl sm:leading-10">
								Got some feedbark?
        					</h2>
						</div>
					</div>
					<div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
						<div className="max-w-lg mx-auto lg:max-w-none">
							<form action="#" method="POST" className="grid grid-cols-1 row-gap-6">
								<div>
									<label htmlFor="message" className="sr-only">Message</label>
									<div className="relative rounded-md shadow-sm">
										<textarea id="message" rows={4} className="sfd-form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150" placeholder="Message"></textarea>
									</div>
								</div>
								<div>
									<label htmlFor="email" className="sr-only">Email</label>
									<div className="relative rounded-md shadow-sm">
										<input id="email" type="email" className="sfd-form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150" placeholder="Email" />
									</div>
								</div>
								<div className="flex">
									<div className="w-1/2 mr-4">
										<label htmlFor="full_name" className="sr-only">Full name</label>
										<div className="relative rounded-md shadow-sm">
											<input id="full_name" className="sfd-form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150" placeholder="Full name" />
										</div>
									</div>
									<div className="w-1/2 ml-4">
										<label htmlFor="full_name" className="sr-only">Full name</label>
										<div className="relative rounded-md shadow-sm">
											<input id="full_name" className="sfd-form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150" placeholder="Full name" />
										</div>
									</div>
								</div>
								<div className="">
									<span className="inline-flex rounded-md shadow-sm">
										<button type="submit" className="sfd-feedback-btn inline-flex justify-center py-2 px-8 border border-transparent text-white text-base leading-6 font-medium rounded-md text-white focus:outline-none transition duration-150 ease-in-out">
											SEND
              							</button>
									</span>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
)

export default Home
