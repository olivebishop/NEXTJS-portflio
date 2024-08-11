import { FaHtml5, FaCss3Alt, FaReact, FaVuejs, FaPhp } from 'react-icons/fa';
import { SiTailwindcss, SiLaravel, SiNodedotjs, SiMysql, SiPostgresql, SiMongodb, SiPrisma, SiSequelize, SiDocker, SiPostman } from 'react-icons/si';
import { FaGolang } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";

// Define the skills object
export const skills = {
  frontend: [
    { Icon: FaHtml5, name: 'HTML5' },
    { Icon: FaCss3Alt, name: 'CSS3' },
    { Icon: SiTailwindcss, name: 'Tailwind CSS' },
    { Icon: FaReact, name: 'React' },
    { Icon: FaVuejs, name: 'Vue.js' },
  ],
  backend: [
    { Icon: SiLaravel, name: 'Laravel' },
    { Icon: SiNodedotjs, name: 'Node.js' },
    { Icon: FaGolang, name: 'Go' },
    { Icon: FaPhp, name: 'PHP' },
  ],
  databases: [
    { Icon: SiMysql, name: 'MySQL' },
    { Icon: SiPostgresql, name: 'PostgreSQL' },
    { Icon: SiMongodb, name: 'MongoDB' },
  ],
  tools: [
    { Icon: SiPrisma, name: 'Prisma' },
    { Icon: SiSequelize, name: 'Sequelize' },
    { Icon: SiPostman, name: 'Postman' },
    { Icon: SiDocker, name: 'Docker' },
    { Icon: VscVscode, name: 'VS Code' },
  ],
};

// Define the Experience type
interface Experience {
  date: string;
  title: string;
  company: string;
  description: string;
  tasks: string[];
}


// Define the experiences array
const experiences: Experience[] = [
  {
    date: "2023 - Present",
    title: "Frontend Developer",
    company: "Payd, Nairobi",
    description: "Focused on creating seamless user experiences and robust front-end solutions.",
    tasks: [
      "Collaborated on UI/UX design & development for Payd platform",
      "Contributed to frontend architecture, tech selection, & scalability planning",
      "Ensured seamless integration with backend leads",
      "Assigned tasks and managed distribution effectively",
      "Took on 'dev on duty' role for continuous support",
    ],
  },
  {
    date: "2023",
    title: "Frontend Developer Intern",
    company: "Payd, Nairobi",
    description: "Gained valuable experience in frontend development and collaboration.",
    tasks: [
      "Collaborated with UX/UI developers on frontend development",
      "Created a user-friendly platform with efficient design",
      "Ensured seamless integration with frontend and backend leads",
      "Assigned tasks and managed distribution effectively",
      "Took on 'dev on duty' role for continuous support",
    ],
  },
];

export { experiences }; 
