/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Carlos Iván Pineda Santiago",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Carlos Iván Pineda Santiago",
    type: "website",
    url: "https://ivan252512.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Carlos Iván Pineda Santiago",
  logo_name: "IvanPineda",
  nickname: "",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/19hSK4UPFmhAKFlBdG5jB0jAiv8W8OZhd/view?usp=drive_link",
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
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using JavaScript",
        "⚡ Creating application backend in Node, Python and NodeJS",
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
            color: "#663399",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on AWS",
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
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/ivan31416neda",
    },
  ],
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
        "⚡ I have studied basic Computer Science subjects to understand Geophysical Data.",
        "⚡ Apart from this, I have done courses on Calculus, Statistics, Algebra and Physics.",
        "⚡ I have done my social service at Instituto de Investigaciones en Matemáticas Aplicadas y en Sistemas (IIMAS) working on Evolutionary programming.",
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
        "⚡ I have studied basic software engineering subjects like Algorithms, Databases, Operating Systems, OOP, etc.",
        "⚡ Apart from this, I have done courses on Blockchain, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I have a basic-intermediate specialization in high performance computing with Python.",
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
      subtitle: "data science",
      logo_path: "MIT_Schwarzman_College_of_Computing_logo.png",
      certificate_link:
        "https://olympus1.mygreatlearning.com/certificate/THUSYCVQ",
      alt_name: "MIT Schwarzman College of Computing",
      color_code: "#8C151599",
    },
    {
      title: "AWS Cloud Practitioner",
      subtitle: "cloud",
      logo_path: "aws.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Jobs",
  description:
    "I have worked with many companies evolving as a Full Stack Developer and Software Architect. I am very interested in the financial sector.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Full Stack Developer",
          company: "GBM",
          company_url: "https://gbm.com",
          logo_path: "gbm.png",
          duration: "May 2022 - Current",
          location: "Ciudad de México, México",
          description: "I am working on financial products.",
          color: "#0879bf",
        },
        {
          title: "Full Stack Developer",
          company: "Tuhabi",
          company_url: "https://tuhabi.mx",
          logo_path: "tuhabi.svg",
          duration: "Nov 2021- May 2022",
          location: "Ciudad de México, México",
          description:
            "I have contribuited to create complete application for Real Estate.",
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
            "In this job I developed applications with Python and AWS Cloud. Mostly, I used Django, Flask, Elastic Beanstalk and Lambdas.",
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
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Backend projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
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
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Python, React, API, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
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
