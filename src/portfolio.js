/* Change this file to get your personal Portfolio */
// To change portfolio colors globally go to the  _globalColor.scss file
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};
const greeting = {
  username: "krishna",
  title: "Hi all, I'm Krishna Vamshi",
  subTitle: emoji(
    "Passionate Full Stack Developer & AI Engineer 🚀 | Building intelligent apps with Python/TensorFlow/PyTorch, Generative AI (GPT/GANs), and NLP (SpaCy/BERT). Deploying scalable solutions on AWS/GCP | Agile collaborator ⚡️ turning code into impact."
  ),
  resumeLink:
    "https://drive.google.com/file/d/14z-hkJPYCu9MhPrCZCrWtETKxRPjAYmQ/view", // Updated resume link
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/krishnavamshis/",
  gmail: "krishna029220@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "🤪 CRAZY FULL STACK DEVELOPER | Hell-bent on conquering Python, TensorFlow, AWS/GCP, and every tech stack 🌟 | Turning chaos into CODE that shapes the future 🔥",
  skills: [
    emoji(
      "⚡ Developed highly interactive AI-driven features to enhance user experience in web and mobile applications."
    ),
    emoji("⚡ Integrated third-party services like AWS/GCP for seamless scalability and performance."),
  ],
  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "c++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "sqlite3",
      fontAwesomeClassname: "fas fa-file-code"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "vs code",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "wordpress",
      fontAwesomeClassname: "fab fa-wordpress"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Osmania University",
      logo: require("./assets/images/oslogo.jpg"),
      subHeader: "Bachelor of Engineering (B.E) in Computer Science",
      duration: "Year of Graduation: DEC 2020 - AUG 2024",
    },
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Emerging Technologies in Artificial Intelligence (AI) Intern",
      company: "IBM",
      companylogo: require("./assets/images/ibm-logo-1956.webp"),
      date: "JUN 2023 – JULY 2023",
      desc: "Completed a project-based learning internship in Artificial Intelligence (AI), focusing on emerging technologies and innovative solutions.Acquired practical skills with industry-standard tools and platforms, including IBM SkillsBuild, to address real-world AI challenges effectively."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
const openSource = {
  showGithubProfile: "False", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on
const bigProjects = {
  title: "Personal Projects",
  projects: [
    {
      projectName: "Text Generation Using GPT-2",
      projectDesc: "Developed a fine-tuned GPT-2 model to generate creative short stories. Used Hugging Face Transformers & PyTorch; achieved 85% coherence in outputs.",
      footerLink: [
        {
          name: "Python"
        },
        { name: "PyTorch" },
        { name: "Datasets (Hugging Face)" },
        { name: "Hugging Face Transformers" }
      ]
    },
    {
      projectName: "Sentiment Analysis Chatbot",
      projectDesc: "Developed an NLP chatbot using SpaCy & Transformer models (Hugging Face) to analyze customer feedback.Deployed on AWS EC2 with a Flask API.",
      footerLink: [
        {
          name: "Python",
        },
        {
          name: "AWS (EC2)",
        },
        {
          name: "Hugging Face Transformers",
        },
        {
          name: "SpaCy",
        },
        {
          name: "Flask",
        }
      ]
    },
    {
      projectName: "Personal Finance Tracker",
      projectDesc: "LDeveloped a personal finance tracker using Java, SQLite3, HTML, and CSS to help users manage their income, expenses, and savings goals by analyzing spending patterns and generating monthly reports. The application was built as a standalone desktop tool with an intuitive graphical user interface (GUI) for seamless user interaction.",
      footerLink: [
        {
          name: "Java",
        },
        {
          name: "SQLite3",
        },
        {
          name: "HTML & CSS",
        },
        {
          name: "Swing/JavaFX",
        },
        {
          name: "JDBC (Java Database Connectivity)",
        },
        {
          name: "Git",
        },
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc
const achievementSection = {
  title: emoji("Certifications 🏆 "),
  achievementsCards: [
    {
      subtitle:
        "Electronic Arts Software Engineering Virtual Experience Program on Forage",
      image: require("./assets/images/ea logo.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Credential ID: 6RFJ69bgfFbSsRsSk",
        },
      ]
    },
    {
      subtitle:
        "CS50's Introduction to Programming with Python by Harvard University.",
      image: require("./assets/images/harvardLogo.png"),
      imageAlt: "-",
      footerLink: [
        {
          name: "Python",
        },
        {
          name:"Sqllite3"
        },

      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section
const blogSection = {

};

// Talks Sections
const talkSection = {};

// Podcast Section
const podcastSection = {};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  link: "https://drive.google.com/file/d/14z-hkJPYCu9MhPrCZCrWtETKxRPjAYmQ/view", // Updated resume link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "krishna029220@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};