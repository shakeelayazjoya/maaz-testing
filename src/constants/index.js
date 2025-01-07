import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  unity,
  unreal,
  blender,
} from "../assets";
import gameone from "../assets/gameone.jpg";
import gametwo from "../assets/gametwo.jpg";
import gamethree from "../assets/gamethree.jpg";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Projects",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "3",
    title: "contact us",
    url: "#",
    onlyMobile: true,
    action: "openModal", // Add action to indicate modal opening
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Through innovative design, precision engineering, and collaborative teamwork, we turn game concepts into reality.";

export const collabContent = [
  {
    id: "0",
    title: "Innovative Planning",
    //text: collabText,
  },
  {
    id: "1",
    title: "Collaborative Development",
  },
  {
    id: "2",
    title: "Seamless Launch",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Unity",
    icon: unity,
    width: 34,
    height: 34,
  },
  {
    id: "1",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "2",
    title: "Blender",
    icon: blender,
    width: 34,
    height: 34,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "6",
    title: "Unreal",
    icon: unreal,
    width: 34,
    height: 34,
  },
  {
    id: "7",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
];

export const pricing = [
  {
    id: "0",
    image: gameone,
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    image: gametwo,
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",

    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    image: gamethree,
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Mobile Game Development",
    text: "Bringing innovative mobile gaming solutions to life, from concept to launch.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    detailedText:
      "Here is more detailed information about mobile game development, covering the process from idea generation, prototyping, testing, and launching to ensure the best user experience.",
  },
  {
    id: "1",
    title: "Augmented Reality",
    text: "Enhancing reality, one interaction at a time, with immersive AR experiences.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
    detailedText:
      "Here is more detailed information about mobile game development, covering the process from idea generation, prototyping, testing, and launching to ensure the best user experience.",
  },
  {
    id: "2",
    title: "Game Design",
    text: "Designing games that challenge, entertain, and connect.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    detailedText:
      "Here is more detailed information about mobile game development, covering the process from idea generation, prototyping, testing, and launching to ensure the best user experience.",
  },
  {
    id: "3",
    title: "Rapid Prototyping",
    text: "Fast-track your game development with rapid prototyping solutions.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
    detailedText:
      "Here is more detailed information about mobile game development, covering the process from idea generation, prototyping, testing, and launching to ensure the best user experience.",
  },
  {
    id: "4",
    title: "Virtual Reality",
    text: "Experience immersive storytelling through Virtual Reality.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    detailedText:
      "Here is more detailed information about mobile game development, covering the process from idea generation, prototyping, testing, and launching to ensure the best user experience.",
  },
  {
    id: "5",
    title: "Optimization and Bug Fixes",
    text: "Polishing game performance for a flawless user experience.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    detailedText:
      "Here is more detailed information about mobile game development, covering the process from idea generation, prototyping, testing, and launching to ensure the best user experience.",
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
