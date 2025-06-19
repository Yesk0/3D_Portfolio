import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  git,
  github,
  html,
  javascript,
  linkedin,
  mui,
  pricewise,
  react,
  redux,
  tailwindcss,
  threads,
  typescript,
  threejs,
  d3js
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: d3js,
    name: "D3.js",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: threejs,
    name: "Three.js",
    type: "Frontend",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#accbe1",
    date: "March 2030 - April 2031",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#fbc3bc",
    date: "Jan 2031 - Feb 2032",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#b7e4c7",
    date: "Jan 2032 - Jan 2033",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#a2d2ff",
    date: "Jan 2033 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Yesk0",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/feed/",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "JumysTap",
    description:
      "A job search website with a modern design that combines ease of use with a clear and structured interface.",
    link: "https://github.com/Yesk0/JumysTap",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Medium Clone",
    description:
      "A blog-style platform that presents posts in a clean, minimalist layout, focusing on readability and visual clarity.",
    link: "https://github.com/Yesk0/Media-as-medium",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "To-Do App",
    description:
      "A simple and intuitive to-do app designed for efficient task management with a clean and responsive interface.",
    link: "https://github.com/Yesk0/to-do-app",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "3D Portfolio Application",
    description:
      "A visually engaging 3D portfolio website that showcases projects and skills through interactive design and smooth animations.",
    link: "https://github.com/Yesk0/3D_Portfolio",
  },
];
