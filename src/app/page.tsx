"use client";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaInstagram, FaLinkedin, FaCircle } from "react-icons/fa";
import { IoCalendarClearOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { SiMedium } from "react-icons/si";

export default function Home() {
  return (
    <div
    className="space-y-10 mt-10 overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element-dark.svg')]"
  >
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        {/* Announcement Banner */}
        <div className="flex justify-center px-3">
          <a
            className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs sm:text-sm md:text-base lg:text-lg text-green-600 py-1 ps-3 rounded-full transition hover:border-gray-300 focus:outline-none focus:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:text-green-600 dark:hover:border-neutral-600 dark:focus:border-neutral-600"
            href="#"
          >
            <span className="py-1.5 px-2.5 animate-pulse inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-xs sm:text-sm md:text-base lg:text-lg text-green-600 dark:bg-neutral-700 dark:text-green-600">
              <FaCircle />
            </span>
            Available for new opportunities
          </a>
        </div>
        {/* End Announcement Banner */}

        {/* Title */}
        <div className="mt-5 max-w-2xl text-center mx-auto">
          <h1 className="block font-bold text-gray-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
            Hi, I am Olive Bishop
            <span className="bg-clip-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-tl from-[#606060] to-[#7f7f7f] text-transparent">
              <br />
              Full Stack Software Developer
            </span>
          </h1>
        </div>
        {/* End Title */}

        <div className="mt-5 max-w-3xl text-center mx-auto">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-neutral-400">
            High-level experience in software design and development knowledge, producing quality work.
          </p>
        </div>
        {/* End Description */}

        {/* Social Icons */}
        <div className="mt-5 flex justify-center items-center gap-x-2 sm:gap-x-4">
          <a href="https://x.com/olivebishop_dev" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
          </a>
          <a href="https://github.com/olivebishop" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
          </a>
          <a href="https://instagram.com/rhymer_ke" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
          </a>
          <a href="https://linkedin.com/in/olivebishop" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
          </a>
          <a href="https://medium.com/@olivebishop" target="_blank" rel="noopener noreferrer">
            <SiMedium className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
          </a>
        </div>
        {/* End Social Icons */}

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href="mailto:olivehendrilgen1@gmail.com"
            className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-[#f6f6f6] to-[#333333] hover:from-[#c1c1c1] hover:to-[#606060] focus:outline-none focus:from-[#606060] focus:to-[#606060] border border-transparent text-xs sm:text-sm md:text-base lg:text-lg font-medium rounded-md py-2 px-3 sm:py-3 sm:px-4 transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            <MdMailOutline className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            Let&apos;s work together
          </a>

          <a
            href="https://cal.com/olivebishop"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group p-2 ps-3 inline-flex items-center gap-x-2 text-xs sm:text-sm md:text-base lg:text-lg font-mono rounded-lg border border-gray-200 bg-white text-slate-950 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            <span className="flex justify-center items-center bg-gray-200 rounded-md w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 dark:bg-neutral-700 dark:text-neutral-400 transition-transform duration-300 ease-in-out transform group-hover:rotate-6">
              <IoCalendarClearOutline />
            </span>
            Schedule a meeting
          </a>
        </div>
        {/* End Buttons */}
      </div>
    </div>
  );
}
