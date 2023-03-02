"use client";
import "./globals.css"

import { fetchQuestionData, Question } from '@/utils';
import { useEffect, useState } from 'react';
import QuestionComponent from './components/QuestionComponent';

const QuestionsPage = () => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

    useEffect(() => {
        async function loadQuestion() {
            const data = await fetchQuestionData();
            setQuestions(data);
        }
        loadQuestion();
    }, []);

    const handleNextClick = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(index => index + 1);
        }
    };

    return (
        <>
            {questions && questions.length > 0 && (
                <div>
                    <QuestionComponent initialQuestion={questions[currentQuestionIndex]} />
                    <div className="flex justify-end">
                    <button onClick={handleNextClick} className=" py-2 px-4 bg-blue-500 text-white rounded-md disabled:bg-gray-400">Next</button>
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
