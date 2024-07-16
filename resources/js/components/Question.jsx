import React, { useEffect, useState } from "react";
import axios from "axios";
import Answer from "./Answer";

const Question = ({ quizId }) => {
    const [questions, setQuestions] = useState([]);
    const [inputValues, setInputValues] = useState({});
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [confirmationPopup, setConfirmationPopup] = useState(false);
    const [score, setScore] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchQuestions = async () => {
        try {
            const response = await axios.get(`/api/questions/${quizId}`);
            setQuestions(response.data);
            setLoading(false);
        } catch (error) {
            setError("Error fetching questions");
            setLoading(false);
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }
    };

    useEffect(() => {
        fetchQuestions();
    }, [quizId]);

    const handleSelectAnswer = (questionId, answerId) => {
        setSelectedAnswers((prevSelectedAnswers) => ({
            ...prevSelectedAnswers,
            [questionId]: answerId,
        }));
    };

    const makeInputGreen = (e) => {
        const { name, value } = e.target;
        setInputValues({
            ...inputValues,
            [name]: value,
        });
    };

    const handleFinishClick = () => {
        setConfirmationPopup(true);
    };

    const confirmFinishYes = async () => {
        setConfirmationPopup(false);

        let correctAnswers = 0;

        try {
            const response = await axios.get(`/api/quiz/${quizId}`);
            const quizWithAnswers = response.data;
            console.log(quizWithAnswers);

            for (const question of questions) {
                if (question.type === 1) {
                    const selectedAnswerId = selectedAnswers[question.id];
                    if (selectedAnswerId) {
                        quizWithAnswers.questions.forEach((q) => {
                            if (q.id == question.id) {
                                q.answers.forEach((a) => {
                                    if (
                                        selectedAnswerId == a.id &&
                                        a.correct == 1
                                    ) {
                                        correctAnswers++;
                                    }
                                });
                            }
                        });
                    }
                } else if (question.type === 2) {
                    const inputAnswer =
                        inputValues[`answerInput-${question.id}`];
                    if (inputAnswer) {
                        quizWithAnswers.questions.forEach((q) => {
                            if (q.id == question.id) {
                                q.answers.forEach((a) => {
                                    if ( a.name == inputAnswer ) 
                                        {
                                        correctAnswers++;
                                    }
                                });
                            }
                        });
                    }
                }
            }
            
            setScore(correctAnswers);
        } catch (error) {
            console.log(error);
        }

       
    };

    const confirmFinishNo = () => {
        setConfirmationPopup(false);
    };

    if (loading) return <p>Loading questions...</p>;
    if (error) return <p>{error}</p>;

    useEffect(() => {
        if (score) {
            // saving of the score
        }
    }, [score])

    return (
        <div>
            {questions.map((question) => (
                <div className="question__container" key={question.id}>
                    <div>
                        <div className="question__quiz">
                            {question.question}
                        </div>
                        {question.type === 1 ? (
                            <div>
                                <Answer
                                    questionId={question.id}
                                    onSelectAnswer={handleSelectAnswer}
                                />
                            </div>
                        ) : question.type === 2 ? (
                            <div>
                                <input
                                    className="question__input"
                                    type="text"
                                    name={`answerInput-${question.id}`}
                                    id={`answerInput-${question.id}`}
                                    value={
                                        inputValues[
                                            `answerInput-${question.id}`
                                        ] || ""
                                    }
                                    onChange={makeInputGreen}
                                />
                            </div>
                        ) : null}
                    </div>
                </div>
            ))}
            <div className="finish__container">
                <button className="finish__button" onClick={handleFinishClick}>
                    Finish Quiz
                </button>
            </div>
            {confirmationPopup && (
                <div className="finish__popup">
                    <div className="finish__popup__content">
                        <p>Are you sure?</p>
                        <button onClick={confirmFinishYes}>Yes</button>
                        <button onClick={confirmFinishNo}>No</button>
                    </div>
                </div>
            )}
            {score !== null && (
                <div className="score__container">
                    <p>
                        Your score: {score} / {questions.length}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Question;
