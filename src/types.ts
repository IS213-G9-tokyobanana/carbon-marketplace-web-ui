export type Viewport = {
  xs?: undefined;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

export type NavItem = {
  title: string;
  url: string;
};

export type CleanerStepItem = {
  title: string;
  description: string;
  imgSrc: string;
};

export type SidebarConfig = {
  icon: JSX.Element;
  title: string;
  url?: string;
}[][];

export type IntrinsicHTML<T extends keyof JSX.IntrinsicElements> = Omit<
  JSX.IntrinsicElements[T],
  'ref'
>;

/**
 * API
 */
export namespace API {
  export type Project = {
    id: number;
    category: string;
    title: string;
    liked: boolean;
    tco2e: number;
    description: string;
    star: number;
  };

  export type Question = {
    id: number;
    imgSrc: '';
    imgAlt: string;
    question: string;
    description: string;
    answers: string[];
  };
}
