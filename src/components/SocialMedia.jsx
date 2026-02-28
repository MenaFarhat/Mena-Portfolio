import { motion } from "framer-motion";
import { IoLogoBehance, IoLogoLinkedin } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { useState, useEffect } from "react";

const SocialMedia = ({ className }) => {
    const [isMobile, setIsMobile] = useState(false);

    // Check screen size on mount and resize
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 1024); // lg breakpoint
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const socialLinks = [
        {
            icon: BiLogoGmail,
            desktopLink: "https://mail.google.com/mail/?view=cm&fs=1&to=mina.farhat333@gmail.com",
            mobileLink: "mailto:mina.farhat333@gmail.com",
            label: "Gmail"
        },
        {
            icon: IoLogoLinkedin,
            link: "https://www.linkedin.com/in/mina-farhat-968ba8250",
            label: "LinkedIn"
        },
        {
            icon: IoLogoBehance,
            link: "https://www.behance.net/MenaFarhat",
            label: "Behance"
        },
        {
            icon: BsGithub,
            link: "https://github.com/MenaFarhat",
            label: "GitHub"
        },
    ];

    const getLink = (item) => {
        if (item.label === "Gmail") {
            return isMobile ? item.mobileLink : item.desktopLink;
        }
        return item.link;
    };

    return (
        <motion.div
            className={`flex items-center md:gap-x-5 gap-x-3 ${className} xl:mt-14`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
        >
            {socialLinks.map((item, index) => (
                <motion.a
                    key={index}
                    href={getLink(item)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-2 lg:p-3 rounded border-2 border-black"
                    whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={item.label}
                >
                    <item.icon className="w-4 h-4 lg:w-5 lg:h-5" />
                </motion.a>
            ))}
        </motion.div>
    );
};

export default SocialMedia;