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

export async function fetchQuestionData(): Promise<Question[]> {
  const response = await fetch("/questions.json");
  const data = await response.json();
  return data as Question[];
}
