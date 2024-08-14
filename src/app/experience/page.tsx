"use client";
import React from "react";
import { experiences } from "@/utils"
import { MdMailOutline } from "react-icons/md";

interface Experience {
  date: string;
  title: string;
  company: string;
  description: string;
  tasks: string[];
}

const ExperienceItem: React.FC<Experience> = ({ date, title, company, description, tasks }) => {
  return (
    <div className="flex flex-col items-center text-center overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element-dark.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
      <div className="mb-2">
        <h3 className="text-sm font-medium text-gray-600 dark:text-neutral-400">
          {date}
        </h3>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
          {title}
        </h4>
        <p className="mt-1 text-md text-gray-600 dark:text-neutral-400">
          {company}
        </p>
        <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
          {description}
        </p>
        <ul className="mt-4 space-y-2">
          {tasks.map((task, index) => (
            <li key={index} className="flex items-center justify-center">
              <span className="mr-2 text-green-500">•</span>
              <span className="text-sm text-gray-600 dark:text-neutral-400">{task}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const FreelanceProject: React.FC = () => {
  return (
    <div className="mt-16 p-6 bg-gray-100 dark:bg-[#373737] rounded-lg shadow-md text-center">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-200 mb-4">
        Recent Freelance Project
      </h3>
      <p className="text-md text-gray-600 dark:text-neutral-400 mb-4">
      <span className="mr-2 text-green-500">•</span>
      The Sol of African Tours and Travel
      </p>
      <ul className="space-y-2">
  <li className="flex flex-col sm:flex-row justify-center items-center gap-4">
    <a href="/contact" className="rounded-md bg-gray-900 text-white px-3 py-2 text-center w-full sm:w-auto">
      Get a Quote
    </a>
    <a href="https://the-sol-of-african-tours.vercel.app/" target="_blank" rel="noopener noreferrer" className="rounded-md bg-gray-900 text-white px-3 py-2 text-center w-full sm:w-auto">
      View Demo
    </a>
  </li>
</ul>

    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20 sm:mt-32 md:mt-40 relative overflow-hidden">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-neutral-200">
          Experience
        </h1>
      </div>

      <div className="space-y-12 md:space-y-16 max-w-2xl mx-auto">
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} {...experience} />
        ))}
      </div>

      <FreelanceProject />
    </div>
  );
};

export default Experience;