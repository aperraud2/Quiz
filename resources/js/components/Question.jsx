import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Answer from './Answer';

const Question = ({ quizId }) => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get(`/api/questions/${quizId}`);
                setQuestions(response.data);
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };

        fetchQuestions();
    }, [quizId]);

    return (
        <div>
            {questions.map((question) => (
                <div>
                <div className="question" key={question.id}>
                    {question.question}
                </div>
                {/* <div className="answer"><Answer/>

                </div> */}
                        </div>
            ))}
        </div>

    );
};

export default Question;
