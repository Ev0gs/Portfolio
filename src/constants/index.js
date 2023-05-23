import {
    mobile,
    backend,
    creator,
    web,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    sitp,
    bordeaux,
    kalivitis,
    threejs,
    daimonion,
    archiviz,
    will,
    bertha,
    protech,
    platformer,
    findux,
    nternship,
    inventory,
    videogamedev,
    vr,
    webdev,
    softwaredev,
    unity,
    unreal,
    mysql,
    python,
    vuejs,
    htmlcssjs,
    clanguages,
    portfolio,
    videogames,
    music,
    climbing,
    gitlab,
    github,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Video Game Developer",
      icon: videogamedev,
    },
    {
      title: "VR Developer",
      icon: vr,
    },
    {
      title: "Web Developer",
      icon: webdev,
    },
    {
      title: "Software Developer",
      icon: softwaredev,
    },
  ];

  const hobbies = [
    {
      title: "Video games",
      description: "Love playing video games as well as creating them.",
      icon: videogames,
    },
    {
      title: "Music",
      description: "I have been learning how to play bass by myself for 5 years.",
      icon: music,
    },
    {
      title: "Sport",
      description: "I practiced Fencing and Rifle Shooting for 6 years each at a national level. Since 2020, I practice boulder climbing.",
      icon: climbing,
    },
  ]
  
  const technologies = [
    {
      name: "Unity",
      icon: unity,
    },
    {
      name: "Unreal Engine 5.1",
      icon: unreal,
    },
    {
      name: "C / C# / C++",
      icon: clanguages,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "HTML 5 / CSS 3 / JS",
      icon: htmlcssjs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Vue JS",
      icon: vuejs,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Video Game Developer Intern",
      company_name: "Scissors In The Plug",
      icon: sitp,
      iconBg: "#383E56",
      date: "Jan 2023 - April 2023",
      points: [
        "Developing and maintaining 2D, 3D as well as VR video games on multiple engines such as Unity and Unreal Engine 5.1.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing main gameplay mechanics, and optimizing for target devices via Profiler.",
        "Participating in preproduction, production and postproduction.",
      ],
    },
    {
      title: "Web Developer intern",
      company_name: "Bordeaux Métropole",
      icon: bordeaux,
      iconBg: "#E6DEDD",
      date: "April 2022 - July 2022",
      points: [
        "Helping in the development of a web application to simplify the integration and supervision of different applications within the metropolis.",
        "Developing and maintaining a web application using Vue.js (Vue3) and other related technologies such as Django framework.",
        "Programming with Python, HTML, CSS, Javascript languages.",
        "Collaborating with integration and supervision service teams.",
        "Implementing responsive design and ensuring the integrity of the recovered data.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Production assistant",
      company_name: "SARL Kalivitis",
      icon: kalivitis,
      iconBg: "#383E56",
      date: "July 2021 - Aug 2021",
      points: [
        "Helping the wine company to manage all the events such as bottling, container filling, etc.",
        "Preparing the orders.",
        "Making trips by car to supervise some orders prepartion at our partners winery.",
        "Proposing new ideas to help the company in the future by working on their organization for example.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Pierre developed a talent for understanding what a game is all about. Either technically, humanly, financially or from a game design point of view. I have complete confidence in him for the position of video game developer or the position of IT engineer.",
      name: "Benjamin Coudannes",
      designation: "CTO",
      company: "Scissors In The Plug",
      image: sitp,
    },
    {
      testimonial:
        "Serious, punctual and endowed with a team spirit facilitating his integration within the team, these qualities testify to his voluntary attitude and allow him to adopt new working methods with ease.",
      name: "Olivier Delbosc",
      designation: "Integration Engineer",
      company: "Bordeaux Métropole",
      image: bordeaux,
    },
  ];
  
  const projects = [
    {
      name: "Portfolio website",
      description:
        "A website working as a portfolio to show my skills in web development as well as video game development with some 3D models integration with Three JS.",
      tags: [
        {
          name: "Vite",
          color: "blue-text-gradient",
        },
        {
          name: "Vite JS & React JS & Three JS",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      icon : github,
      source_code_link: "https://github.com/Ev0gs/Portfolio",
    },
    {
      name: "Daimonion",
      description:
        "2D narrative RPG video game project, strongly inspired by Undertale by Toby Fox, in production on Unity.",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "green-text-gradient",
        },
        {
          name: "2D Top down",
          color: "pink-text-gradient",
        },
      ],
      image: daimonion,
      icon : github,
      source_code_link: "https://github.com/GameDevsTeam/Daimonion_Project",
    },
    {
      name: "ArchiViz VR",
      description:
        "Realistic architectural visualization project in virtual reality developed on Unreal Engine 5.1 for Meta Quest 2 during my internship at Scissors In The Plug.",
      tags: [
        {
          name: "UE5.1",
          color: "blue-text-gradient",
        },
        {
          name: "Blueprints",
          color: "green-text-gradient",
        },
        {
          name: "3D / VR",
          color: "pink-text-gradient",
        },
      ],
      image: archiviz,
      icon : gitlab,
      source_code_link: "https://gitlab.com/Ev0gs/archiviz-vr",
    },
    {
      name: "Will.exe",
      description:
        "Horrific narrative puzzle game project in collaboration with a narrative designer, developed on Unity. In this game the character will realize little by little he is controlled by the player and will try to break the 4th wall.",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "green-text-gradient",
        },
        {
          name: "2D",
          color: "pink-text-gradient",
        },
      ],
      image: will,
      icon : gitlab,
      source_code_link: "https://gitlab.com/Ev0gs/will.exe",
    },
    {
      name: "La Grosse Bertha",
      description:
        "2D multiplayer video game based on a tower defense gameplay where the main goal is to destroy the opponent's cannon 'Grosse Bertha' with our own while gaining part of the battlefield little by little.",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "green-text-gradient",
        },
        {
          name: "Multiplayer - 2D",
          color: "pink-text-gradient",
        },
      ],
      image: bertha,
      icon : gitlab,
      source_code_link: "https://gitlab.com/Ev0gs/LaGrosseBertha",
    },
    {
      name: "Protech Securité",
      description:
        "3D object demonstrator for the bulletproof carpentry company ProTech Securité which wanted to be able to visualize their new product and present it on a tablet to future customers.",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "green-text-gradient",
        },
        {
          name: "Android - 3D",
          color: "pink-text-gradient",
        },
      ],
      image: protech,
      icon : gitlab,
      source_code_link: "https://gitlab.com/Ev0gs/protech-securite",
    },
    {
      name: "Platformer Project",
      description:
        "2D platformer video game in which gameplay mechanics are based on those of a platformer where the player embodies a knight who must reach the end of the level like a game of the Mario Bros license.",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "green-text-gradient",
        },
        {
          name: "2D platformer",
          color: "pink-text-gradient",
        },
      ],
      image: platformer,
      icon : github,
      source_code_link: "https://github.com/Ev0gs/Unity-FirstPlatformer",
    },
    {
      name: "FindUX v2",
      description:
        "Monitoring web application based on the django framework using Python language, and on VueJS framework using HTML, CSS & Javascript. The goal of this project was to help the integration and supervision department on their mission by delivering a realtime monitoring app & automate applications integration in the metropolis of Bordeaux based on GitLab pipelines.",
      tags: [
        {
          name: "Vue.js",
          color: "blue-text-gradient",
        },
        {
          name: "Django (Python)",
          color: "green-text-gradient",
        },
        {
          name: "GitLab",
          color: "pink-text-gradient",
        },
      ],
      image: findux,
      source_code_link: "https://github.com/",
    },
    {
      name: "Nternship",
      description:
        "Internship research application, such as job search websites, based on web languages (HTML, CSS, PHP, javascript) and a link to a database via the use of phpMyAdmin. The goal of this project was to help my school providing a website for students struggling to find an internship. This website contains some offers for students and they can apply to them depending on its location and what he is searching.",
      tags: [
        {
          name: "Web fullstack",
          color: "blue-text-gradient",
        },
        {
          name: "PHP",
          color: "green-text-gradient",
        },
        {
          name: "SQL",
          color: "pink-text-gradient",
        },
      ],
      image: nternship,
      icon : github,
      source_code_link: "https://github.com/Ev0gs/Nternship",
    },
    {
      name: "Inventory Manager",
      description:
        "Store inventory manager project based on SQL queries made with C++ on a MySQL database. The goal of this project was to provide an application to a store in order to visualise product quantities and many other aspects related to their inventory.",
      tags: [
        {
          name: "Windows Form",
          color: "blue-text-gradient",
        },
        {
          name: "C++",
          color: "green-text-gradient",
        },
        {
          name: "SQL",
          color: "pink-text-gradient",
        },
      ],
      image: inventory,
      icon : github,
      source_code_link: "https://github.com/Ev0gs/OOP-Project",
    },
  ];
  
  export { services, hobbies, technologies, experiences, testimonials, projects };