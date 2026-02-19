import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 xl:px-28 flex justify-between flex-col gap-4 xl:flex-row" id="about">
      <motion.div
        className="xl:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="https://MinaFarhat.github.io/Mena-Portfolio/assets/about-me.svg" alt="About Me Illustration" className='w-full' />
      </motion.div>

      <motion.div
        className="xl:w-1/2 pb-4"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
          I am a Software Engineer specialized in Mobile Application Development and UI/UX Design, passionate about building modern and user-friendly digital solutions. I focus on combining strong technical skills with clean and intuitive design to create efficient and engaging applications.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          My journey in software development started during my academic studies, where I worked with multiple programming languages and technologies, developing strong problem-solving skills. I specialize in Flutter, building high-performance cross-platform applications while following clean architecture and best practices for maintainable and scalable solutions.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          Alongside development, I expanded my experience in UI/UX design using Figma, creating intuitive interfaces focused on usability and modern design standards. Through freelance and collaborative projects, I continue to grow my skills and contribute to impactful digital products.
        </p>
      </motion.div>
    </div>
  );
}
