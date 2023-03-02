"use client";
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
            <h1>Questions Page</h1>
            {questions && questions.length > 0 && (
                <>
                    <QuestionComponent initialQuestion={questions[currentQuestionIndex]}  />
                    <button onClick={handleNextClick}>Next</button>
                </>
            )}
            {!questions || questions.length === 0 && (
                <p>Loading...</p>
            )}
        </>
    );
};

export default QuestionsPage;
