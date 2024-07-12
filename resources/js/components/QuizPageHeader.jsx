import { useEffect, useState } from "react";
import axios from "axios";


const QuizPageHeader = () => {

    return(

        <div className="quizpage__header">
                <h1>Quizz name</h1>
            <img src="" alt="Image du Quiz" class="quiz-image"/>
            <div class="quizpage__description">
                <p>Quiz description</p>
            </div>
            <div class="quizpage__data">
                <div class="quizpage__category">
                    Category:
                    <p>Science</p>
                </div>
                <div class="quizpage__difficulty">
                    <strong>Difficulty:</strong>
                    <p>Easy</p>
                </div>
            </div>
        </div>
    );



}

export default QuizPageHeader;