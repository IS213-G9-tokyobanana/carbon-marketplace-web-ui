import { NextRouter } from 'next/router';

/**
 * @prettier
 */
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

export type LoginMenuItem = {
  title: string;
  user: API.User;
  redirect: string;
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
  export type User = 'buyer' | 'seller' | 'verifier';

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

  export type Status = 'pending' | 'verified' | 'rejected' | 'in-progress' | 'inactive';

  export type Milestone = {
    id: string;
    name: string;
    expectedCO2: number;
    currentCO2: number;
    lastUpdated: string;
    status: Status;
    dueDate: string;
    task: string;
  };

  export type VerifiableProject = {
    id: string;
    name: string;
    type: string;
    milestones: Milestone[];
    status: Status;
  };

  export type SellerProject = {
    id: string;
    type: string;
    name: string;
    description: string;
    milestones: Milestone[];
  };
}
