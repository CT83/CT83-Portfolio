/* Change this file to get your personal Porfolio */

const greeting = {
  /* Your Summary And Greeting Section */
  title: "Hi! I'm Rohan",
  subTitle:
    "a Full Stack Software Engineer, with a background of Deep Learning and AI, who creates products which combine all of these!",
  resumeLink: "https://www.linkedin.com/in/rohan-sawant-code/"
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/CT83",
  linkedin: "https://www.linkedin.com/in/rohan-sawant-code/",
  gmail: "rohansawantct83@gmail.com",
};

const skillsSection = {
  /* Your Skills Section  */
  title: "What I do?",
  subTitle: "I build and lead teams to build scalable and maintainable Web Apps with Python and Javascript",
  skills: [
    "🦄 Backend, Frontend, API Integrations",
    "🛠 CI/CD Optimization, Deployment, Containerization",
    "📃 Project Management, Code Reviews, Technical Documentation"
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon */
  /* https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "social",
      fontAwesomeClassname: "fas fa-people-carry"
    },
  ]
};

const openSource = {
  /* Your Open Source Section to View Your Github Pinned Projects */
  /* To know how to get github key look at readme.md */

  githubConvertedToken: "ODE0ZDVlZDE0M2Q3YzUxNDhkNGIxM2VmMzY2ODc3YTFmZDJjMDRmMw==",
  githubUserName: "CT83"
};

const bigProjects = {
  /* Some Big Projects You have worked with your company */
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELP TO CREATE THEIR TECH",
  projects: [
    {
      image: "https://drive.google.com/uc?id=1exWn9T6j8TsfDDHJnS3VR66eP6RiGAfY",
      link: "http://saayahealth.com/"
    },
    {
      image: "https://drive.google.com/uc?id=1MXoXcQRK-pH8J82wyjCW4SJk5AxJe7tf",
      link: "http://nextu.se/"
    }
  ]
};

const achievementSection = {
  /* Your Achievement Section Include Your Certification Talks and More */

  title: "Achievements 🏆",
  subtitle: "Some things I am proud of!",

  achivementsCards: [
    {
      title: "Featured by Dev.to on Twitter",
      subtitle: "'Hemuer' my side project was featured by Dev.to's official Twitter handle.",
      image: require("./assests/images/devto.webp"),
      footerLink: [
        { name: "View Tweet", url: "https://twitter.com/_Rohan_Sawant_/status/1239376557413560320" },
      ]
    },
    {
      title: "Received the Intel® Edge AI Scholarship | Udacity",
      subtitle: "The scholarship taught me the basics of AI at the Edge, how to leverage pre-trained models available with the Intel® Distribution of OpenVINO Toolkit™.",
      image: require("./assests/images/edge.webp"),
      footerLink: []
    },

    {
      title: "Acknowledged by Microsoft for my Technical Article",
      subtitle: "The Article talked about Azure IOT Edge Configuration on Linux",
      image: require("./assests/images/azure-1.webp"),
      footerLink: [
        { name: "View Article", url: "https://www.linkedin.com/pulse/setup-azure-iot-edge-runtime-jetson-devices-minified-rohan-sawant/" },
        { name: "View Tweet", url: "https://twitter.com/_Rohan_Sawant_/status/1240227016277766145" }
      ]
    }
  ]
};

const blogSection = {
  /* Blogs Section */

  title: "Blogs",
  subtitle: "I love to write, share and teach others. Blogging allows me to do just that.",

  blogs: [
    {
      url: "https://www.linkedin.com/pulse/i-made-ai-tool-detect-facial-expressions-while-you-watch-rohan-sawant/",
      image: require("./assests/images/screenshot-1.webp"),
      title: "I made an AI Tool to detect facial expressions while you watch a video!",
      description: "Hemeur is an AI Tool to record facial expressions of users as they watch a video and then visualize the funniest parts of it! It watches users as they watch a video, and logs when the users smile. Insights can be gathered from collected data!"
    },
    {
      url: "https://www.linkedin.com/pulse/i-made-ai-chrome-extension-fight-fake-news-rohan-sawant/",
      image: require("./assests/images/bunyip-screencap.webp"),
      title: "I made an AI Chrome Extension to fight Fake News!",
      description: "Bunyip is a Chrome Extension, which allows us to detect AI-generated text, it helps users detect fake news articles which might be generated automatically and not by a real human!"
    },{
      url: "https://www.linkedin.com/pulse/failed-rumaro-ai-recognize-emotions-apparel-body-pose-rohan-sawant/",
      image: require("./assests/images/algo_dg.webp"),
      title: "Rumaro an AI to recognize emotions, apparel, body pose and activity on Instagram - [FAILED]",
      description: "Rumaro uses AI to recognize emotions, apparel, body pose and activity in images, and measures how they affect audience engagement. ie. likes and comments."
    },
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅",

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
      image:
        "https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/76714032_1730516240415559_1293494289556307968_o.jpg?_nc_cat=103&_nc_ohc=s5f81rdZd6wAQmqUa52YQBA21MjVOy7e-HN9jI7MspRDC-v5ahEouyInQ&_nc_ht=scontent.fkhi6-1.fna&oh=c29141a9a0de7ff2011a8191f5475a78&oe=5E83127C"
    }
  ]
};

// Podcast Section
const podcastSection = {
  title: "Podcast 🎙️",
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: "Contact Me ☎️",
  subtitle: "Let's talk Tech - about that App of yours, or just to say Hi! My Inbox is open for all.",
  number: "+91-8879886525",
  email_address: "rohansawantct83@gmail.com"
};

export { greeting, socialMediaLinks, skillsSection, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo };
