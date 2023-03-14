import { API } from "types";

function getProjects(): API.Project[] {
  return [
    {
      id: 1,
      category: "Popular",
      title: "test loong title",
      liked: false,
      tco2e: "8 / 10"
    },
    {
      id: 2,
      category: "Popular",
      title: "test loong title loong tittle",
      liked: false,
      tco2e: "8 / 10"
    },
    {
      id: 3,
      category: "Popular",
      title: "test loong title",
      liked: false,
      tco2e: "8 / 10"
    },
    {
      id: 4,
      category: "Popular",
      title: "test loong title",
      liked: false,
      tco2e: "8 / 10"
    },
    {
      id: 5,
      category: "Popular",
      title: "test loong title",
      liked: false,
      tco2e: "8 / 10"
    },
    {
      id: 6,
      category: "Popular",
      title: "test loong title",
      liked: false,
      tco2e: "8 / 10"
    },
    {
      id: 7,
      category: "Community Projects",
      title: "test loong title",
      liked: false,
      tco2e: "8 / 10"
    },
    {
      id: 8,
      category: "Community Projects",
      title: "test loong title",
      liked: false,
      tco2e: "8 / 10"
    },
    {
      id: 9,
      category: "Regional Projects",
      title: "test loong title",
      liked: false,
      tco2e: "8 / 10"
    },
    {
      id: 10,
      category: "Enterprise",
      title: "test loong title",
      liked: false,
      tco2e: "8 / 10"
    }
  ];
}

function getQuestions(): API.Question[] {
  return [
    {
      id: 1,
      imgSrc: "",
      imgAlt: "Country",
      question: `
        Start by calculating your footprint. What country 
        do you live in?
      `,
      description: `
        Entering your country helps us begin the calculation with a 
        baseline for every category
      `,
      answers: ["Singapore", "Malaysia", "Japan", "Custom"]
    },
    {
      id: 2,
      imgSrc: "",
      imgAlt: "Gas usage",
      question: "How much natural gas do you use?",
      description: `
        Most bills for natural gas should include the amount you used
        that month. You can divide the total by the number of people
        who share that bill.
      `,
      answers: ["Little to None", "Average", "A Lot", "Custom"]
    },
    {
      id: 3,
      imgSrc: "",
      imgAlt: "Pet",
      question: "Sample long title",
      description: `
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, 
        soluta sunt ipsa recusandae porro fugit quae obcaecati? Pariatur, 
        nobis vitae.
      `,
      answers: ["Little to None", "Average", "Apple", "Custom"]
    },
    {
      id: 4,
      imgSrc: "",
      imgAlt: "Clothes",
      question: "Sample long title",
      description: `
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, 
        soluta sunt ipsa recusandae porro fugit quae obcaecati? Pariatur, 
        nobis vitae.
      `,
      answers: ["Little to None", "Average", "Orange", "Custom"]
    },
    {
      id: 5,
      imgSrc: "",
      imgAlt: "Apple",
      question: "Sample long title (apple)",
      description: `
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, 
        soluta sunt ipsa recusandae porro fugit quae obcaecati? Pariatur, 
        nobis vitae.
      `,
      answers: ["Little to None", "Average", "Sausage", "Custom"]
    },
    {
      id: 6,
      imgSrc: "",
      imgAlt: "Watermelon",
      question: "Sample long title (apple)",
      description: `
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, 
        soluta sunt ipsa recusandae porro fugit quae obcaecati? Pariatur, 
        nobis vitae.
      `,
      answers: ["Little to None", "Average", "Sausage", "Yellow"]
    },
  ]
}

export default {
  getProjects,
  getQuestions
}