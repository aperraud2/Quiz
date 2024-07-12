import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";


const QuizPage = () => {
    const [randomQuiz, setRandomQuiz] = useState(null);
    const location = useLocation();
    const quiz = location.state?.quiz ?? randomQuiz; 

  const fetchRandomQuiz = async () => {
    try {
        const response = await axios.get('/api/quizzes'); 
        const quizzes = response.data;
        if (quizzes.length > 0) {
            const randomQuiz = quizzes[Math.floor(Math.random() * quizzes.length)];

            console.log('randomQuiz', randomQuiz);
            console.log('typeof randomQuiz', typeof randomQuiz);
            setRandomQuiz(randomQuiz);
        } else {
            console.error('No quizzes found.');
        }
    } catch (err) {
        console.error('Error fetching quizzes:', err);
    }
};

    useEffect(() => {
        fetchRandomQuiz();
    }, [location.key]);

   return (

<div>
    {quiz ?  
    <div>
        <div className="card__title">{quiz.name}</div>
        <div className="card__description">{quiz.description}</div>
            <div className="card__category">
            {quiz.category_quiz?.map((cq, index) => (
                <span key={index}>{cq.category?.name}</span>
            ))}
            </div>
            <div className="card__difficulty">{quiz.difficulty?.name}</div>
            <div className="card__attempts">Attempts: {quiz.attempts ?? 0}</div>
    </div> 
    : <p>loading</p>}

</div>
    );



}

export default QuizPage;

