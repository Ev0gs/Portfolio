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
    kubernetes,
    nextjs,
    postgresql,
    curvaturegames,
    pierrelatorse,
    kapsloc,
    sitp,
    bordeaux,
    kalivitis,
    threejs,
    daimon,
    VirtualLab,
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
    eokko,
    timetoplay,
  } from "../assets";
  
  // // Translation system
  // import { useTranslation } from 'react-i18next';

  // const { t } = useTranslation();
  // // END //


  export const navLinks = [
    {
      id: "about",
      titleKey: "NavLinks-About",
    },
    {
      id: "work",
      titleKey: "NavLinks-Work",
    },
    {
      id: "contact",
      titleKey: "NavLinks-Contact",
    },
  ];
  
  const services = [
    {
      titleKey: "Services-GameDev",
      icon: videogamedev,
    },
    {
      titleKey: "Services-VRGameDev",
      icon: vr,
    },
    {
      titleKey: "Services-WebDev",
      icon: webdev,
    },
    {
      titleKey: "Services-SoftwareDev",
      icon: softwaredev,
    },
  ];

  const hobbies = [
    {
      titleKey: "Hobbies-VideoGames-title",
      descriptionKey: "Hobbies-VideoGames-content",
      icon: videogames,
    },
    {
      titleKey: "Hobbies-Music-title",
      descriptionKey: "Hobbies-Music-content",
      icon: music,
    },
    {
      titleKey: "Hobbies-Sports-title",
      descriptionKey: "Hobbies-Sports-content",
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
      name: "Python",
      icon: python,
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
    {
      name: "kubernetes",
      icon: kubernetes,
    },
    {
      name: "mongodb",
      icon: mongodb,
    },
    {
      name: "postgresql",
      icon: postgresql,
    },
    {
      name: "nextjs",
      icon: nextjs,
    }
  ];
  
  const experiences = [
    {
      titleKey: "Experiences-Freelance-title",
      company_nameKey: "Experiences-Freelance-company",
      icon: pierrelatorse,
      iconBg: "#E6DEDD",
      dateKey: "Experiences-Freelance-date",
      points: [
        "Experiences-Freelance-1st-point",
        "Experiences-Freelance-2nd-point",
        "Experiences-Freelance-3rd-point",
        "Experiences-Freelance-4th-point",
      ],
    },
    {
      titleKey: "Experiences-Kapsloc-title",
      company_nameKey: "Experiences-Kapsloc-company",
      icon: kapsloc,
      iconBg: "#E6DEDD",
      dateKey: "Experiences-Kapsloc-date",
      points: [
        "Experiences-Kapsloc-1st-point",
        "Experiences-Kapsloc-2nd-point",
        "Experiences-Kapsloc-3rd-point",
        "Experiences-Kapsloc-4th-point",
      ],
    },
    {
      titleKey: "Experiences-CurvatureGames-title",
      company_nameKey: "Experiences-CurvatureGames-company",
      icon: curvaturegames,
      iconBg: "#E6DEDD",
      dateKey: "Experiences-CurvatureGames-date",
      points: [
        "Experiences-CurvatureGames-1st-point",
        "Experiences-CurvatureGames-2nd-point",
        "Experiences-CurvatureGames-3rd-point",
        "Experiences-CurvatureGames-4th-point",
      ],
    },
    {
      titleKey: "Experiences-Scissors-title",
      company_nameKey: "Experiences-Scissors-company",
      icon: sitp,
      iconBg: "#383E56",
      dateKey: "Experiences-Scissors-date",
      points: [
        "Experiences-Scissors-1st-point",
        "Experiences-Scissors-2nd-point",
        "Experiences-Scissors-3rd-point",
        "Experiences-Scissors-4th-point",
      ],
    },
    {
      titleKey: "Experiences-BM-title",
      company_nameKey: "Experiences-BM-company",
      icon: bordeaux,
      iconBg: "#E6DEDD",
      dateKey: "Experiences-BM-date",
      points: [
        "Experiences-BM-1st-point",
        "Experiences-BM-2nd-point",
        "Experiences-BM-3rd-point",
        "Experiences-BM-4th-point",
        "Experiences-BM-5th-point",
        "Experiences-BM-6th-point",
      ],
    },
    {
      titleKey: "Experiences-Kalivitis-title",
      company_nameKey: "Experiences-Kalivitis-company",
      icon: kalivitis,
      iconBg: "#383E56",
      dateKey: "Experiences-Kalivitis-date",
      points: [
        "Experiences-Kalivitis-1st-point",
        "Experiences-Kalivitis-2nd-point",
        "Experiences-Kalivitis-3rd-point",
        "Experiences-Kalivitis-4th-point",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonialKey:
        "Testimonials-CurvatureGames-content",
      name: "Dennis Briddigkeit",
      designationKey: "Testimonials-CurvatureGames-designation",
      companyKey: "Testimonials-CurvatureGames-company",
      image: curvaturegames,
    },
    {
      testimonialKey:
        "Testimonials-Scissors-content",
      name: "Benjamin Coudannes",
      designationKey: "Testimonials-Scissors-designation",
      companyKey: "Testimonials-Scissors-company",
      image: sitp,
    },
    {
      testimonialKey:
        "Testimonials-BM-content",
      name: "Olivier Delbosc",
      designationKey: "Testimonials-BM-designation",
      companyKey: "Testimonials-BM-company",
      image: bordeaux,
    },
  ];
  
  const projects = [
    {
      name: "Time To Play",
      descriptionKey:
        "Projects-TimeToPlay-description",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "Android",
          color: "green-text-gradient",
        },
        {
          name: "iOS",
          color: "pink-text-gradient",
        },
        {
          name: "PlayFab",
          color: "purple-text-gradient",
        },
      ],
      image: timetoplay,
    },
    {
      name: "Eokko",
      descriptionKey:
        "Projects-Eokko-description",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: eokko,
    },
    {
      name: "Daimon",
      descriptionKey:
        "Projects-Daimon-description",
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
      image: daimon,
      icon : github,
      source_code_link: "https://github.com/samuellllllllllll/Daimon/tree/V0.1",
      demo_link: "https://saizucorp.itch.io/daimon",
      demo_link_text: "Projects-Test-Btn"
    },
    {
      name: "Virtual Lab",
      descriptionKey:
        "Projects-VirtualLab-description",
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
          name: "VR",
          color: "pink-text-gradient",
        },
      ],
      image: VirtualLab,
    },
    {
      name: "Portfolio website",
      descriptionKey:
        "Projects-Portfolio-description",
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
      name: "ArchiViz VR",
      descriptionKey:
        "Projects-ArchiViz-description",
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
      descriptionKey:
        "Projects-Will-description",
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
      descriptionKey:
        "Projects-LaGrosseBertha-description",
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
      descriptionKey:
        "Projects-ProtechSecurite-description",
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
      descriptionKey:
        "Projects-Platformer-description",
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
      descriptionKey:
        "Projects-FindUXv2-description",
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
      descriptionKey:
        "Projects-Nternship-description",
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
      descriptionKey:
        "Projects-InventoryManager-description",
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