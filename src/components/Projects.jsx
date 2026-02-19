import React, { useRef, useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";

const projects = [
  {
    id: 1,
    name: "Belahodod",
    category: "Graduation Project | Mobile & Dashboard App",
    role: "Flutter Developer, UI/UX Designer",
    tools: "Flutter, Figma, Jira, Stack Overflow, Pinterest, Behance, Github",
    description:
      "Graduation mobile & dashboard app with modern UI featuring smooth interactions and a clear workflow using Scrum while interactive components enhance usability and the layout remains engaging.",
    link: "https://github.com/MinaFarhat/belahdodfinal",
    image: "/assets/all-projects-images/BelaHodod WallPaper.png",
    preview: "/assets/ScreenShots/Belahodod ScreenShot.png",
  },
  {
    id: 2,
    name: "ecoTransferz",
    category: "Freelance Project | Mobile & Dashboard Design",
    role: "UI/UX Designer",
    tools: "Figma, Pinterest, Behance",
    description:
      "Designed a mobile and dashboard platform with clarity, usability, and smooth navigation while adapting to evolving client feedback to create an intuitive interface with consistent visuals and interactive elements enhancing user experience.",
    link: "https://www.behance.net/gallery/243815425/ecoTransferz-Full-UIUX-Design-Prototype",
    image: "/assets/all-projects-images/ecoTransferz WallPaper.png",
    preview: "/assets/ScreenShots/ecotransferz ScreenShot.png",
  },
  {
    id: 3,
    name: "Music App",
    category: "Personal Project | Mobile App Design",
    role: "UI/UX Designer",
    tools: "Figma, Pinterest, Behance",
    description:
      "Designed a modern music app with clean visuals and intuitive navigation focusing on smooth interactions and a user-friendly interface while creating engaging layouts to enhance the overall listening experience.",
    link: "https://www.behance.net/gallery/221293003/Music-App-design",
    image: "/assets/all-projects-images/Music App WallPaper.png",
    preview: "/assets/ScreenShots/Music App ScreenShot.png",
  },
  {
    id: 4,
    name: "General Organization for Tourism and Hotels (Syria)",
    category: "Company Project | Web & Dashboard Design",
    role: "UI/UX Designer",
    tools: "Figma, Pinterest, Behance",
    description:
      "Designed web and dashboard interfaces for the tourism and hotels authority focusing on structured content, accessibility, modern visual hierarchy, and adjusting the design to meet client feedback.",
    link: "https://www.behance.net/gallery/237275785/Website-of-the-SGA-for-Tourism-and-Hotel-Training",
    image: "/assets/all-projects-images/Syrian Tourism Authority WallPaper.png",
    preview: "/assets/ScreenShots/Syrian Tourism Authority ScreenShot.png",
  },
  {
    id: 5,
    name: "MediPharma",
    category: "University Project | Mobile & Dashboard App",
    role: "Flutter Developer, UI/UX Designer",
    tools: "Flutter, Figma, Jira, Stack Overflow, Pinterest, Behance, Github",
    description:
      "Built a healthcare mobile and dashboard app for an e-commerce pharmacy using Agile methodology focused on smooth interactions, usability, intuitive flows, and clean interface.",
    link: "https://github.com/MinaFarhat/MEDIPHARMA",
    image: "/assets/all-projects-images/MEDIPHARMA WallPaper.png",
    preview: "/assets/ScreenShots/Medipharma ScreenShot.png",
  },
  {
    id: 6,
    name: "Di-Va",
    category: "University Project | Social Media App",
    role: "Flutter Developer, UI/UX Designer",
    tools: "Flutter, Figma, Stack Overflow, Adobe, Pinterest, Behance, Github",
    description:
      "Built a social media mobile app for university, focusing on smooth interactions, responsive UI, and seamless user experience while exploring coding and interface design.",
    link: "https://github.com/MinaFarhat/Di-Va",
    image: "/assets/all-projects-images/DiVa WallPaper.png",
    preview: "/assets/ScreenShots/Diva ScreenShot.png",
  },
  {
    id: 7,
    name: "ESTRATIJIYA",
    category: "Freelance Project | Dashboard Design",
    role: "UI/UX Designer",
    tools: "Figma, Pinterest, Behance",
    description:
      "Designed a data-driven dashboard for a client, focusing on clear layouts, smooth interactions, and usability while adapting to feedback. Interactive elements enhanced the user experience and maintained visual consistency.",
    link: "https://www.behance.net/gallery/228033535/ESTRATIJIYA",
    image: "/assets/all-projects-images/ESTRATIJIYA WallPaper.png",
    preview: "/assets/ScreenShots/ESTRATIJIYA ScreenShot.png",
  },
  {
    id: 8,
    name: "Disabled People App",
    category: "Freelance Project | Mobile App Design",
    role: "UI/UX Designer",
    tools: "Figma, Pinterest, Behance",
    description:
      "Designed an accessible mobile app with inclusive design principles, focusing on usability, smooth interactions, and intuitive navigation. The interface adapts to user needs and enhances overall accessibility while maintaining visual clarity.",
    link: "https://www.behance.net/gallery/224126851/Disabled-Persons",
    image: "/assets/all-projects-images/Disabled People WallPaper.png",
    preview: "/assets/ScreenShots/Disabled People ScreenShot.png",
  },
  {
    id: 9,
    name: "Camera Booth",
    category: "Freelance Project | Desktop & Dashboard Design",
    role: "UI/UX Designer",
    tools: "Figma, Pinterest, Behance",
    description:
      "Designed desktop and dashboard interfaces focusing on simplicity, consistent visuals, smooth workflow, and intuitive interactions. The layout ensures clarity, efficiency, and a professional user experience across all screens.",
    link: "https://www.behance.net/gallery/237274995/Camera-Booth",
    image: "/assets/all-projects-images/Camera Booth WallPaper.png",
    preview: "/assets/ScreenShots/Camera Booth ScreenShot.png",
  },
  {
    id: 10,
    name: "Roza Clinic",
    category: "Freelance Project | Mobile & Dashboard Design",
    role: "UI/UX Designer",
    tools: "Figma, Pinterest, Behance",
    description:
      "Designed mobile and dashboard solutions for a beauty clinic focusing on intuitive navigation, smooth interactions, and efficient appointment management. The layout prioritizes user experience, clarity, and accessibility for all clients.",
    link: "https://www.behance.net/gallery/224592817/Roza-Clinic",
    image: "/assets/all-projects-images/Roza Clinic WallPaper.png",
    preview: "/assets/ScreenShots/Roza Clinic ScreenShot.png",
  },
  {
    id: 11,
    name: "General Syrian Judo Federation",
    category: "Freelance Project | Web Design",
    role: "UI/UX Designer",
    tools: "Figma, Pinterest, Behance",
    description:
      "Designed the official website for the Syrian Judo Federation, focusing on intuitive navigation, clear content structure, and modern visual hierarchy. The interface ensures accessibility and enhances the overall experience for athletes and visitors.",
    link: "https://www.behance.net/gallery/241622741/The-Syrian-General-Authority-for-Judo",
    image: "/assets/all-projects-images/Syrian Judo Authority Website WallPaper.png",
    preview: "/assets/ScreenShots/Syrian Judo Authority Website ScreenShot.png",
  },
  {
    id: 12,
    name: "Compiler Project",
    category: "University Project | Compiler Development",
    role: "Software Engineer, Java Developer",
    tools: "Java, ANTLR, Stack Overflow",
    description:
      "Built a robust compiler simulating Flutter's compiler, implementing lexical and syntax analysis, constructing AST and classes, and generating HTML, CSS, and JavaScript output, ensuring efficient and maintainable code.",
    link: "https://github.com/MinaFarhat/compiler2",
    image: "/assets/all-projects-images/Compiler Project WallPaper.png",
    preview: "/assets/ScreenShots/Compiler Project ScreenShot.png",
  },
  {
    id: 13,
    name: "Operating Systems Project",
    category: "University Project | Bash Scripting",
    role: "Software Engineer, Bash Script Developer",
    tools: "Bash Script, Linux, Ubuntu, Stack Overflow",
    description:
      "Worked on an operating systems project focused on automation and scripting, enhancing system-level programming skills, developing practical Bash scripts, and implementing solutions to manage and automate system tasks efficiently.",
    link: "",
    image: "/assets/all-projects-images/Operating Systems Project WallPaper.png",
    preview: "/assets/ScreenShots/Bash Script ScreenShot.webp",
  },
];

const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

export default function Projects() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const isDragging = useRef(false);

  // Hover preview
  const [hoverPreview, setHoverPreview] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Handle responsive slides per view
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 1024) {
        setSlidesPerView(3);
      } else if (width === 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    // Set initial value immediately
    const width = window.innerWidth;
    if (width > 1024) {
      setSlidesPerView(3);
    } else if (width === 1024) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(1);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projectChunks = chunkArray(projects, slidesPerView);

  // Update Swiper touch settings when slidesPerView changes
  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.allowTouchMove = slidesPerView < 3;
      swiperInstance.update();
    }
  }, [slidesPerView, swiperInstance]);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div
      className="bg-black px-5 lg:px-28 py-12 pb-20  lg:py-20 mt-3 relative "
      id="projects"
      ref={sectionRef}
    >
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My <span className="font-extrabold">Projects</span>
      </h2>

      <div className="mt-8 lg:mt-16 relative">
        {/* PREVIEW IMAGE */}
        {hoverPreview && (
          <motion.div
            className="fixed w-64 h-40 rounded-xl shadow-2xl pointer-events-none z-[999] flex flex-col items-center justify-center p-2"
            style={{
              left: mousePos.x + 12,
              top: mousePos.y + 12,
              backgroundColor: "#161616",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <img
              src={hoverPreview.src}
              alt="preview"
              className="w-full h-28 object-containt rounded-lg mb-1 transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-xs text-white font-semibold px-2 py-1 rounded">
              {hoverPreview.link ? "Visit Project" : "Preview Only"}
            </span>
          </motion.div>
        )}

        {/* Prev / Next buttons - مخفية على الموبايل والتابلت، تظهر فقط على الشاشات الكبيرة */}
        {activeIndex > 0 && (
          <button
            type="button"
            aria-label="Previous slide"
            className="hidden lg:block absolute left-[-85px] top-1/2 -translate-y-1/2 z-20 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              swiperInstance?.slidePrev();
            }}
          >
            <div className="rounded-full w-14 h-14 flex items-center justify-center bg-white shadow-lg hover:scale-110 transition-transform">
              <FiChevronLeft size={38} className="text-black" />
            </div>
          </button>
        )}
        {activeIndex < projectChunks.length - 1 && (
          <button
            type="button"
            aria-label="Next slide"
            className="hidden lg:block absolute right-[-85px] top-1/2 -translate-y-1/2 z-20 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              swiperInstance?.slideNext();
            }}
          >
            <div className="rounded-full w-14 h-14 flex items-center justify-center bg-white shadow-lg hover:scale-110 transition-transform">
              <FiChevronRight size={38} className="text-black" />
            </div>
          </button>
        )}

        <div style={{ touchAction: slidesPerView < 3 ? 'pan-x' : 'auto', WebkitOverflowScrolling: 'touch' }}>
          <Swiper
            key={`swiper-${slidesPerView}`}
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={50}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            onSlideChange={handleSlideChange}
            onSlideChangeTransitionStart={() => {
              isDragging.current = true;
            }}
            onSlideChangeTransitionEnd={() => {
              setTimeout(() => {
                isDragging.current = false;
              }, 100);
            }}
            allowTouchMove={slidesPerView < 3}
            touchRatio={1}
            threshold={10}
            resistance={true}
            resistanceRatio={0.85}
            watchOverflow={true}
            preventClicks={false}
            preventClicksPropagation={false}
            updateOnWindowResize={true}
          >
            {projectChunks.map((chunk, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col lg:flex-row gap-10 justify-center">
                  {chunk.map((project, index) => (
                    <motion.div
                      key={`${project.id}-${activeIndex}`}
                      className={`relative flex flex-col bg-[#1F1F1F] p-4 rounded-2xl shadow-lg h-[550px] cursor-pointer overflow-hidden group
                     w-full            /* الافتراضي للموبايل */
                     md:w-1/2  md:mx-auto         /* التابلت: نصف الشاشة */
                     lg:w-full           /* الديسكتوب: ثلث الشاشة */
                     xl:w-1/3
                   `}
                      initial={{ opacity: 0, y: 100 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        type: "spring",
                        stiffness: 180,
                        damping: 12,
                        delay: index * 0.15,
                      }}
                      onClick={(e) => {
                        if (!isDragging.current && project.link) {
                          window.open(project.link, "_blank");
                        }
                      }}
                      onMouseEnter={() =>
                        setHoverPreview({
                          src: project.preview
                            ? project.preview
                            : "/assets/all-projects-images/placeholder.png",
                          link: project.link ? true : false,
                        })
                      }
                      onMouseLeave={() => setHoverPreview(null)}
                      onMouseMove={(e) =>
                        setMousePos({ x: e.clientX, y: e.clientY })
                      }
                    >

                      {/* IMAGE */}
                      <div className="relative w-full h-[270px] rounded-2xl overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* TEXT */}
                      <div className="mt-2 flex flex-col flex-1">
                        <p className="text-xs text-[#E0E0E0] uppercase mt-1">
                          {project.category}
                        </p>
                        <h2 className="font-bold text-[#ffffff] uppercase text-lg mt-2">
                          {project.name}
                        </h2>
                        <p className="text-sm text-[#BEBEBE] mt-0.5 flex-1 line-clamp-5">
                          {project.description}
                        </p>

                        {/* ROLE */}
                        <div className="mt-2 flex flex-wrap gap-2">
                          {project.role.split(",").map((r, idx) => (
                            <motion.span
                              key={idx}
                              initial={{ opacity: 0, y: 0 }}
                              animate={isInView ? { opacity: 1, y: 0 } : {}}
                              transition={{ delay: 0.45 + idx * 0.05 }}
                              style={{ border: "1px solid #ffffff" }}
                              className="text-xs bg-zinc-800/80 text-[#C8C8C8] px-3 py-1 rounded-full font-semibold"
                            >
                              {r.trim()}
                            </motion.span>
                          ))}
                        </div>

                        {/* TOOLS */}
                        <div className="mt-2 flex flex-wrap gap-2">
                          {project.tools.split(",").map((tool, idx) => (
                            <motion.span
                              key={idx}
                              initial={{ opacity: 0, y: 0 }}
                              animate={isInView ? { opacity: 1, y: 0 } : {}}
                              transition={{ delay: 0.45 + idx * 0.05 }}
                              className="text-xs bg-zinc-800 text-[#C8C8C8] px-4 py-1 rounded-full shadow-sm font-medium transition-all duration-200"
                            >
                              {tool.trim()}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* SWIPER DOTS */}
      <div className="absolute lg:bottom-8 bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3 ">
        {projectChunks.map((_, idx) => (
          <span
            key={idx}
            className={`transition-all duration-300 ${activeIndex === idx
              ? "w-8 h-3 rounded-full bg-white"
              : "w-3 h-3 rounded-full bg-zinc-900"
              }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
