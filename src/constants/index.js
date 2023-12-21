import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    vit,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    movix,
    tripguide,
    threejs,
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
      // title: "Web Developer",
      title: "HTML",
      icon: web,
    },
    {
      // title: "React Native Developer",
      title: "CSS",
      icon: mobile,
    },
    {
      // title: "Backend Developer",
      title: "Javascript",
      icon: backend,
    },
    {
      // title: "Content Creator",
      title: "React",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
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
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "St. Don Bosco",
      // company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "2018",
      points: [
        "I completed my high school education from St. Don Bosco, Lakhimpur-Kheri, Uttar Pradesh.",
        // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        // "Implementing responsive design and ensuring cross-browser compatibility.",
        // "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    // {
    //   title: "React Native Developer",
    //   // company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   // date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    {
      title: "St. Don Bosco",
      // company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "2020",
      points: [
        "I completed my intermediate(12th) education from St. Don Bosco, Lakhimpur-Kheri, Uttar Pradesh.",
        // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        // "Implementing responsive design and ensuring cross-browser compatibility.",
        // "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "VIT Bhopal University",
      // company_name: "Meta",
      icon: vit,
      iconBg: "#E6DEDD",
      date: "September 2020",
      points: [
        "I joined VIT Bhopal to pursue my bachelor’s, where I am pursuing B.Tech Computer Science and Engineering.",
        // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        // "Implementing responsive design and ensuring cross-browser compatibility.",
        // "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Nice work",
      name: "Ishika Verma",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "portfolio is looking good",
      name: "Vishal Gupta",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Great work",
      name: "Vartika Singh",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Fitness Exercise Website",
      description:
        "Responsive frontend website designed to help users achieve their fitness and wellness goals by providing comprehensive exercise routines for every muscle group.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "rapidapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/KshitijPatel7/Fitness-Exercise-",
    },
    {
      name: "Movix",
      description:
        " Frontend website that provides genres and description of over 100+ movies using the TMDP API. Search and filter options to navigate the catalogue.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: movix,
      source_code_link: "https://movix-website-nine.vercel.app/",
    },
    {
      name: "Youtube Lite",
      description:
        " Created a video streaming website along with rapid api integration for a seamless video experience. Enforced 14 different categories to choose from and designed search page feature.",
      tags: [
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "rapidapi",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://youtube-lite-livid.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };