"use client";

import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-blue-600 dark:text-blue-500">
          Skills & Expertise
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Technical skills honed through production mobile development across Flutter and native Android
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillCategory, idx) => (
            <div 
              key={idx}
              className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                {skillCategory.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillCategory.items.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-lg border border-gray-200 dark:border-gray-600 font-medium"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
