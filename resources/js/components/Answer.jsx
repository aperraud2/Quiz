import React, { useEffect, useState } from "react";
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
                {answers.map((answer) => (
                    <button className="answer__button" key={answer.id}>
                        <div className="answer__letter">{answer.letter}. </div>
                        <div className="answer__text"> {answer.name}</div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Answer;
