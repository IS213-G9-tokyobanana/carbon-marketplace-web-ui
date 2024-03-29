export type Milestone = {
  name: string;
  amt: string;
  date: Date | null;
};

export type FormSchema = {
  title: string;
  type: string;
  description: string;
  milestones: Milestone[];
};
