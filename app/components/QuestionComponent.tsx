// QuestionComponent.tsx
"use client";
import { useState, useEffect } from "react";
import { Question, QuestionChoice } from "../../utils";
import { useGlobalContext } from "../context/store";

interface Props {
    onUserAnswer: Function;
    initialQuestion: Question; // optional initial value for the question state
}

export default function QuestionComponent({ onUserAnswer, initialQuestion }: Props) {

    const { score, setScore } = useGlobalContext();
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
            setScore(score + 1);
        } else {
            setResultText("incorrect");
            setScore(score - 1);

        }

        setShowResult(true);
        onUserAnswer(isCorrect);
    };

    return (
        <div className="bg-white rounded-md shadow p-6">
            <h2 className="text-xl font-medium mb-2">{question.question}</h2>
            <form onSubmit={handleSubmit}>
                {question?.choices?.map((choice: QuestionChoice, index: number) => (
                    <div key={index}>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                value={choice.label}
                                checked={selectedAnswer === index}
                                onChange={() => handleChoiceChange(index)}
                                className="form-radio h-5 w-5 text-green-600"
                            />
                            <span className="ml-2 text-gray-700">{choice.label}</span>
                        </label>
                    </div>
                ))}
                <button disabled={selectedAnswer === -1} type="submit" className=" disabled:opacity-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Submit</button>
            </form>
            {showResult && <p className={`${resultText.includes('incorrect') ? 'text-red-600' : 'text-green-600'} mt-4`}>{resultText}</p>}
        </div>
    );
}
