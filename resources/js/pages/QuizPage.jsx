import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Question from "../components/Question";
import axios from "axios";

const QuizPage = () => {
    const [randomQuiz, setRandomQuiz] = useState(null);
    const [quizStarted, setQuizStarted] = useState(false);
    const location = useLocation();
    const quiz = location.state?.quiz ?? randomQuiz;

    const fetchRandomQuiz = async () => {
        try {
            const response = await axios.get("/api/quizzes");
            const quizzes = response.data;
            if (quizzes.length > 0) {
                const randomQuiz =
                    quizzes[Math.floor(Math.random() * quizzes.length)];
                setRandomQuiz(randomQuiz);
            } else {
                console.error("No quizzes found.");
            }
        } catch (err) {
            console.error("Error fetching quizzes:", err);
        }
    };

    useEffect(() => {
        fetchRandomQuiz();
    }, [location.key]);

    useEffect(() => {
        const myButton = document.getElementById("play_btn");
        if (myButton) {
            myButton.className = "play__btn_inactive";
        }
    }, [quiz]);

    const handleButtonClick = () => {
        const myButton = document.getElementById("play_btn");
        setQuizStarted(true);
        if (myButton) {
            myButton.className = "play__btn_active";
        }
    };

    return (
        <div>
            {quiz ? (
                <div className="quiz__page">
                    <div className="quiz__header">
                        <div className="quiz__data">
                            <div className="quiz__title">{quiz.name}</div>
                            <div className="quiz__description">
                                {quiz.description}
                            </div>
                            <div className="quiz__metadata">
                                <div className="quiz__category">
                                    {quiz.category_quiz?.map((cq, index) => (
                                        <span key={index}>
                                            {cq.category?.name}
                                        </span>
                                    ))}
                                </div>
                                <div className="quiz__difficulty">
                                    {quiz.difficulty?.name}
                                </div>
                            </div>
                        </div>
                        <div className="quiz__image">
                            <img
                                src="https://placehold.co/640x360"
                                alt="placeholder"
                            />
                        </div>
                    </div>
                    <div className="quiz__play">
                        <button
                            id="play_btn"
                            className="play__btn_inactive"
                            onClick={handleButtonClick}
                        >
                            Start Quiz
                        </button>
                    </div>

                    {quizStarted && <Question quizId={quiz.id} />}
                </div>
            ) : (
                <p>loading</p>
            )}
        </div>
    );
};

export default QuizPage;
