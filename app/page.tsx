"use client";
import "./globals.css"

import { fetchQuestionData, Question } from '@/utils';
import { useEffect, useState } from 'react';
import QuestionComponent from './components/QuestionComponent';
import { useGlobalContext } from "./context/store";
import TopBar from "./components/TopBar";

const QuestionsPage = () => {
    const { score, setScore } = useGlobalContext();
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

    useEffect(() => {
        async function loadQuestion() {
            const data = await fetchQuestionData();
            setQuestions(data);
        }
        loadQuestion();
        setScore(0);
    }, []);

    const handleNextClick = (correct: boolean) => {
        setTimeout(() => {
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(index => index + 1);
            }
        }, 1000);
    };


    return (
        <>
            {questions && questions.length > 0 && (
                <div>
                    <TopBar score={score} />
                    <QuestionComponent onUserAnswer={handleNextClick} initialQuestion={questions[currentQuestionIndex]} />
                    <div className="flex justify-end">
                    </div>
                </div>
            )}
            {!questions || questions.length === 0 && (
                <p>Loading...</p>
            )}
        </>
    );
};

export default QuestionsPage;
