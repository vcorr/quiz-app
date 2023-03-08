import "./globals.css"

import TopBar from "./components/TopBar";
import clientPromise from "./lib/mongo";
import QuestionWrapper from "./components/QuestionWrapper";
import { Question } from "@/utils";


const MainPage = async () => {

    const client = await clientPromise;
    const collection = client.db('quiz-app').collection<Question>('questions');
    const questions = await collection.find().toArray();
    console.log("questions", questions);

    return (
        <div>
            <TopBar />
            <QuestionWrapper Questions={questions} />
        </div>
    );
};

export default MainPage;
