import React, { useEffect, useState } from "react";
import axios from "axios";

const Answer = ({ questionId, onSelectAnswer }) => {
    const [answers, setAnswers] = useState([]);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const propositionLetters = ["A", "B", "C", "D"];

    const fetchAnswers = async () => {
        try {
            const response = await axios.get(`/api/answers/${questionId}`);
            const fetchedAnswers = response.data.map((answer, index) => ({
                ...answer,
                letter: propositionLetters[index],
            }));
            setAnswers(fetchedAnswers);
            setLoading(false);
        } catch (error) {
            setError("Error fetching answers");
            setLoading(false);
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }
    };

    useEffect(() => {
        fetchAnswers();
    }, [questionId]);

    if (loading) return <p>Loading answers...</p>;
    if (error) return <p>{error}</p>;

    const selectAnswer = (answerId) => {
        const newSelectedAnswer = selectedAnswer === answerId ? null : answerId;
        setSelectedAnswer(newSelectedAnswer);
        onSelectAnswer(questionId, newSelectedAnswer);
    };

    return (
        <div>
            <div className="answer__container">
                {answers.map((answer) => (
                    <button
                        className={`answer__button ${selectedAnswer === answer.id ? 'selected' : ''}`}
                        key={answer.id}
                        onClick={() => selectAnswer(answer.id)}
                    >
                        <div className="answer__letter">{answer.letter}. </div>
                        <div className="answer__text"> {answer.name}</div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Answer;
