/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/brain-loading.json"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 3500 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rihan Rifaat",
  title: emoji("Hi all, I'm Rihan 👋"),
  userImage: require("./assets/images/personal-image.jpeg"), // Replace with your image path
  subTitle:
    "Welcome — I’m a certified Life Coach and Mental Health practitioner specializing in CBT, DBT, ACT, Schema Therapy, and Family Counseling. I help individuals overcome emotional challenges, break limiting patterns, and build healthier relationships and mindsets. My mission is to guide you toward clarity, confidence, and a life that feels balanced and truly yours.",
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  facebook: "https://www.facebook.com/profile.php?id=61581367721216",
  instagram: "https://www.instagram.com/rihan_awareness/",
  youtube: "https://www.youtube.com/@Rihan_Rifaat",
  phone: "tel:+201212143800",
  whatsapp: "https://wa.me/+201212143800",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
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
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
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
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Life Coach Certification",
      logo: require("./assets/images/certf-1.png"),
      subHeader:
        "Training in guiding individuals toward personal growth, clarity, and life transformation."
    },
    {
      schoolName: "Psychological & Family Counseling Certificate",
      logo: require("./assets/images/certf-2.png"),
      subHeader:
        "Skills in supporting families, resolving conflicts, and improving emotional communication."
    },
    {
      schoolName:
        "Diploma in Clinical Psychology for Mental, Personality & Behavioral Disorders",
      logo: require("./assets/images/certf-3.png"),
      subHeader:
        "Knowledge of diagnosing and understanding mental, personality, and behavioral disorders."
    },
    {
      schoolName: "CBT – Modified Cognitive Behavioral Therapy Diploma",
      logo: require("./assets/images/certf-4.png"),
      subHeader:
        "Advanced techniques for restructuring thoughts and changing negative behavior patterns."
    },
    {
      schoolName: "Cognitive Behavioral Therapy (CBT) Certification",
      logo: require("./assets/images/certf-5.png"),
      subHeader:
        "Tools for challenging unhealthy thinking and promoting healthier emotional responses."
    },
    {
      schoolName: "Dialectical Behavior Therapy (DBT) Certification",
      logo: require("./assets/images/certf-6.png"),
      subHeader:
        "Training in emotional regulation, distress tolerance, and improving interpersonal skills."
    },
    {
      schoolName: "Acceptance & Commitment Therapy (ACT) Certification",
      logo: require("./assets/images/certf-7.png"),
      subHeader:
        "Helping clients build psychological flexibility and live with greater meaning and values."
    },
    {
      schoolName: "Professional Life Coach Diploma",
      logo: require("./assets/images/certf-8.png"),
      subHeader:
        "Professional-level coaching techniques for creating change and setting intentional goals."
    },
    {
      schoolName: "Coaching Practice Guide Certification",
      logo: require("./assets/images/certf-9.png"),
      subHeader:
        "Practical skills for running structured, effective, and results-driven coaching sessions."
    },
    {
      schoolName: "Positive Psychology Diploma",
      logo: require("./assets/images/certf-10.png"),
      subHeader:
        "Approaches focused on well-being, strengths, happiness, and building a positive mindset."
    },
    {
      schoolName: "Mental Health Diploma",
      logo: require("./assets/images/certf-11.png"),
      subHeader:
        "Foundational understanding of emotional wellness, mental well-being, and support methods."
    },
    {
      schoolName: "TOT – Training of Trainers Certification",
      logo: require("./assets/images/certf-12.png"),
      subHeader:
        "Expertise in teaching, presenting, and delivering structured training programs."
    },
    {
      schoolName: "MBTI Personality Types Certification",
      logo: require("./assets/images/certf-13.png"),
      subHeader:
        "Ability to assess personality types and improve communication and self-understanding."
    },
    {
      schoolName: "Dark Psychology Diploma",
      logo: require("./assets/images/certf-14.png"),
      subHeader:
        "Understanding of manipulation, toxic behavior, and emotional defense strategies."
    },
    {
      schoolName: "Positive Parenting Diploma",
      logo: require("./assets/images/certf-15.png"),
      subHeader:
        "Guidance on healthy parenting, communication, and child emotional development."
    },
    {
      schoolName: "Family, Marital & Educational Counseling Diploma",
      logo: require("./assets/images/certf-16.png"),
      subHeader:
        "Training in resolving marital issues, family dynamics, and educational challenges."
    },
    {
      schoolName: "Schema Therapy Diploma (Cognitive Schema Therapy)",
      logo: require("./assets/images/certf-17.png"),
      subHeader:
        "Skills in identifying deep emotional patterns and helping clients break long-term cycles."
    },
    {
      schoolName: "Relationship Life Coaching Diploma",
      logo: require("./assets/images/certf-18.png"),
      subHeader:
        "Supporting individuals and couples in building healthy, conscious, and secure relationships."
    }
  ]
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "A look at the certifications and achievements that shaped my journey.",

  achievementsCards: [
    {
      title: "Life Coach Certification",
      subtitle:
        "Training in guiding individuals toward personal growth, clarity, and life transformation.",
      image: require("./assets/images/certf-1.png"),
      footerLink: []
    },
    {
      title: "Psychological & Family Counseling Certificate",
      subtitle:
        "Skills in supporting families, resolving conflicts, and improving emotional communication.",
      image: require("./assets/images/certf-2.png"),
      footerLink: []
    },
    {
      title:
        "Diploma in Clinical Psychology for Mental, Personality & Behavioral Disorders",
      subtitle:
        "Knowledge of diagnosing and understanding mental, personality, and behavioral disorders.",
      image: require("./assets/images/certf-3.png"),
      footerLink: []
    },
    {
      title: "CBT – Modified Cognitive Behavioral Therapy Diploma",
      subtitle:
        "Advanced techniques for restructuring thoughts and changing negative behavior patterns.",
      image: require("./assets/images/certf-4.png"),
      footerLink: []
    },
    {
      title: "Cognitive Behavioral Therapy (CBT) Certification",
      subtitle:
        "Tools for challenging unhealthy thinking and promoting healthier emotional responses.",
      image: require("./assets/images/certf-5.png"),
      footerLink: []
    },
    {
      title: "Dialectical Behavior Therapy (DBT) Certification",
      subtitle:
        "Training in emotional regulation, distress tolerance, and improving interpersonal skills.",
      image: require("./assets/images/certf-6.png"),
      footerLink: []
    },
    {
      title: "Acceptance & Commitment Therapy (ACT) Certification",
      subtitle:
        "Helping clients build psychological flexibility and live with greater meaning and values.",
      image: require("./assets/images/certf-7.png"),
      footerLink: []
    },
    {
      title: "Professional Life Coach Diploma",
      subtitle:
        "Professional-level coaching techniques for creating change and setting intentional goals.",
      image: require("./assets/images/certf-8.png"),
      footerLink: []
    },
    {
      title: "Coaching Practice Guide Certification",
      subtitle:
        "Practical skills for running structured, effective, and results-driven coaching sessions.",
      image: require("./assets/images/certf-9.png"),
      footerLink: []
    },
    {
      title: "Positive Psychology Diploma",
      subtitle:
        "Approaches focused on well-being, strengths, happiness, and building a positive mindset.",
      image: require("./assets/images/certf-10.png"),
      footerLink: []
    },
    {
      title: "Mental Health Diploma",
      subtitle:
        "Foundational understanding of emotional wellness, mental well-being, and support methods.",
      image: require("./assets/images/certf-11.png"),
      footerLink: []
    },
    {
      title: "TOT – Training of Trainers Certification",
      subtitle:
        "Expertise in teaching, presenting, and delivering structured training programs.",
      image: require("./assets/images/certf-12.png"),
      footerLink: []
    },
    {
      title: "MBTI Personality Types Certification",
      subtitle:
        "Ability to assess personality types and improve communication and self-understanding.",
      image: require("./assets/images/certf-13.png"),
      footerLink: []
    },
    {
      title: "Dark Psychology Diploma",
      subtitle:
        "Understanding of manipulation, toxic behavior, and emotional defense strategies.",
      image: require("./assets/images/certf-14.png"),
      footerLink: []
    },
    {
      title: "Positive Parenting Diploma",
      subtitle:
        "Guidance on healthy parenting, communication, and child emotional development.",
      image: require("./assets/images/certf-15.png"),
      footerLink: []
    },
    {
      title: "Family, Marital & Educational Counseling Diploma",
      subtitle:
        "Training in resolving marital issues, family dynamics, and educational challenges.",
      image: require("./assets/images/certf-16.png"),
      footerLink: []
    },
    {
      title: "Schema Therapy Diploma (Cognitive Schema Therapy)",
      subtitle:
        "Skills in identifying deep emotional patterns and helping clients break long-term cycles.",
      image: require("./assets/images/certf-17.png"),
      footerLink: []
    },
    {
      title: "Relationship Life Coaching Diploma",
      subtitle:
        "Supporting individuals and couples in building healthy, conscious, and secure relationships.",
      image: require("./assets/images/certf-18.png"),
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "UI/UX", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "DOOK",
      companylogo: require("./assets/images/dook-logo.png"),
      date: "Jan 2023 – 2024 Apr",
      desc: "PART-TIME",
      descBullets: [
        "Collaborated with the team to design, build, and deploy efficient, user-focused software solutions.",
        "Integrated third-party tools, debugged, and optimized systems for smoother performance and reliability.",
        "Collected user feedback, conducted UX testing, and implemented improvements to enhance overall experience.",
        "Prepared documentation and handover materials to ensure seamless project continuity."
      ]
    },
    {
      role: "Software Developer",
      company: "SENSUS",
      companylogo: require("./assets/images/sensus-logo.png"),
      date: "Jul 2023 – 2024 Apr",
      desc: "PART-TIME",
      descBullets: [
        "Developed and launched the company website using Flutter for web and mobile.",
        "Documented business requirements to guide upcoming projects.",
        "Collaborated with stakeholders to align technical goals with business needs.",
        "Designed and implemented features meeting both functional and strategic objectives."
      ]
    },
    {
      role: "Teacher Assistant",
      company: "Ahram Canadian University",
      companylogo: require("./assets/images/ACU-logo.png"),
      date: "Sept 2023 – Present",
      desc: "FULL-TIME",
      descBullets: [
        "Supported students through tutorials, workshops, and one-on-one guidance.",
        "Assisted in grading and provided constructive feedback to enhance learning.",
        "Collaborated with faculty to create engaging instructional materials.",
        "Communicated complex concepts clearly to foster a positive learning environment."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Youtube",
  subtitle:
    "Videos, ideas, and all the awesome stuff happening on this channel!",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://www.youtube.com/watch?v=IApn84uZe6w",
      title:
        " حقيقة التعلق بالشخصية السامة المؤذية وازاي اتعافى من هذه العلاقة ؟! ",
      description:
        "في هذا الفيديو هنتكلم عن الشخصية السامة المؤذية ازاي نعرفها وايه هي اسباب التعلق بيها وازاي نقدر نتعافى من العلاقة دي ونبني حياة افضل لنفسنا. "
    },
    {
      url: "https://www.youtube.com/watch?v=4giqD9Bw4_4",
      title:
        " سن الأربعين حقيقة محدش بيقولها إزاي تهتم بصحتك ونفسيتك قبل فوات الأوان؟! ",
      description:
        "في هذا الفيديو هنتكلم عن اهمية سن الاربعين وايه هي التغيرات اللي بتحصل لجسمنا ونفسيتنا في المرحلة دي وازاي نقدر نهتم بنفسنا صح ونبني حياة افضل. "
    },
    {
      url: "https://www.youtube.com/watch?v=amgpsVNe92A",
      title: " مش هتصدقي ليه النرجسي بيخون - حقيقة النرجسي الخاين ",
      description:
        "في هذا الفيديو هنتكلم عن ليه النرجسي بيخون ازاي تفهمي اسباب خيانة النرجسي وازاي تتعاملي مع الخيانة دي لو حصلت في العلاقة. "
    },
    {
      url: "https://www.youtube.com/watch?v=fBFc7hkfbTA",
      title: " إزاي اوفر فلوس من جوزي البخيل النرجسي ",
      description:
        "في هذا الفيديو هنتكلم عن ازاي اتعامل مع جوزي البخيل النرجسي وايه هي الطرق اللي اقدر اوفر بيها فلوس في العلاقة دي عشان ابني حياتي ومستقبلي. "
    },
    {
      url: "https://www.youtube.com/watch?si=IQPPx3x6I2i0NvD9&v=1iO8--SZ-Po&feature=youtu.be",
      title: " فن الرد ",
      description:
        "في هذا الفيديو هنتكلم عن فن الرد ازاي نرد بطريقة ذكية وفعالة في المواقف المختلفة عشان نحافظ على احترامنا ونوصل وجهة نظرنا بشكل صحيح. "
    },
    {
      url: "https://www.youtube.com/watch?v=1Xd6SMM1jX0",
      title: " أسئلة نفسية وإجاباتها ",
      description:
        "في هذا الفيديو هنتكلم عن مجموعة من الاسئلة النفسية المهمة اللي ممكن تساعدنا نفهم نفسنا والناس اللي حوالينا بشكل افضل. "
    },
    {
      url: "https://www.youtube.com/watch?v=BSYQ1wEqSHA",
      title: " رسالة من قلبي لكل شخص بيحارب الإكتئاب ",
      description:
        "في هذا الفيديو هشارك معاكم رسالة من قلبي لكل شخص بيحارب الاكتئاب وبيمر بظروف صعبة في حياته. عايزكم تعرفوا انكم مش لوحدكم وان في دايما امل وفرصة للتغيير والتحسن. "
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Contact Me",
  subtitle: "Need guidance or simply want to talk? My door is always open.",
  number: "+201212143800",
  email_address: ""
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
