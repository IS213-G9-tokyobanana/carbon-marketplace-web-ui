export type NavItem = {
  title: string,
  url: string
}

export type CleanerStepItem = {
  title: string,
  description: string,
  imgSrc: string
}


/**
 * API
 */
export namespace API {
  export type Project = {
    id: number,
    category: string;
    title: string;
    liked: boolean;
    tco2e: string;
  }

  export type Question = {
    id: number,
    imgSrc: "",
    imgAlt: string,
    question: string,
    description: string,
    answers: string[]
  }
}
