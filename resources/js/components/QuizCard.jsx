import { useEffect, useState } from "react";
import axios from "axios";


const QuizCard = () => {

    const [quizzes, setQuiz] = useState([]);
    const [difficulties, setDifficulty] = useState([]);
    const [categories, setCategory] = useState([]);

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


    useEffect(() => {
        loadQuizData();
        loadDifficultyData();
        loadCategoryData();

    }, [])

    return (
        <div>
            <div className="card">
                <div className="card-content">
                    {                    
                        quizzes.map(quiz => {
                            return (
                                  <div>
                                    <div className="card-title">{quiz.name}</div>
                                    <div className="card-desc">{quiz.description}</div>
                                    <div className="category">{quiz.category_quiz.category.name}</div>
                                    <div className="difficulty">{quiz.difficulty}</div>
                                    <div className="attempts">Attempts: {quiz.attempts ?? 0}</div>
                                </div>

                                        
                                )
                            }
                            )
                        }
                    
                </div>
            </div>

        </div>
            )

    

}





export default QuizCard;