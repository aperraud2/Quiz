import React, { useState, useEffect } from 'react';
import axios from "axios";

const QuizSearch = ({ onSearch }) => {
  const [keywords, setKeywords] = useState('');
  const [quizType, setQuizType] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [hideDone, setHideDone] = useState(false);
  const [categories, setCategories] = useState([]);
  const [difficulties, setDifficulties] = useState([]);


  useEffect(() => {
    // Fetch categories and difficulties from the API
    axios.get('http://squizgame.test/api/categories')
      .then(response => setCategories(response.data))
      .catch(error => console.error('Error fetching categories:', error));

    axios.get('http://squizgame.test/api/difficulties')
      .then(response => setDifficulties(response.data))
      .catch(error => console.error('Error fetching difficulties:', error));
  }, []);

  useEffect(() => {
    if (typeof onSearch === 'function') {
      onSearch({ keywords, quizType, difficulty, hideDone });
    }
  }, [quizType, difficulty, hideDone, onSearch]);


  const handleSearchClick = () => {
    if (typeof onSearch === 'function') {
      onSearch({ keywords, quizType, difficulty, hideDone });
    }
  };


  return (
    <div className='searchQuiz'>
      <div className="searchQuiz__keyword">
        <input
          type="text"
          placeholder="Search for keywords..."
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
        />
        <button onClick={handleSearchClick}>Search</button>
      </div>

      <select
        value={quizType}
        onChange={(e) => setQuizType(e.target.value)}
      >
        <option value="">Select Quiz Type</option>
        {categories.map(category => (
          <option key={category.id} value={category.name}>{category.name}</option>
        ))}
      </select>
      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <option value="">Select Difficulty</option>
        {difficulties.map(difficulty => (
          <option key={difficulty.id} value={difficulty.name}>{difficulty.name}</option>
        ))}
      </select>
      <label className="searchQuiz__show">
        <input
          type="checkbox"
          checked={hideDone}
          onChange={(e) => setHideDone(e.target.checked)}
        />
        Hide Completed Quizzes
      </label>
    </div>
  );
};

export default QuizSearch;