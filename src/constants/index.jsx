import { kbtu, nfactorial_school } from "../assets/images";
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
    title: "Student",
    company_name: "KBTU",
    icon: kbtu,
    iconBg: "#accbe1",
    date: "September 2023 - Present",
    points: [
      "Developed and maintained web projects using technologies aligned with the course syllabus.",
      "Collaborated with fellow students in team-based assignments, coordinating with designers and developers to deliver functional applications.",
      "Applied responsive design principles to ensure usability across different devices and browsers.",
      "Participated in peer code reviews, sharing feedback and improving code quality collaboratively.",
    ],
  },
  {
    title: "Participant – Frontend Web Development Course",
    company_name: "nFactorial School",
    icon: nfactorial_school,
    iconBg: "#FF0000",
    date: "April 2025 - Present",
    points: [
      "Developing and maintaining frontend projects using technologies taught in the course (e.g., HTML, CSS, JavaScript, and frameworks like React).",
      "Collaborating with teammates on practical assignments, simulating real-world team workflows with designers and developers.",
      "Implementing responsive layouts and ensuring compatibility across major browsers.",
      "Participating in peer code reviews to exchange feedback and improve code quality.",
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
