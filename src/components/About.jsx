import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services, hobbies } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import { useTranslation } from 'react-i18next';

const ServiceCard = ({ index, titleKey, icon, t }) => (
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
          {t(titleKey)}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const HobbiesCard = ({ index, titleKey, descriptionKey, icon, t }) => (
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
          {t(titleKey)}
        </h3>
        <p className="text-xs text-center">
          {t(descriptionKey)}
        </p>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h2 className={styles.sectionHeadText}>{t('overview')}</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        {t('about')}
      </motion.p>

      <motion.div variants={textVariant()}>
        <a href="CV.pdf" target="_blank">
          <button class="flex items-center justify-center bg-violet-800 hover:bg-violet-950 text-white font-bold py-2 px-4 rounded mt-5">
            <p>{t('resume-btn')}</p>
          </button>
        </a>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} t={t} />
        ))}
      </div>
      
      <motion.div className="mt-20" variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>{t('hobbies-title')}</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        {t('hobbies-content')}
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {hobbies.map((hobbie, index) => (
          <HobbiesCard key={hobbie.title} index={index} {...hobbie} t={t} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");