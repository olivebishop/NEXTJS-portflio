"use client";

import { skills } from "@/utils";

export default function AboutUs() {
  return (
    <div className="mt-20 md:mt-40 relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element-dark.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-24 pb-10">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-neutral-200 mb-6">About</h1>
        </div>

        {/* About Content */}
        <div className="mt-5 max-w-3xl text-center mx-auto">
          <p className="text-lg md:text-xl text-gray-800 dark:text-neutral-200 mb-8">
            Olive is a passionate software developer dedicated to solving community challenges through innovative technology solutions. With a diverse skill set spanning front-end and back-end development, Olive creates robust and user-friendly applications that make a difference.
          </p>
        </div>

        {/* Skills */}
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-neutral-200 mb-8">Skills</h2>
          
          {Object.entries(skills).map(([category, categorySkills]) => (
            <div key={category} className="mb-10">
              <h3 className="text-xl md:text-2xl font-semibold text-center text-gray-700 dark:text-neutral-300 mb-4 capitalize">{category}</h3>
              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
                {categorySkills.map(({ Icon, name }) => (
                  <div key={name} className="flex flex-col items-center">
                    <Icon className="text-3xl md:text-4xl text-gray-600 dark:text-neutral-400" />
                    <span className="text-sm md:text-base mt-1 text-gray-500 dark:text-neutral-500">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}