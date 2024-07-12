import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";


const QuizPage = (props) => {
    const location= useLocation();
    const quiz = location.state?.quiz;

   return (
    <div>
        <div className="card__title">{quiz.name}</div>
            <div className="card__description">{quiz.description}</div>
                <div className="card__category">
                {quiz.category_quiz.map((cq, index) => (
                    <span key={index}>{cq.category?.name}</span>
                ))}
                </div>
                <div className="card__difficulty">{quiz.difficulty?.name}</div>
                <div className="card__attempts">Attempts: {quiz.attempts ?? 0}</div>
        </div>
    );



}

export default QuizPage;

