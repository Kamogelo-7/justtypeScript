export const logger = (message: string) => {
  console.log(message);
};

export type Query = [
  {
    type: boolean;
    description: string;
  },
  {
    type: string;
    description: string;
    options: string[];
  }
];
