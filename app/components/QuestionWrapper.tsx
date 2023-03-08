"use client";
import { Question } from '@/utils';
import { useState } from 'react';
import QuestionComponent from './QuestionComponent';
import { useGlobalContext } from "../context/store";

interface Props {
    Questions: Array<Question>;
}
const QuestionWrapper = ({ Questions }: Props) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

    const handleNextClick = (correct: boolean) => {
        setTimeout(() => {
            if (currentQuestionIndex < Questions.length - 1) {
                setCurrentQuestionIndex(index => index + 1);
            }
        }, 1000);
    };

    return (
        <>
            {Questions && Questions.length > 0 && (
                <div>
                    <QuestionComponent onUserAnswer={handleNextClick} initialQuestion={Questions[currentQuestionIndex]} />
                    <div className="flex justify-end">
                    </div>
                </div>
            )}
            {!Questions || Questions.length === 0 && (
                <p>Loading...</p>
            )}
        </>
    );
};

export default QuestionWrapper;
