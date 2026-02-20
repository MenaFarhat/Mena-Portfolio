import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import SocialMedia from './SocialMedia';
import emailjs from '@emailjs/browser';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [showMessage, setShowMessage] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false); // حالة الخطأ

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_u2bx82z',
      'template_47eg3wc',
      e.target,
      'NyyfUbUScd0rMOBkp'
    )
      .then(
        (result) => {
          setMessageText("Message sent successfully!");
          setIsError(false); // ناجح
          setShowMessage(true);
          e.target.reset();
          setLoading(false);
          setTimeout(() => setShowMessage(false), 2000);
        },
        (error) => {
          setMessageText("Oops! Something went wrong");
          setIsError(true); // فشل
          setShowMessage(true);
          setLoading(false);
          setTimeout(() => setShowMessage(false), 2000);
        }
      );
  };
  setTimeout(() => {
    e.target.reset();
  }, 300);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className='lg:my-16 xl:px-28 lg:px-10 my-8 px-5'
      id='contact'
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className='text-2xl lg:text-4xl text-center'
      >
        Contact <span className='font-extrabold'>Me</span>
      </motion.h2>

      <div className='flex justify-between items-center mt-8 lg:mt-16 flex-col lg:flex-row'>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className='lg:w-[40%]'
        >
          <form
            className='w-full space-y-3 lg:space-y-5'
            onSubmit={sendEmail}
            autoComplete="on"
            method="POST"
          >
            <input
              className='border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full'
              type="text"
              placeholder='Your name*'
              name="name"
              autoComplete="name"
              required
            />
            <input
              className='border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full'
              type="email"
              placeholder='Email*'
              name="email"
              autoComplete="email"
              required
            />
            <input
              className='border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full'
              type="text"
              placeholder='Your website (If exists)'
              name="website"
              autoComplete="url"
            />
            <textarea
              className='resize-none border-2 px-5 py-3 h-32 border-black placeholder:text-[#71717A] rounded text-sm w-full'
              placeholder='How can I help?*'
              name="message"
              autoComplete="off"
              required
            ></textarea>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
              className='flex justify-between items-end md:gap-3 lg:gap-5  h-[50px]'
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                type="submit"
                disabled={loading}
                className={`bg-black text-[12px] xl:text-lg text-white px-3 py-2 rounded flex items-center gap-x-3 font-medium justify-center lg:w-fit w-fit md:w-[150px] h-[36px]  md:h-[40px] lg:h-full lg:flex-1 hover:shadow-lg ${loading ? "cursor-not-allowed" : ""
                  }`}
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  "Get In Touch"
                )}
              </motion.button>

              <div className='flex items-center gap-x-2 lg:gap-x-5'>
                <SocialMedia className="lg:mt-14" />
              </div>
            </motion.div>
          </form>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className='lg:w-1/2'
        >
          <div className='font-extrabold text-2xl lg:text-5xl mt-5 lg:mt-0 space-y-1 lg:space-y-3'>
            <h2>Let's <span className='text-white' style={{ WebkitTextStroke: '1px black' }}>talk</span> for</h2>
            <h2>Something special</h2>
          </div>

          <p className='text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-6'>
            I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.
          </p>

          <div className='font-semibold text-sm lg:text-xl flex flex-col mt-6 gap-2 lg:gap-4'>
            <motion.a
              whileHover={{ x: 5 }}
              className='flex items-center gap-2 group'
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mina.farhat333@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className='border-2 transition-all border-transparent group-hover:border-black rounded-full p-1'>
                <IoMdMail className="w-4 h-4 lg:w-5 lg:h-5" />
              </span>
              mina.farhat333@gmail.com
            </motion.a>

            <motion.a
              whileHover={{ x: 5 }}
              className='flex items-center gap-2 group'
              href="https://wa.me/963937956046"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className='border-2 transition-all border-transparent group-hover:border-black rounded-full p-[5px]' >
                <FaPhone className="w-3 h-3 lg:w-4 lg:h-4" />
              </span>
              +963-937-956-046
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Toast Message */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 20 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-5 inset-x-0 z-[9999] flex justify-center"
          >
            <div className="bg-black text-white px-6 py-4 rounded shadow-lg shadow-black/50 flex items-center gap-2 w-fit whitespace-nowrap font-bold">
              {isError ? (
                <AiOutlineCloseCircle className="w-[28px] h-[28px] text-white" />
              ) : (
                <AiOutlineCheckCircle className="w-[28px] h-[28px] text-white" />
              )}
              <span className="text-sm lg:text-base">{messageText}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
