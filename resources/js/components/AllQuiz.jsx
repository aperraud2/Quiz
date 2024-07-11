import { useEffect, useState } from "react";
import QuizCard from './QuizCard'
import QuizSearch from './QuizSearch'
import axios from "axios";


const AllQuiz = () => {

    const [quizzes, setQuiz] = useState([]);


    const loadQuizData = async () => {
        try {
            const response = await axios.get('/api/quizzes');
            setQuiz(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadQuizData();
    }, []);

    return (
        <div>
            <h2>All Quiz</h2>
            <div className='allquiz'>
                    <QuizSearch></QuizSearch>
                <div className="quizlist">
                    {quizzes.map((quiz, index) => (
                        <QuizCard key={index} quiz={quiz} />
                    ))}
                </div>
            </div>
        </div>
    )
};

export default AllQuiz;

