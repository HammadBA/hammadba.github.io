import {
  CryptoTracker,
  GPT3Playground,
  RDC,
  Spacestagram,
  backend,
  c,
  creator,
  css,
  git,
  html,
  java,
  javascript,
  mobile,
  nodejs,
  python,
  reactjs,
  sql,
  tailwind,
  threejs,
  typescript,
  web,
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
    title: "Fullstack Developer",
    icon: web,
  },
  {
    title: "Database Engineer",
    icon: creator,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Excellent Leader",
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
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "Java",
    icon: java,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Rogue Data Corp",
    icon: RDC,
    iconBg: "#383E56",
    date: "Jan 2021 - Dec 2022",
    points: [
      "Developed Motor Vehicle Collision and Police Occurrence reports for 2 major police agencies in Canada, increasing user satisfaction and reducing report processing time.",
      "Implemented a secure User Verification and Authentication system, reducing fraudulent activities and unauthorized access attempts.",
      "Developed a Scheduling System for a police force in Ontario, improving efficiency, reducing in-person visits, with cost savings of ~$50,000 annually.",
      "Built a Servlet Config Application to dynamically change webpage configurations using a MySQL database, reducing A/B testing time and webpage markup design time.",
      "Proposed and developed new Online Forms Services for Peel Region Police and South Simcoe Police, resulting in improved user flow, device support, and responsive design.",
      "Participating in code reviews and providing constructive feedback to other developers in fast paced Agile team",
    ],
  },
];

const testimonials = [
  {
    testimonial: "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
];

const projects = [
  {
    name: "Spacestagram",
    description:
      "Like and Share Astronomy Pictures Using NASA's Astronomy Picture Of The Day (APOD) API",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "APOD API",
        color: "pink-text-gradient",
      },
    ],
    image: Spacestagram,
    source_code_link: "https://github.com/HammadBA/Spacestagram",
    demo_link: "https://hammadba.github.io/Spacestagram",
  },
  {
    name: "Crypto Tracker",
    description:
      "Get All The Info Regarding Your Favourite Crypto Currency Using This Crypto Dashboard. Use Filters To Match Your Bias And Add Favourite Coins To Your Watchlist",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Mui 5",
        color: "green-text-gradient",
      },
      {
        name: "CoinGecko API",
        color: "pink-text-gradient",
      },
    ],
    image: CryptoTracker,
    source_code_link: "https://github.com/HammadBA/CryptoTracker",
    demo_link: "https://hammadba.github.io/CryptoTracker",
  },
  {
    name: "GPT3-Playground",
    description:
      "GPT3-Playground is an application to interact with multiple GPT AI models (GPT3.5 & GPT4 Access Coming Soon)",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Node JS",
        color: "green-text-gradient",
      },
      {
        name: "OpenAI API",
        color: "pink-text-gradient",
      },
    ],
    image: GPT3Playground,
    source_code_link: "https://github.com/HammadBA/GPT3-Playground",
    demo_link: "https://hammadba.github.io/GPT3-Playground",
  },
];

export { services, technologies, experiences, testimonials, projects };
