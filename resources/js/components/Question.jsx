import React, { useEffect, useState } from "react";
import axios from "axios";
import Answer from "./Answer";

const Question = ({ quizId }) => {
    const [questions, setQuestions] = useState([]);
    const [inputValues, setInputValues] = useState({});
    const [confirmationPopup, setConfirmationPopup] = useState(false);

    const fetchQuestions = async () => {
        try {
            const response = await axios.get(`/api/questions/${quizId}`);
            setQuestions(response.data);
        } catch (error) {
            console.error("Error fetching questions:", error);
        }
    };

    useEffect(() => {
        fetchQuestions();
    }, [quizId]);

    const makeInputGreen = (e) => {
        const { name, value } = e.target;
        setInputValues({
            ...inputValues,
            [name]: value
        });
    };

    const handleFinishClick = () => {
        setConfirmationPopup(true);
    };

    const confirmFinishYes = () => {
        setConfirmationPopup(false);
        // add c ode here
    };

    const confirmFinishNo = () => {
        setConfirmationPopup(false);
    }

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
                                <Answer questionId={question.id} />
                            </div>
                        ) : question.type === 2 ? (
                            <div>
                                <input
                                    className="question__input"
                                    type="text"
                                    name={`answerInput-${question.id}`}
                                    id={`answerInput-${question.id}`}
                                    value={inputValues[`answerInput-${question.id}`] || ""}
                                    onChange={makeInputGreen}
                                />
                            </div>
                        ) : null}
                    </div>
                </div>
            ))}
            <div className="finish__container">
                <button className="finish__button" onClick={handleFinishClick}>Finish Quiz</button>
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
        </div>
    );
};

export default Question;
