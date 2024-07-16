import { useEffect, useState } from "react";
import QuizCard from './QuizCard';
import QuizSearch from './QuizSearch';
import axios from "axios";

const AllQuiz = () => {
    const [quizzes, setQuizzes] = useState([]);
    const [filteredQuizzes, setFilteredQuizzes] = useState([]);
    const [searchCriteria, setSearchCriteria] = useState({
        keywords: '',
        category: '',
        difficulty: '',
        hideDone: false
    });

    const loadQuizData = async () => {
        try {
            const response = await axios.get('/api/quizzes');
            setQuizzes(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const filterQuizzes = () => {
        let result = quizzes;
        if (searchCriteria.keywords) {
            result = result.filter(quiz =>
                quiz.name.toLowerCase().includes(searchCriteria.keywords.toLowerCase()) ||
                quiz.description.toLowerCase().includes(searchCriteria.keywords.toLowerCase())
            );
        }
        if (searchCriteria.category) {
            result = result.filter(quiz => quiz.category_quiz[0].category?.name === searchCriteria.category );
        }
        if (searchCriteria.difficulty) {
            result = result.filter(quiz => quiz.difficulty?.name === searchCriteria.difficulty);
        }
        if (searchCriteria.hideDone) {
            result = result.filter(quiz => !quiz.completed);
        }
        setFilteredQuizzes(result);
    };

    const handleSearch = (keywords, category, difficulty, hideDone) => {
        setSearchCriteria({keywords, category, difficulty, hideDone});
    };

    useEffect(() => {
        loadQuizData();
    }, []);

    useEffect(() => {
        filterQuizzes();
    }, [searchCriteria, quizzes]);

    return (
        <div>
            <h2>All Quiz</h2>
            <div className='allquiz'>
                <QuizSearch onSearch={handleSearch} />
                <div className="quizlist">
                    {filteredQuizzes.map((quiz, index) => (
                        <QuizCard key={index} quiz={quiz} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllQuiz;