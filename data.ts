
import { RiComputerLine } from 'react-icons/ri'
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";
import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [

  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js/Next.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express,Node.js </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>Spring Boot</b>  & <b>Node.js</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "IOT and Robotics",
    about: "Internship in IOT and Robotics,daily designing in  <b>EasyEda,Tinkercad </b>  and <b>many projects.</b> ",
  },
 

];


export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "React.js/Next.js",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Java Advanced",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Tailwind/Bootstrap",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "DSA",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Spring Boot",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "SQL,No-SQL",
    level: "90",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Jira",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Arduino",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "MATLAB",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Excel",
    level: "70",
  },
];

export const projects: IProject[] = [
  {
    name: "To-Do-List",
    description:
      "To do list, manage task, assign time accordingly.",
    image_path: "/images/toDoList.png",
    github_url: "https://github.com/pranit390/To-do-list--MERN.git",
    category: ["react","node","mongo"],
    key_techs: ["React", "Bootstrap", "Mongo","Express","Node"],
  },
  {
    name: "Countries Info App",
    image_path: "/images/ajax.png",
    github_url: "https://github.com/pranit390/Fetching-Countries-Info-using-Ajax-call.git",
    category: ["javascript"],
    description:
      "Clicking Get button all countries name, capital,currency, region & population appear"+
      "Population can be edited and countries info can be deleted.",
    key_techs: ["Html", "css", "Javascript(ajax call)"],
  },

  {
    name: "Shopping Cart",
    image_path: "/images/shopping-cart.png",
    github_url: "https://github.com/pranit390/ShoppingCart.git",
    category: ["springboot", "react"],
    description:
      "ShoppingCartProject in Spring boot and ReactJs with H2 database",
    key_techs: [
      "React",
      "SpringBoot"
    ],
  },

  {
    name: "Custom elements(ToDo and Button)",
    image_path: "/images/customElement.png",
    github_url: "https://github.com/pranit390/Custom-Element-To-Do-List-.git",
    category: ["javascript"],
    description:
      "Just add todo.js script in html page and add <to-do/> tag inside body.",
    key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
  },

  {
    name: "Self-help for Elderly",
    image_path: "/images/self-help.png",
   
    github_url: "https://github.com/pranit390/Self-Help-For-Elderly-MERN-.git",
    category: ["react","node","mongo"],
    description:
      "A three party application consisting user, volunteer and admin. Application enable elderly to get volunteer for performing daily task like medicine delivery, house cleaning,hospital visit etc.",
    key_techs: ["MERN"],
  },

  {
    name: "Book Record Server",
    image_path: "/images/book.jpg",
   
    github_url: "https://github.com/pranit390/Books-Info-Nodejs-.git",
    category: ["node"],
    description:
      "Server built for storing and fetching Books info using nodejs",
    key_techs: ["Node.js"],
  },
  
];



