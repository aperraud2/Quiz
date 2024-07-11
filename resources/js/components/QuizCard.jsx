// import { useEffect, useState } from "react";
// import axios from "axios";


// const QuizCard = ({ quizId }) => {

//     const [quizzes, setQuiz] = useState([]);

//     const loadQuizData = async () => {
//         try {
//             const response = await axios.get('/api/quizzes');
//                 setQuiz(response.data);

//         } catch (error) {
//             console.log(error);
//         }
//     }


//     useEffect(() => {
//         loadQuizData();

//     }, [])


//     return (
//         <div>
//             <div className="card">
//                 <div className="card__content">               
//                         { 
//                         quizzes.map((quiz, index) => {
//                             return (
//                                   <div className="card__info" key={index}>
//                                     <div className="card__title">{quiz.name}</div>
//                                     <div className="card__description">{quiz.description}</div>
//                                     <div className="card__category">{quiz.category_quiz.category?.name}</div>
//                                     <div className="card__difficulty">{quiz.difficulty?.name}</div>
//                                     <div className="card__attempts">Attempts: {quiz.attempts ?? 0}</div>
//                                   </div>
//                             )
//                         })
//                     }                                                         
//                 </div>
//             </div>
//         </div>
//     )
// }
    







// export default QuizCard;


import { useEffect, useState } from "react";
import axios from "axios";

const QuizCard = ({ quiz }) => {
    return (
            <div className="card">
                <div className="card__content">               
                    <div className="card__info">
                        <div className="card__image"></div>
                        <div className="card__title">{quiz.name}</div>
                        <div className="card__description">{quiz.description}</div>
                        <div className="card__category">{quiz.category_quiz.category?.name}</div>
                        <div className="card__difficulty">{quiz.difficulty?.name}</div>
                        <div className="card__attempts">Attempts: {quiz.attempts ?? 0}</div>
                    </div>                                                   
                </div>
            </div>
    );
}

export default QuizCard;