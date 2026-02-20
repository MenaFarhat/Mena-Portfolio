import { motion } from "framer-motion";
import { IoLogoBehance, IoLogoLinkedin } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
const SocialMedia = ({ className }) => {
    return (
        <motion.div
            className={`flex items-center md:gap-x-5 gap-x-3  ${className} xl:mt-14 `}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
        >
            {[
                { icon: BiLogoGmail, link: "https://mail.google.com/mail/?view=cm&fs=1&to=mina.farhat333@gmail.com" },
                { icon: IoLogoLinkedin, link: "https://www.linkedin.com/in/mina-farhat-968ba8250" },
                { icon: IoLogoBehance, link: "https://www.behance.net/minafarhat" },
                { icon: BsGithub, link: "https://github.com/MinaFarhat" },
            ].map((item, index) => (
                <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-2 lg:p-3 rounded border-2 border-black"
                    whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                    whileTap={{ scale: 0.9 }}
                >
                    <item.icon className="w-4 h-4 lg:w-5 lg:h-5" />
                </motion.a>
            ))}
        </motion.div>
    )
}
export default SocialMedia