import { useEffect, useState } from "react";
import axios from "axios";


const QuizCard = () => {

    const [quizzes, setQuiz] = useState([]);
    const [difficulties, setDifficulty] = useState([]);
    const [categories, setCategory] = useState([]);
    const [featuredQuiz, setFeaturedQuiz] = useState([]);

    const loadQuizData = async () => {
        try {
            const response = await axios.get('/api/quizzes');
                setQuiz(response.data);

        } catch (error) {
            console.log(error);
        }
    }

    const loadDifficultyData = async () => {
        try {
            const response = await axios.get('/api/difficulties');
                setDifficulty(response.data);

        } catch (error) {
            console.log(error);
        }
    }
    const loadCategoryData = async () => {
        try {
            const response = await axios.get('/api/categories');
                setCategory(response.data);

        } catch (error) {
            console.log(error);
        }
    }

    const randomizedQuiz = (quizzes, count) => {
        if (quizzes.length < count) {
            return 
        }
        const quizzesCopy = [...quizzes];

        for (let i= quizzesCopy.length -1 ; i>0; i--) {
            const j = Math.floor(Math.random() * (i+1));
            [quizzesCopy[i], quizzesCopy[j]] = [quizzesCopy[j], quizzesCopy[i]];
        }
        return quizzesCopy.slice(0, count);
    }

    useEffect(() => {
        loadQuizData();
        loadDifficultyData();
        loadCategoryData();
    }, [])

    useEffect(() => {
        if (quizzes.length > 0) {
            setFeaturedQuiz(randomizedQuiz(quizzes, 3));
        }
    }, [quizzes]);

    return (
        <div>
            <div className="card">
                <div className="card__content">               
                        { 
                        featuredQuiz.map((quiz, index) => {
                            return (
                                  <div className="card__info" key={index}>
                                    <div className="card__title">{quiz.name}</div>
                                    <div className="card__description">{quiz.description}</div>
                                    <div className="card__category">{quiz.category_quiz.category?.name}</div>
                                    <div className="card__difficulty">{quiz.difficulty?.name}</div>
                                    <div className="card__attempts">Attempts: {quiz.attempts ?? 0}</div>
                                  </div>
                            )
                        })
                    }                                                         
                </div>
            </div>
        </div>
    )
}
    







export default QuizCard;