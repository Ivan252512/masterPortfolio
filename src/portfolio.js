/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

// SEO Related settings
const seo = {
  title: "Carlos Iván Pineda Santiago",
  description:
    "Software Engineer and aspiring Data Scientist with experience in backend development on AWS and a strong interest in algorithmic trading and data-driven products.",
  og: {
    title: "Carlos Iván Pineda Santiago",
    type: "website",
    url: "https://ivan252512.github.io/",
  },
};

// Home Page
const greeting = {
  title: "Carlos Iván Pineda Santiago",
  logo_name: "IvanPineda",
  nickname: "",
  subTitle:
    "Software Engineer specializing in backend architectures and data-driven products. I build scalable systems on AWS and develop algorithmic trading strategies at the intersection of Finance and Machine Learning.",
  resumeLink:
    "https://drive.google.com/file/d/1LuCKV6-5jiOPAoy8GKfkCq_AZoC_r9sA/view?usp=sharing",
  portfolio_repository: "https://github.com/Ivan252512/masterPortfolio",
  githubProfile: "https://github.com/Ivan252512",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Ivan252512",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link:
      "https://www.linkedin.com/in/carlos-iv%C3%A1n-pineda-santiago-325346107/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:ivan31416neda@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Backend & Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building RESTful APIs and backend services using Python and NodeJS, with a focus on clean architecture and maintainable code.",
        "⚡ Creating responsive web frontends with JavaScript and modern frameworks to deliver intuitive user experiences for internal tools and customer-facing apps.",
        "⚡ Integrating external services, financial APIs and data sources into production applications to support analytics, reporting and automation use cases.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cloud Infrastructure & Data Platforms",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working with AWS to deploy, operate and monitor backend services, using managed services to keep systems reliable and scalable.",
        "⚡ Hosting and maintaining applications with integrated relational and NoSQL databases, designing schemas that support transactional workloads and analytics.",
        "⚡ Setting up data flows and streaming jobs between databases and services on AWS to enable event-driven architectures and real-time data processing.",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#FCC624",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Universidad Nacional Autónoma de México",
      subtitle: "B.Sc. Earth Sciences, Space Sciences",
      logo_path: "unam.svg.webp",
      alt_name: "UNAM",
      duration: "2015 - 2019",
      descriptions: [
        "⚡ Studied Earth and Space Sciences with a strong mathematical and physical background.",
        "⚡ Completed courses in Calculus, Statistics, Algebra and Physics to support quantitative analysis.",
        "⚡ Social service at Instituto de Investigaciones en Matemáticas Aplicadas y en Sistemas (IIMAS), working on evolutionary programming.",
      ],
      website_link:
        "https://drive.google.com/file/d/1BnWEohbVmzkTIUQe5n5o3C1J5sgucJvu/view?usp=sharing",
    },
    {
      title: "Instituto de Estudios Universitarios",
      subtitle: "B.Eng. Computer Systems",
      logo_path: "ieu.jpg",
      alt_name: "IEU",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ Studied core software engineering subjects such as Algorithms, Databases, Operating Systems and OOP.",
        "⚡ Completed additional courses on Blockchain, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ Developed a basic to intermediate specialization in high performance computing with Python.",
      ],
      website_link:
        "https://drive.google.com/file/d/1pizPf-MjvTavBC4qlgPUWFTBFZscDveL/view?usp=sharing",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Data Science & Machine Learning: Making Data-Driven Decisions",
      subtitle: "Data Science and Machine Learning",
      logo_path: "MIT_Schwarzman_College_of_Computing_logo.png",
      certificate_link:
        "https://olympus1.mygreatlearning.com/certificate/THUSYCVQ",
      alt_name: "MIT Schwarzman College of Computing",
      color_code: "#8C151599",
    },
    {
      title: "Diploma in Analytical Introduction to Data Science",
      subtitle: "Data Science Diploma",
      logo_path: "sec_ed_ab_fc.png",
      certificate_link:
        "https://drive.google.com/file/d/1yHEcXON0aYT5TVTU0TSQbzvTWesiYUsw/view",
      alt_name:
        "Secretaría de Educación Abierta y Continua de la Facultad de Ciencias-UNAM",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "",
  description:
    "I have worked with several companies as a Backend and Full Stack Developer, mainly in the financial and real estate sectors. I am especially interested in data-driven products, algorithmic trading and the intersection of software engineering and data science.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Backend Developer",
          company: "Konfío",
          company_url: "https://konfio.mx",
          logo_path: "konfio.png",
          duration: "October 2024 - Current",
          location: "Ciudad de México, México",
          description:
            "Backend development for banking products using Python and NodeJS on AWS, contributing to data-intensive financial services.",
          color: "#0879bf",
        },
        {
          title: "Full Stack Developer",
          company: "GBM",
          company_url: "https://gbm.com",
          logo_path: "gbm.png",
          duration: "May 2022 - September 2024",
          location: "Ciudad de México, México",
          description:
            "Worked on financial products, implementing backend services and web interfaces for trading and investment platforms.",
          color: "#0879bf",
        },
        {
          title: "Full Stack Developer",
          company: "Tuhabi",
          company_url: "https://tuhabi.mx",
          logo_path: "tuhabi.svg",
          duration: "Nov 2021 - May 2022",
          location: "Ciudad de México, México",
          description:
            "Contributed to the development of applications for the real estate market, focusing on backend services and integrations.",
          color: "#9b1578",
        },
        {
          title: "AWS Cloud Engineer",
          company: "Codster",
          company_url: "https://www.facebook.com/codster.io/",
          logo_path: "codster.png",
          duration: "Mar 2020 - Nov 2021",
          location: "Ciudad de México, México",
          description:
            "Developed applications with Python and AWS Cloud, mainly using Django, Flask, Elastic Beanstalk and Lambda functions.",
          color: "#fc1f20",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a wide variety of modern technologies. I focus on backend services, cloud deployment and data-driven or algorithmic use cases, including trading bots and financial data processing.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research-oriented pieces and technical content.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description:
        "Paper written on Artificial Intelligence and large-scale unsupervised learning.",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description:
        "Paper written on Artificial Intelligence and large-scale unsupervised learning.",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description:
        "Paper written on Artificial Intelligence and large-scale unsupervised learning.",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description:
        "Paper written on Artificial Intelligence and large-scale unsupervised learning.",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description:
        "Paper written on Artificial Intelligence and large-scale unsupervised learning.",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "yo.webp",
    description:
      "I am available on most social media platforms. You can message me and I will reply within 24 hours. I can help you with Python, backend development, APIs, cloud architectures and data-oriented projects.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I enjoy writing about technology, software engineering, data and trading to share practical lessons and experiences.",
    link: "https://blogs.ivanpineda.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Tecámac, Estado de México, México.",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/BACWjdyGG7JdRikS9",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
