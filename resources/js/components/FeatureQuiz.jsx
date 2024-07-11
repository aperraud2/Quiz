import { useEffect, useState } from "react";
import QuizCard from './QuizCard'
import axios from "axios";

const FeatureQuiz = () => {
    
    const [quizzes, setQuiz] = useState([]);

    const loadQuiz = async () => {
        try {
            const response = await axios.get('/api/quizzes');
                setQuiz(response.data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadQuiz();
    }, [])
    
    return (
    <div>
        <h2>Feature Quiz</h2>
            <div className='feature__quiz'>
                {quizzes.map((quiz, index) => (
                    <QuizCard key={index} quiz={quiz} />
                ))}
            </div>
    </div>
    )



}



export default FeatureQuiz;


