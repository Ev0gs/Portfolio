import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services, hobbies } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-32 h-32 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const HobbiesCard = ({ index, title, description, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-32 h-32 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
        <p className="text-xs text-center">
          {description}
        </p>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a French student in computer science at CESI Bordeaux, as well as a 
        skilled video game developer with experience in 2 of the most used engines Unity and UE5.
        I'm also a fan of programming languages such as C, C++, C#, as well as creating websites like this one with the help of many frameworks.         
        I'm a quick learner and often work on my missions by team to create efficient, scalable, and user-friendly games, as well as making solutions that solve real-world problems.
        Let's work together to create innovative and memorable solutions for users !
      </motion.p>

      <motion.div variants={textVariant()}>
        <a href="./src/assets/Resume.pdf">
          <button class="flex items-center justify-center bg-violet-800 hover:bg-violet-950 text-white font-bold py-2 px-4 rounded mt-5">
            <p>See my Resume here !</p>
          </button>
        </a>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      
      <motion.div className="mt-20" variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>My hobbies.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Video games, sports, and music are the pillars of my passions, each bringing a unique and enriching experience to my life.
        Collectively, these passions enrich my life in countless ways. They bring me joy, teach me valuable lessons, and provide a means of connection with others who share similar interests. They challenge me, inspire me, and allow me to discover new facets of myself. Through video games, sports, and music, I find a sense of purpose, fulfillment, and a never-ending source of excitement.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {hobbies.map((hobbie, index) => (
          <HobbiesCard key={hobbie.title} index={index} {...hobbie} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");