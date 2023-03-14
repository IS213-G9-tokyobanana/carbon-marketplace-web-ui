import locale from "locale";
import { CleanerStepItem } from "types";

const cleanerSteps: CleanerStepItem[] = [
  {
    title: locale.landing.cleanerTomorrow.steps[0].title,
    description: locale.landing.cleanerTomorrow.steps[0].description,
    imgSrc: ""
  },
  {
    title: locale.landing.cleanerTomorrow.steps[1].title,
    description: locale.landing.cleanerTomorrow.steps[1].description,
    imgSrc: ""
  },
  {
    title: locale.landing.cleanerTomorrow.steps[2].title,
    description: locale.landing.cleanerTomorrow.steps[2].description,
    imgSrc: ""
  }
];

const exploreProjects = {
  maxTitleLength: 25
}

export default {
  cleanerSteps,
  exploreProjects
}