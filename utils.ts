// utils.ts

export interface QuestionChoice {
  label: string;
  correct: boolean;
}

export interface Question {
  question: string;
  choices: QuestionChoice[];
  answer: number;
}

