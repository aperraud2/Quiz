import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const Answer = ({ questionId }) => {
    const [answers, setAnswers] = useState([]);
    const propositionLetters = ["A", "B", "C", "D"];

    const fetchAnswers = async () => {
        try {
            const response = await axios.get(`/api/answers/${questionId}`);
            const fetchedAnswers = response.data.map((answer, index) => ({
                ...answer,
                letter: propositionLetters[index],
            }));
            setAnswers(fetchedAnswers);
        } catch (error) {
            console.error("Error fetching answers:", error);
        }
    };

    useEffect(() => {
        fetchAnswers();
    }, [questionId]);

    return (
        <div>
            <div className="answer__container">
                <form>
                {answers.map((answer) => (
                    <label key={answer.id} className="answer__label">
                        <input
                            type="radio"
                            name="answers"
                            value={answer.id}
                            className="answer__radio"
                        />
                        <div className="answer__letter">{answer.letter}. </div>
                        <div className="answer__text">{answer.name}</div>
                    </label>
                ))}
                </form>
            </div>
        </div>
    );
};

export default Answer;
