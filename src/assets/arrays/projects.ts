import project1 from "../images/projects/project1.webp";
import project2 from "../images/projects/project2.webp";
import project3 from "../images/projects/project3.webp";
import project5 from "../images/projects/project5.webp";
import project6 from "../images/projects/project6.webp";
import project7 from "../images/projects/project7.webp";
import project8 from "../images/projects/project8.webp";
import project11 from "../images/projects/project11.webp";
import project12 from "../images/projects/project12.webp";
import project13 from "../images/projects/project13.webp";
import project14 from "../images/projects/project14.webp";
import project15 from "../images/projects/project15.webp";
import project16 from "../images/projects/project16.webp";
import FoodMart from "../images/projects/FoodMart.webp";
import FrightLand from "../images/projects/FrightLand.webp";
import HooBank from "../images/projects/HooBank.webp";
import MovieWeb from "../images/projects/MovieWeb.webp";
import Luxury from "../images/projects/Luxury.webp";
import Nava from "../images/projects/Nava.webp";
import FurniroShop from "../images/projects/FurniroShop.webp";

import geshop1 from "../images/projects/geshop/1.webp";
import geshop2 from "../images/projects/geshop/2.webp";
import geshop3 from "../images/projects/geshop/3.webp";
import geshop4 from "../images/projects/geshop/4.webp";
import geshop5 from "../images/projects/geshop/5.webp";
import geshop6 from "../images/projects/geshop/6.webp";
import geshop7 from "../images/projects/geshop/7.webp";
import geshop8 from "../images/projects/geshop/8.webp";
import geshop9 from "../images/projects/geshop/9.webp";
import geshop10 from "../images/projects/geshop/10.webp";
import geshop11 from "../images/projects/geshop/11.webp";

import camp1 from "../images/projects/camp/1.webp";
import camp2 from "../images/projects/camp/2.webp";
import camp3 from "../images/projects/camp/3.webp";
import camp4 from "../images/projects/camp/4.webp";
import camp5 from "../images/projects/camp/5.webp";
import camp6 from "../images/projects/camp/6.webp";
// PType = 0 დიზაინი
// PType = 1 საიტი
// PType = 2 ორივვე
const ProjectsArray = [
  {
    PName: "MODERN SCROLL",
    PLangs: ["FIGMA"],
    PType: 0,
    ProjectId: 1,
    image: project1,
    LiveLink: "",
    GitLink: "",
    Team: 0,
    showImages: [project1],
    fullImage: project1,
  },
  {
    PName: "DASHBOARD",
    PLangs: ["FIGMA"],
    PType: 0,
    ProjectId: 2,
    image: project2,
    LiveLink: "",
    GitLink: "",
    Team: 0,
    showImages: [project2],
    fullImage: project2,
  },
  {
    PName: "GESHOP",
    PLangs: [
      "FIGMA",
      "HTML",
      "CSS",
      "SCSS",
      "BOOTSTRAP",
      "JAVASCRIPT",
      "JQUERY",
      "PHP",
      "MYSQL",
    ],
    PType: 2,
    ProjectId: 3,
    image: geshop1,
    LiveLink: "",
    GitLink: "",
    Team: 0,
    showImages: [
      geshop1,
      geshop2,
      geshop3,
      geshop4,
      geshop5,
      geshop6,
      geshop7,
      geshop8,
      geshop9,
      geshop10,
      geshop11,
    ],
    fullImage: geshop1,
  },
  // {
  //   PName: "GAME SHOP",
  //   PLangs: ["FIGMA"],
  //   PType: 0,
  //   ProjectId: 4,
  //   image: project4,
  //   LiveLink: "",
  //   GitLink: "",
  //   Team: 0,
  //   showImages:[""]

  // },
  {
    PName: "CAMP WEB",
    PLangs: ["SCSS", "REACT", "TYPESCRIPT"],
    PType: 1,
    ProjectId: 5,
    image: project5,
    LiveLink: "https://lukafexshvelashvili.github.io/CampWebsite-React-TS/",
    GitLink: "https://github.com/LukaFexshvelashvili/CampWebsite-React-TS",
    Team: 0,
    showImages: [project5, camp1, camp2, camp3, camp4, camp5, camp6],
    fullImage: "",
  },
  {
    PName: "BOOK STORE",
    PLangs: ["SCSS", "REACT", "TYPESCRIPT", "VITE"],
    PType: 1,
    ProjectId: 6,
    image: project6,
    LiveLink: "https://lukafexshvelashvili.github.io/BookStoreWebsite/",
    GitLink: "https://github.com/LukaFexshvelashvili/BookStoreWebsite",
    Team: 0,
    showImages: [project6],
    fullImage: "",
  },
  {
    PName: "JAEGAR RESTO",
    PLangs: ["SCSS", "REACT", "TYPESCRIPT", "VITE"],
    PType: 1,
    ProjectId: 7,
    image: project7,
    LiveLink: "https://moderndesigners.github.io/Food-Restaurant/",
    GitLink: "https://github.com/ModernDesigners/Food-Restaurant",
    Team: 1,
    showImages: [project7],
    fullImage: "",
  },
  {
    PName: "MODERN WATCH",
    PLangs: ["FIGMA", "SCSS", "REACT", "TYPESCRIPT", "VITE"],
    PType: 2,
    ProjectId: 8,
    image: project8,
    LiveLink: "https://moderndesigners.github.io/ModernWatch/",
    GitLink: "https://github.com/ModernDesigners/ModernWatch",
    Team: 1,
    showImages: [project8],
    fullImage: "",
  },
  {
    PName: "COLAB WEB",
    PLangs: ["HTML", "CSS", "SCSS", "BOOTSTRAP", "JAVASCRIPT", "JQUERY"],
    PType: 1,
    ProjectId: 11,
    image: project11,
    LiveLink: "https://lukafexshvelashvili.github.io/ColabWebsite/",
    GitLink: "https://github.com/LukaFexshvelashvili/ColabWebsite",
    Team: 0,
    showImages: [project11],
    fullImage: "",
  },
  // {
  //   PName: "REBOUND ROLEPLAY",
  //   PLangs: [
  //     "FIGMA",
  //     "HTML",
  //     "CSS",
  //     "SCSS",
  //     "BOOTSTRAP",
  //     "JAVASCRIPT",
  //     "JQUERY",
  //     "PHP",
  //     "MYSQL",
  //   ],
  //   PType: 2,
  //   ProjectId: 9,
  //   image: project9,
  //   LiveLink: "https://reboundrp.net",
  //   GitLink: "",
  //   Team: 0,
  //   showImages:[""]

  // },
  // {
  //   PName: "MODERN DESIGN",
  //   PLangs: [
  //     "FIGMA",
  //     "HTML",
  //     "CSS",
  //     "SCSS",
  //     "BOOTSTRAP",
  //     "JAVASCRIPT",
  //     "JQUERY",
  //   ],
  //   PType: 2,
  //   ProjectId: 10,
  //   image: project10,
  //   LiveLink: "",
  //   GitLink: "",
  //   Team: 0,
  //  showImages:[""]

  // },
  {
    PName: "COELUSO WEB",
    PLangs: ["HTML", "CSS", "SCSS", "BOOTSTRAP", "JAVASCRIPT", "JQUERY"],
    PType: 1,
    ProjectId: 12,
    image: project12,
    LiveLink: "https://lukafexshvelashvili.github.io/CoelusoWebsite/",
    GitLink: "https://github.com/LukaFexshvelashvili/CoelusoWebsite",
    Team: 0,
    showImages: [project12],
    fullImage: "",
  },
  {
    PName: "AUTO SERVICE",
    PLangs: ["FIGMA"],
    PType: 0,
    ProjectId: 13,
    image: project13,
    LiveLink: "",
    GitLink: "",
    Team: 0,
    showImages: [project13],
    fullImage: "",
  },
  {
    PName: "BRAVAY",
    PLangs: ["SCSS", "REACT", "TYPESCRIPT", "VITE"],
    PType: 1,
    ProjectId: 14,
    image: project14,
    LiveLink: "https://lukafexshvelashvili.github.io/NFT-Landing-Page/",
    GitLink: "https://github.com/LukaFexshvelashvili/NFT-Landing-Page",
    Team: 0,
    showImages: [project14],
    fullImage: "",
  },
  {
    PName: "EVENTOY",
    PLangs: ["SCSS", "REACT", "TYPESCRIPT", "VITE"],
    PType: 1,
    ProjectId: 15,
    image: project15,
    LiveLink: "https://lukafexshvelashvili.github.io/Eventoy/",
    GitLink: "https://github.com/LukaFexshvelashvili/Eventoy",
    Team: 0,
    showImages: [project15],
    fullImage: "",
  },
  {
    PName: "RATIONS",
    PLangs: ["SCSS", "REACT", "TYPESCRIPT", "VITE"],
    PType: 1,
    ProjectId: 16,
    image: project16,
    LiveLink: "https://lukafexshvelashvili.github.io/Rations/",
    GitLink: "https://github.com/LukaFexshvelashvili/Rations",
    Team: 0,
    showImages: [project16],
    fullImage: "",
  },
  //
  //
  //
  //
  {
    PName: "MovieWeb",
    PLangs: ["REACT", "SCSS"],
    PType: 1,
    ProjectId: 50,
    image: MovieWeb,
    LiveLink: "https://atukajikuridze.github.io/MovieWeb/",
    GitLink: "https://github.com/AtukaJikuridze/movieweb",
    Team: 0,
    showImages: [MovieWeb],
    fullImage: "",
  },
  {
    PName: "HooBank",
    PLangs: ["REACT", "SCSS"],
    PType: 1,
    ProjectId: 51,
    image: HooBank,
    LiveLink: "https://atukajikuridze.github.io/hoobank/",
    GitLink: "https://github.com/AtukaJikuridze/HooBank",
    Team: 0,
    showImages: [HooBank],
    fullImage: "",
  },
  {
    PName: "FrightLand",
    PLangs: ["HTML", "CSS", "JAVASCRIPT", "JQUERY"],
    PType: 1,
    ProjectId: 52,
    image: FrightLand,
    LiveLink: "https://atukajikuridze.github.io/FrightLand/",
    GitLink: "https://github.com/AtukaJikuridze/FrightLand",
    Team: 0,
    showImages: [FrightLand],
    fullImage: "",
  },
  {
    PName: "FoodMart",
    PLangs: ["REACT", "SCSS"],
    PType: 1,
    ProjectId: 53,
    image: FoodMart,
    LiveLink: "https://atukajikuridze.github.io/FoodMart/",
    GitLink: "https://github.com/AtukaJikuridze/FoodMart",
    Team: 0,
    showImages: [FoodMart],
    fullImage: "",
  },

  {
    PName: "Luxury",
    PLangs: ["HTML", "SCSS", "JQUERY"],
    PType: 1,
    ProjectId: 56,
    image: Luxury,
    LiveLink: "https://atukajikuridze.github.io/Luxury/",
    GitLink: "https://github.com/AtukaJikuridze/Luxury",
    Team: 0,
    showImages: [Luxury],
    fullImage: "",
  },
  {
    PName: "NAVA",
    PLangs: ["HTML", "SCSS", "JQUERY"],
    PType: 1,
    ProjectId: 57,
    image: Nava,
    LiveLink: "https://atukajikuridze.github.io/Nava/",
    GitLink: "https://github.com/AtukaJikuridze/Nava",
    Team: 0,
    showImages: [Nava],
    fullImage: "",
  },
  {
    PName: "FurniroShop",
    PLangs: ["REACT", "SCSS"],
    PType: 1,
    ProjectId: 59,
    image: FurniroShop,
    LiveLink: "https://atukajikuridze.github.io/FurniroShop/",
    GitLink: "https://github.com/AtukaJikuridze/FurniroShop",
    Team: 0,
    showImages: [FurniroShop],
    fullImage: "",
  },
];

export default ProjectsArray;
