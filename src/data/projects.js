import { BiLogoCss3, BiLogoFirebase, BiLogoMongodb, BiLogoReact, BiLogoRedux, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs, TbApi, TbDatabase, TbBrandPrisma } from "react-icons/tb";
import { SiThemoviedatabase, SiExpress } from "react-icons/si";

const ProjectsData = [
  {
    id: "1",
    name: "klimatee - weather app",
    image: "./klimatee.png",
    icons: [BiLogoReact, BiLogoCss3, SiThemoviedatabase],
    description: "A web application that show weather of different locations including your current location",
    github: "https://github.com/silverstar529/weather_app",
    demo: "https://klimatee.vercel.app/",
  },
  {
    id: "2",
    name: "Ecommerce Website",
    image: "./ecom.png",
    icons: [BiLogoReact, BiLogoTailwindCss, TbApi, TbDatabase],
    description: "This website provides users with all the basic kinds of shopping items.",
    github: "https://github.com/silverstar529/react_ecommerce",
    demo: "https://vijay-ecommerce.vercel.app",
  },
  {
    id: "3",
    name: "DevHire",
    image: "./dev-hire.png",
    icons: [TbBrandNextjs, BiLogoTailwindCss, BiLogoFirebase],
    description: "An innovative platform that connects tech talents with their potential employers",
    github: "https://github.com/silverstar529/dev_hire",
    demo: "https://dev-hire-vp.vercel.app/",
  },
  {
    id: "4",
    name: "Expense Tracker",
    image: "./expense-tracker.png",
    icons: [ BiLogoMongodb, SiExpress, BiLogoReact, BiLogoRedux, BiLogoTailwindCss],
    description: "This application provides an interface for users to track their expenses .",
    github: "https://github.com/silverstar529/expense_tracker",
    demo: "https://vtrack-expense.vercel.app",
  },
  {
    id: "5",
    name: "Hoo Bank Website",
    image: "./hoo-bank.png",
    icons: [TbBrandNextjs, BiLogoTypescript, BiLogoTailwindCss, TbApi],
    description: "The website is a landing page for a financial technology startup, which offers online banking, savings, and investment services. The landing page has a modern design, featuring responsive layouts for improved user experience across various devices Stack",
    github: "https://github.com/silverstar529/bank_app",
    demo: "https://bank-modern-app-r9rw.vercel.app/",
  },
];

export default ProjectsData;
