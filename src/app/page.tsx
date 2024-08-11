"use client";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaInstagram, FaLinkedin,  FaCircle } from "react-icons/fa";
import { IoCalendarClearOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { SiMedium } from "react-icons/si";

export default function Home() {
  return (
    <div className=" mt-40 relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        {/* Announcement Banner */}
        <div className="flex justify-center px-3">
          <a
            className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-green-600 p-1 ps-3 rounded-full transition hover:border-gray-300 focus:outline-none focus:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:text-green-600 dark:hover:border-neutral-600 dark:focus:border-neutral-600"
            href="#"
          >
            <span className="py-1.5 px-2.5 animate-pulse inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-green-600 dark:bg-neutral-700 dark:text-green-600">
              <FaCircle />
            </span>
            Available for new opportunities
          </a>
        </div>

        {/* End Announcement Banner */}

        {/* Title */}
        <div className="mt-5 max-w-2xl text-center mx-auto">
          <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
            Hi, Iam olive bishop
            <span className="bg-clip-text text-3xl bg-gradient-to-tl from-[#606060] to-[#7f7f7f] text-transparent">
              <br />
              Full Stack Software developer
            </span>
          </h1>
        </div>
        {/* End Title */}

        <div className="mt-5 max-w-3xl text-center mx-auto">
          <p className="text-lg text-gray-600 dark:text-neutral-400">
            High level experience in Software design and development knowledge, producing quality work.
          </p>
        </div>
        {/* End Description */}

        {/* Social Icons */}
        <div className="mt-5 flex justify-center items-center gap-x-1 sm:gap-x-3">
          <a href="https://x.com/olivebishop_dev" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className=" size-7" />
          </a>

          <a href="https://github.com/olivebishop" target="_blank" rel="noopener noreferrer">
            <FaGithub className=" size-7" />
          </a>

          <a href="https://instagram.com/rhymer_ke" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="size-7" />
          </a>

          <a href="https://linkedin.com/in/olivebishop" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className=" size-7" />
          </a>

          <a href="https://medium.com/@olivebishop" target="_blank" rel="noopener noreferrer">
            <SiMedium className=" size-7" />
          </a>
        </div>
        {/* End Social Icons */}

        {/* Buttons */}
        <div className="mt-8 gap-3 flex justify-center">
          <a
            href="mailto:olivehendrilgen1@gmail.com"
            className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-[#f6f6f6] to-[#333333] hover:from-[#c1c1c1] hover:to-[#606060] focus:outline-none focus:from-[#606060] focus:to-[#606060]border border-transparent text-white text-sm font-medium rounded-md  py-3 px-4 transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            <MdMailOutline />
            Let&apos;s work together
          </a>

          <a
            href="https://cal.com/olivebishop"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group p-2 ps-3 inline-flex items-center gap-x-2 text-sm font-mono rounded-lg border border-gray-200 bg-white text-slate-950 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            <span className="flex justify-center items-center bg-gray-200 rounded-md size-7 dark:bg-neutral-700 dark:text-neutral-400 transition-transform duration-300 ease-in-out transform group-hover:rotate-6">
              <IoCalendarClearOutline className="shrink-0 size-4" />
            </span>
            Schedule a meeting
          </a>
        </div>
        {/* End Buttons */}
      </div>
    </div>
  );
}
