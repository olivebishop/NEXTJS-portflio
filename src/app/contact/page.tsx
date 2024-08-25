"use client";

import react from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactUs() {
	return (
		<div className="mt-20 sm:mt-40 relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element-dark.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
			<div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
				<section className="py-6">
					<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
						<div className="py-6 md:py-0 md:px-6">
							<h1 className="text-3xl sm:text-4xl font-bold">Get in touch</h1>
							<p className="pt-2 pb-4 text-base sm:text-lg">
								Fill in the form to start a conversation
							</p>
							<div className="space-y-4">
								<p className="flex items-center text-sm sm:text-base">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										className="w-5 h-5 mr-2 sm:mr-4"
									>
										<path
											fillRule="evenodd"
											d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
											clipRule="evenodd"
										></path>
									</svg>
									<span>Mombasa, Kenya</span>
								</p>
								<p className="flex items-center text-sm sm:text-base">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										className="w-5 h-5 mr-2 sm:mr-4"
									>
										<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
									</svg>
									<span>+254791482626</span>
								</p>
								<p className="flex items-center text-sm sm:text-base">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										className="w-5 h-5 mr-2 sm:mr-4"
									>
										<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
										<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
									</svg>
									<span>olivehendrilgen1@gmail.com</span>
								</p>
							</div>
						</div>
						<form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
							<label className="block">
								<span className="mb-1 text-sm sm:text-base">Full name</span>
								<Input
									type="text"
									placeholder="olive bishop"
									className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"
								/>
							</label>
							<label className="block">
								<span className="mb-1 text-sm sm:text-base">Email address</span>
								<Input
									type="email"
									placeholder="olivehendrilgen1@gmail.com"
									className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"
								/>
							</label>
							<label className="block">
								<span className="mb-1 text-sm sm:text-base">Message</span>
								<Textarea className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100" />
							</label>
							<Button
								type="button"
								className="px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg rounded-md transition-transform transform hover:scale-105"
							>
								Submit
							</Button>
						</form>
					</div>
				</section>
			</div>
		</div>
	);
}
