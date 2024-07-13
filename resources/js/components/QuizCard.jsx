import React from "react";
import { Link } from "react-router-dom";


const QuizCard = ({ quiz }) => {
    return (
        <div className="card">
            <Link to='/quiz' state={{ quiz: quiz }}>
                <div className="card__content">               
                    <div className="card__info">
                        <div className="card__image"><img src="https://placehold.co/160x90" alt="placeholder"/></div>
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
                </div>
            </Link>
        </div>
    );
}

export default QuizCard;