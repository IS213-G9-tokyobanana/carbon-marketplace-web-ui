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
export type Project = {
  id: number,
  category: string;
  title: string;
  liked: boolean;
  tco2e: string;
}