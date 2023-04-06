export type Milestone = {
  name: string;
  amount: string;
  dueDate: Date | null;
};

export type FormSchema = {
  description: string;
  milestones: Milestone[];
};
