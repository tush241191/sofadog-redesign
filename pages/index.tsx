// pages/index.jsx
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from './_components/_layouts/Header';

const client = require('contentful').createClient({
	space: 'o9qnpzgj9434',
	accessToken: 'D0V8zKEmlI_gFxra9uBJLTOnhyLTbXmjRxlkIjoYnzI'
})
const Home = () => {

	const [header, setHeader] = useState(null);
	const [mainSection, setMainSection] = useState(null);
	const [features, setFeatures] = useState(null);
	const [downloadSection, setDownloadSection] = useState(null);
	const [feedback, setFeedBack] = useState(null);
	const [footer, setFooter] = useState(null);

	async function fetchEntries() {
		const entries = await client.getEntries();
		if (entries.items)
			return entries.items
	}

	useEffect(() => {
		async function fetchEntry() {
			const data = await fetchEntries()
			if (data.length > 0) {
				data.forEach(element => {
					if (element.sys.contentType.sys.id == "header") {
						setHeader({ ...element.fields })
					} else if (element.sys.contentType.sys.id == "mainSection") {
						setMainSection({ ...element.fields })
					} else if (element.sys.contentType.sys.id == "features") {
						setFeatures({ ...element.fields })
					} else if (element.sys.contentType.sys.id == "downloadSection") {
						setDownloadSection({ ...element.fields })
					} else if (element.sys.contentType.sys.id == "feedback") {
						setFeedBack({ ...element.fields })
					} else if (element.sys.contentType.sys.id == "footer") {
						setFooter({ ...element.fields })
					}

				});
			}
		}
		fetchEntry()
	}, [])

	return (
		<div className="sfd-main-body">
			<Head>
				<title>So.Fa.Dog</title>
				<link rel="icon" href="/color-logo.ico" />
			</Head>

			<div className="sfd-max-width border-l border-r border-gray-200 mx-auto bg-white">
				<Header header={header} />
				<div className="main-section">
					<main className="mt-2 mx-auto max-w-screen-xl px-4 sm:mt-2 sm:px-6 md:mt-4 lg:mt-6 xl:mt-8">
						<div className="text-center">
							<h2 className="sfd-purple-text sfd-font-bold text-4xl tracking-tight leading-10 sm:text-5xl sm:leading-none lg:text-6xl">
								{mainSection?.title}
							</h2>
							<p className="sfd-font-regular mt-3 max-w-md mx-auto text-base text-gray-800 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
								{mainSection?.content}
							</p>
							<div className="w-full md:w-11/12 mt-5 mx-auto sm:block sm:justify-center md:mt-8 relative">
								<img className="w-full mx-auto sfd-cover-image" src={mainSection?.image.fields.file.url}></img>
								<div className="w-1/2 grid leading-tight sfd-font-comfortaa-bold sfd-slogan-text text-sm md:text-3xl lg:text-4xl xl:text-5xl text-black absolute">
									<span className="text-left">{mainSection?.slogan}</span>
								</div>
							</div>
						</div>
					</main>
					<div className="mt-20">
						<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-24">
							<div className="w-full text-center">
								<span className="sfd-font-bold text-3xl md:text-5xl">{features?.mainTitle}</span>
							</div>
							<div className="mt-5">
								<ul className="w-full flex flex-col-reverse md:flex-row ">
									<li className="mt-4 w-full md:w-1/4 lg:w-2/5 lg:mt-7 lg:pr-28 flex justify-center lg:justify-end">
										<div className="flex">
											<div className="mx-auto">
												<img className="mx-auto w-3/5 lg:w-3/4" src={features?.noAdsImage.fields.file.url}></img>
											</div>
										</div>
									</li>
									<li className="w-full md:w-3/4 lg:w-3/5 lg:pt-14 lg:pl-28 flex items-center">
										<div className="flex">
											<div className="ml-2 md:ml-4">
												{features != null && (
													<h4 className="sfd-purple-text sfd-font-bold text-3xl md:text-xl lg:text-3xl leading-6 text-gray-900">{features?.noAdsTitle}</h4>
												)}
												{features != null && (
													<p className="sfd-font-regular mt-2 text-base md:text-lg leading-6 text-gray-800">
														{features?.noAdsContent}
													</p>
												)}
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="sfd-no-long-read-section w-full bg-white lg:pt-20">
						<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 pt-1">
							<div className="md:mt-10 lg:mt-1">
								<ul className="w-full md:flex">
									<li className="w-full md:w-3/5 flex md:pt-8 lg:pr-28 lg:pb-20 xl:pb-1">
										<div className="flex">
											<div className="ml-2 lg:ml-28">
												{features != null && (
													<h4 className="sfd-font-bold text-3xl md:text-xl lg:text-3xl leading-6 sfd-purple-text lg:text-white">{features?.noLongReadsTitle}</h4>
												)}
												{features != null && (
													<p className="sfd-font-regular mt-2 text-base md:text-lg leading-6 text-gray-800 lg:text-white">
														{features?.noLongReadsContent}
													</p>
												)}
											</div>
										</div>
									</li>
									<li className="w-full md:w-2/5 lg:mt-7 justify-center flex md:justify-end mt-2">
										<div className="flex">
											{features != null && (
												<div className="mx-auto flex justify-center md:justify-end">
													<img className="md:hidden" src={features?.noLongReadsImage.fields.file.url}></img>
													<img className="hidden md:block md:mx-auto md:w-3/4 xl:w-full" src={features?.noLongReadsImage.fields.file.url}></img>
												</div>
											)}
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="pt-5 lg:pt-1 md:mt-5 lg:mt-1">
						<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-24">
							<div className="">
								<ul className="w-full flex flex-col-reverse md:flex-row ">
									<li className="mt-4 w-full md:w-1/4 lg:w-2/5 lg:mt-7 lg:pr-28 flex justify-center lg:justify-end">
										<div className="flex">
											<div className="mx-auto">
												{features != null && (
													<img className="mx-auto w-3/5 lg:w-3/4" src={features?.noFakeNewsImage.fields.file.url}></img>
												)}
											</div>
										</div>
									</li>
									<li className="w-full md:w-3/4 lg:w-3/5 lg:pt-14 lg:pl-28 flex items-center">
										<div className="flex">
											{features != null && (
												<div className="ml-2 md:ml-4">
													<h4 className="sfd-purple-text sfd-font-bold text-3xl md:text-xl lg:text-3xl leading-6 text-gray-900">{features?.noFakeNewsTitle}</h4>
													<p className="sfd-font-regular mt-2 text-base md:text-lg leading-6 text-gray-800">
														{features?.noFakeNewsContent}
													</p>
												</div>
											)}
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="sfd-download-section mt-20 md:mt-24 lg:mt-48 lg:pb-10">
						<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-24">
							<div className="lg:text-center sm:px-40 lg:px-2">
								<h3 className="sfd-font-bold text-center mt-2 text-3xl md:text-4xl lg:text-5xl leading-8 tracking-tight text-gray-900  sm:leading-10">
									{downloadSection?.mainTitle}
								</h3>
							</div>
							<div className="mt-5 lg:mt-16">
								<ul className="flex flex-col-reverse lg:flex-row w-full">
									<li className="mt-4 w-full lg:pr-10">
										<div className="grid md:flex">
											<div className="flex justify-center md:justify-end">
												<img className="w-full hidden lg:block sm:w-3/5 md:w-8/12" src={downloadSection?.mobileImage.fields.file.url}></img>
												<div className="sm:flex justify-center hidden md:hidden ml-5">
													<img className="mr-1 w-28 cursor-pointer" src={downloadSection?.androidImage.fields.file.url}></img>
													<img className="ml-1 w-28 cursor-pointer" src={downloadSection?.iOsImage.fields.file.url}></img>
												</div>
											</div>
											<div className="flex justify-center md:hidden mt-3">
												<img className="mr-1 w-1/2 cursor-pointer" src={downloadSection?.androidImage.fields.file.url}></img>
												<img className="ml-1 w-1/2 cursor-pointer" src={downloadSection?.iOsImage.fields.file.url}></img>
											</div>

										</div>
									</li>
									<li className="flex w-full">
										<div className="flex">
											<div className="mt-6">
												<img className="w-36 pl-2" src={header?.logo.fields.file.url} alt="So.Fa.Dog"></img>
												<p className="sfd-font-regular mt-5 pl-2 pr-12 text-base md:text-lg leading-6 text-gray-800 lg:text-gray-800">
													{downloadSection?.content}
												</p>
												<div className="hidden md:flex md:justify-center lg:justify-start mt-10 lg:mt-28">
													<img className="mr-1 w-1/3 cursor-pointer" src={downloadSection?.androidImage.fields.file.url}></img>
													<img className="ml-1 w-1/3 cursor-pointer" src={downloadSection?.iOsImage.fields.file.url}></img>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="w-full sfd-mobile-md flex justify-center lg:hidden mt-8 pb-12">
						<img className="sfd-mobile-img w-8/12 md:w-1/3" src={downloadSection?.mobileImage.fields.file.url}></img>
					</div>
					<div className="mt-10 md:mt-32 lg:mt-20">
						<div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-6">
							<div className="flex justify-center lg:justify-end py-4 md:py-16 px-4 sm:px-6 lg:px-1 lg:col-span-2 lg:pl-6 lg:py-24">
								<div className="max-w-lg lg:w-64">
									<h2 className="sfd-font-bold text-2xl text-center lg:text-left leading-8 tracking-wide text-gray-900 sm:text-5xl sm:leading-10">
										{feedback?.title}
									</h2>
								</div>
							</div>
							<div className="bg-white lg:pt-16 px-4 sm:px-6 lg:col-span-3 lg:pt-24 pb-10 lg:px-10 xl:pl-12">
								<div className="mx-auto lg:max-w-none">
									<form action="#" method="POST" className="grid grid-cols-1 row-gap-6">
										<div>
											<label htmlFor="message" className="sfd-font-regular sr-only">{feedback?.message}</label>
											<div className="relative rounded-md shadow-sm">
												<textarea id="message" rows={4} className="sfd-form-input sfd-font-regular block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150" placeholder={feedback?.message}></textarea>
											</div>
										</div>
										<div>
											<label htmlFor="email" className="sr-only sfd-font-regular">{feedback?.email}</label>
											<div className="relative rounded-md shadow-sm">
												<input id="email" type="email" className="sfd-form-input sfd-font-regular block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150" placeholder={feedback?.email} />
											</div>
										</div>
										<div className="flex">
											<div className="w-1/2 mr-4">
												<label htmlFor="full_name" className="sr-only sfd-font-regular">{feedback?.firstName}</label>
												<div className="relative rounded-md shadow-sm">
													<input id="first_name" className="sfd-form-input sfd-font-regular block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150" placeholder={feedback?.firstName} />
												</div>
											</div>
											<div className="w-1/2 ml-4">
												<label htmlFor="full_name" className="sr-only sfd-font-regular">{feedback?.lastName}</label>
												<div className="relative rounded-md shadow-sm">
													<input id="last_name" className="sfd-form-input sfd-font-regular block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150" placeholder={feedback?.lastName} />
												</div>
											</div>
										</div>
										<div className="w-full mt-10">
											<span className="inline-flex w-full lg:w-1/5 rounded-md shadow-sm">
												<button type="submit" className="sfd-feedback-btn sfd-font-regular w-full inline-flex justify-center py-2 px-8 border border-transparent text-white text-base leading-6 font-medium rounded-md text-white focus:outline-none transition duration-150 ease-in-out">
													{feedback?.submitButton}
												</button>
											</span>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className="sfd-font-regular mt-6 px-5 lg:px-0 text-sm md:text-lg lg:text-xl text-center">{feedback?.content}</div>
					</div>
					<div className="sfd-footer md:py-10 lg:mt-20">
						<div className="mt-6 mx-auto lg:flex pt-12">
							<div className="w-full lg:w-2/5">
								<div className="flex justify-center mb-4 md:mb-12 lg:mb-0 lg:ml-20">
									<a href="#" className="text-gray-400 hover:text-gray-500">
										<img className="hidden lg:block w-10" src="/facebook.svg"></img>
										<img className="lg:hidden w-10" src="/facebook-m.svg"></img>
									</a>
									<a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
										<img className="hidden lg:block w-10" src="/twitter.svg"></img>
										<img className="lg:hidden w-10" src="/twitter-m.svg"></img>
									</a>
									<a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
										<img className="hidden lg:block w-10" src="/youtube.svg"></img>
										<img className="lg:hidden w-10" src="/youtube-m.svg"></img>
									</a>
									<a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
										<img className="hidden lg:block w-10" src="/linkedin.svg"></img>
										<img className="lg:hidden w-10" src="/linkedin-m.svg"></img>
									</a>
									<a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
										<img className="hidden lg:block w-10" src="/instagram.svg"></img>
										<img className="lg:hidden w-10" src="/instagram-m.svg"></img>
									</a>
									<a href="#" className="ml-3 text-gray-400 hover:text-gray-500">
										<img className="hidden lg:block w-10" src="/tiktok.svg"></img>
										<img className="lg:hidden w-10" src="/tiktok-m.svg"></img>
									</a>
								</div>
							</div>
							<div className="w-full lg:w-3/5 flex items-center justify-center">
								<nav className="lg:-mx-5 -my-2 flex flex-wrap items-center justify-center">
									{footer?.menu.map((item, i) =>
										<div className="px-5 py-2">
											<a href="#" className="sfd-font-regular text-base leading-6 sfd-purple-text lg:text-white">
												{item}
											</a>
										</div>
									)}
								</nav>

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
