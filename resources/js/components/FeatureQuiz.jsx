import { useEffect, useState } from "react";
import QuizCard from './QuizCard';
import axios from "axios";

const FeatureQuiz = () => {
    const [quizzes, setQuiz] = useState([]);
    const [featuredQuiz, setFeaturedQuiz] = useState([]);

    const loadQuizData = async () => {
        try {
            const response = await axios.get('/api/quizzes');
            setQuiz(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const randomizedQuiz = (quizzes, count) => {
        if (quizzes.length < count) {
            return quizzes; // Return all quizzes if there are less than 'count'
        }
        const quizzesCopy = [...quizzes];

        for (let i = quizzesCopy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [quizzesCopy[i], quizzesCopy[j]] = [quizzesCopy[j], quizzesCopy[i]];
        }
        return quizzesCopy.slice(0, count);
    }

    useEffect(() => {
        loadQuizData();
    }, []);

    useEffect(() => {
        if (quizzes.length > 0) {
            setFeaturedQuiz(randomizedQuiz(quizzes, 4));
        }
    }, [quizzes]);
    
    return (
        <div>
            <h2>Featured Quiz</h2>
            <div className='quizlist'>
                {featuredQuiz.map((quiz, index) => (
                    <QuizCard key={index} quiz={quiz} />
                ))}
            </div>
        </div>
    );
}

export default FeatureQuiz;