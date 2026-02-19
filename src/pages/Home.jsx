import { motion } from "framer-motion";

import { TypeAnimation } from "react-type-animation";
import SocialMedia from "../components/SocialMedia";

export default function Home() {
  return (
    <div className="mt-20" id="home">
      <div className="flex justify-between py-10 items-center px-5 xl:px-28 lg:px-10 lg:flex-row flex-col-reverse">

        <motion.div
          className="lg:w-[45%]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >

          <motion.div
            className="text-2xl xl:text-5xl lg:text-4xl flex flex-col mt-8 lg:mt-0 gap-2 lg:gap-5 text-nowrap"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2, ease: "easeInOut" },
              },
            }}
          >
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              Hello, <TypeAnimation
                sequence={[
                  'I am Mena Farhat',
                  1000,
                  // 'I am a Web Developer',
                  // 1000,
                  // 'I am a UI/UX Designer',
                  // 1000,
                ]}
                speed={10}
                style={{ fontWeight: 600 }}
                repeat={Infinity}
              />
            </motion.h2>
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              <span className="font-extrabold">Software</span>{" "}
              <span
                className="text-white font-extrabold"
                style={{ WebkitTextStroke: "1px black" }}
              >
                Engineer
              </span>
            </motion.h2>
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              Based In <span className="font-extrabold">Syria and Lebanon.</span>
            </motion.h2>
          </motion.div>

          <motion.p
            className="text-[#71717A] text-sm lg:text-base mt-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Passionate about technology, I am a Software Engineer specializing in Mobile Application Development and UI/UX Design. I focus on creating innovative and user-friendly solutions while continuously improving my technical and creative skills. My goal is to grow as a developer and contribute to meaningful projects that make a positive impact in the technology industry.
          </motion.p>
          <SocialMedia />

        </motion.div>

        <motion.div
          className="lg:w-[55%] w-full h-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img className="h-full w-full" src="https://MinaFarhat.github.io/Mena-Portfolio/assets/hero-vector.svg" alt="Hero Vector" />
        </motion.div>
      </div>
    </div>
  );
}
