import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  python,
  mysql,
  vue,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  ml,
  aws,
  electron,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  trophy,
  microsoft,
  servicenow,
  webdev,
  tcs,
  lw,
  nw,
  ar,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "1x Microsoft Certified",
    icon: microsoft,
  },
  {
    title: "1x ServiceNow Certified",
    icon: servicenow,
  },
  {
    title: "Web Developer",
    icon: webdev,
  },
  {
    title: "Mobile Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Linkedin Content Creator",
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
    name: "Vue JS",
    icon: vue,
  },
  {
    name: "Python Fast API",
    icon: python,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MYSQL",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "AWS",
    icon: docker,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: aws,
  },
  {
    name: "Machine Learning",
    icon: ml,
  },
  {
    name: "Quantum Computing",
    icon: electron,
  },
];

const experiences = [
  {
    title: "Vue.js Developer",
    company_name: "Learning and Teaching Center",
    icon: nw,
    iconBg: "#383E56",
    date: "November 2022 - present",
    points: [
      "Developing and maintaining web applications using Vue.js.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Python Fast API Developer",
    company_name: "Learning and Teaching Center",
    icon: nw,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - present",
    points: [
      "Developing and maintaining backend application using python Fast API.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Learned how to easily deploy applications into ubuntu server using Nginix",
    ],
  },
  {
    title: "Servicenow Developer",
    company_name: "Tata Consultancy Services",
    icon: tcs,
    iconBg: "#383E56",
    date: "August 2021 - August 2022",
    points: [
      "Developing and maintaining web applications for automation of infrastructure.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "ARTH2.0 Learner",
    company_name: "LinuxWorld Informatics",
    icon: lw,
    iconBg: "#E6DEDD",
    date: "August 2022 - September 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I have worked with Gautam for the past one year it's been good experience, he has very good knowledge in all the technologies and ready to adapt to that technology quickly, he always provides his full support from service now end whenever I requested for help. Thanks buddy 😊",
    name: "Prakash Jayaveeran",
    designation: "Devops Engineer | Infra automation",
    company: "Tata Consultancy Services",
    image:
      "https://media.licdn.com/dms/image/D5603AQFkrkf_iBEFFg/profile-displayphoto-shrink_800_800/0/1690208188909?e=1696464000&v=beta&t=OUANgaclv1QWmJCNjLVBNHKsXgxF531aK4rFxW7ZDlg",
  },
  {
    testimonial:
      "Gautam is very good at his job and very dedicated to his work.He always come up with a better and efficient solution.He is also good with colleagues and clients.It was great working with him.",
    name: "Smrutisudha Mishra",
    designation: "Servicenow developer",
    company: "Tata Consultancy Services",
    image:
      "https://media.licdn.com/dms/image/D4D35AQHzYnQMrAKeXw/profile-framedphoto-shrink_800_800/0/1686208718427?e=1691539200&v=beta&t=__0Cye9Gi6C9jikacXmLwTEy3_sd09FQW68x_O70XP0",
  },
];

const projects = [
  {
    name: "AR Furniture Android App",
    description:
      "Developed an interactive AR Furniture app that visualizes objects in real-world spaces.It places objects based on dimensions selected on the device. Resulted in an intuitive and interactive app, facilitating better furniture buying decisions.",
    tags: [
      {
        name: "ARCore",
        color: "blue-text-gradient",
      },
      {
        name: "Android Studio",
        color: "green-text-gradient",
      },
      {
        name: "Java",
        color: "pink-text-gradient",
      },
      {
        name: "Kotlin",
        color: "blue-text-gradient",
      },
    ],
    image: ar,
    source_code_link:
      "https://github.com/gautamsagar99/major_project/tree/master",
  },
  {
    name: "Bearcat Furniture Hub",
    description:
      "This project will help Bearcats to find furnitures for free from other Bearcats who are living in Maryville.From this project Successfully launched a user-friendly platform, empowering students to effortlessly find and acquire furniture.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link:
      "https://github.com/gautamsagar99/GDP-Group07-BearcatFurnitureHub/tree/master",
  },
  {
    name: "Docker Container with Trained Model",
    description:
      "Created a deployable machine learning solution, reducing prediction time significantly. The containerized architecture enhances scalability and ease of use, catering to a wide range of prediction requirements across various industries.",
    tags: [
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "pink-text-gradient",
      },
      {
        name: "redhat",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link:
      "https://hub.docker.com/repository/docker/gautamsagar99/machinelearning/general",
  },
  {
    name: "Complete Automation with ML Model",
    description:
      "Achieved an autonomous and efficient model with minimal manual intervention. The pipeline significantly reduced development cycles, enabling rapid experimentation and fine-tuning of hyperparameters, ultimately enhancing model accuracy.",
    tags: [
      {
        name: "Jenkins",
        color: "blue-text-gradient",
      },
      {
        name: "Terraform",
        color: "green-text-gradient",
      },
      {
        name: "Ansible",
        color: "pink-text-gradient",
      },
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
      {
        name: "CNN",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link:
      "https://hub.docker.com/repository/docker/gautamsagar99/machinelearning/general",
  },
];

export { services, technologies, experiences, testimonials, projects };
