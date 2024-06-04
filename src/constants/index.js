import {
  backend,
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
  qent,
  freelancer,
  fpt,
  macracraft,
  landingqent,
  portfolio,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Freelancer",
    icon: freelancer,
    iconBg: "#383E56",
    date: "March 2021 - Present",
    points: [
      "Developing and maintaining web applications using Javascript and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Mainly making landing pages, solving student exercises and making projects for students.",
    ],
  },
  {
    title: "Intern",
    company_name: "FPT Software",
    icon: fpt,
    iconBg: "#E6DEDD",
    date: "September 2023 - December 2023",
    points: [
      "I was transferred to another department and was not allowed to make a website, but I learned a lot of things in a real environment such as: how to use git, the stages of a product, how to operate a project, etc.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "QEntertaiment",
    icon: qent,
    iconBg: "#383E56",
    date: "May 2022 - July 2022",
    points: [
      "Developing and maintaining landing page website using HTML / CSS, Javascript and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const projects = [
  {
    name: "E-commerce",
    description: "E-commerce website platform helps users search, buy handmade products.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: macracraft,
    source_code_link: "https://github.com/vietzz771/MacraCraft",
  },
  {
    name: "Landing Page",
    description: "The website landing page uses image slides to introduce the company's club system.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: landingqent,
    source_code_link: "https://github.com/vietzz771/qEntertaiment",
  },
  {
    name: "Old Portfolio",
    description: "The website shows personal information as well as small projects using React to practice.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "portfolio",
        color: "green-text-gradient",
      },
      {
        name: "old",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/vietzz771/portfolio",
  },
];

export { services, technologies, experiences, projects };
