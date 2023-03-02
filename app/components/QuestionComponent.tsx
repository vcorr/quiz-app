// QuestionComponent.tsx
"use client";
import { useState, useEffect } from "react";
import { Question, QuestionChoice } from "../../utils";

interface Props {
    initialQuestion: Question; // optional initial value for the question state
}

export default function QuestionComponent({ initialQuestion }: Props) {
    
    const [question, setQuestion] = useState<Question>(initialQuestion);
    const [selectedAnswer, setSelectedAnswer] = useState<number>(-1);
    const [resultText, setResultText] = useState("");
    const [showResult, setShowResult] = useState(false);


    const handleChoiceChange = (choiceIndex: number) => {
        setSelectedAnswer(choiceIndex);
        setShowResult(false);
      };

      useEffect(() => {
        setQuestion(initialQuestion);
        setSelectedAnswer(-1);
        setResultText("");
        setShowResult(false);
      }, [initialQuestion]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isCorrect = question?.choices[selectedAnswer].correct;
        if (isCorrect) {
            setResultText("correct");
        } else {
            setResultText("incorrect");
        }

        setShowResult(true);
    };
    
    return (
        <div>
            <h2>{question.question}</h2>
            <form onSubmit={handleSubmit}>
                {question?.choices?.map((choice: QuestionChoice, index: number) => (
                    <div key={index}>
                        <label>
                            <input
                                type="radio"
                                value={choice.label}
                                checked={selectedAnswer === index}
                                onChange={() => handleChoiceChange(index)}
                            />
                            {choice.label}
                        </label>
                    </div>
                ))}
                <button type="submit">Submit</button>
            </form>
            {showResult && <p>{resultText}</p>}
        </div>
    );
}
