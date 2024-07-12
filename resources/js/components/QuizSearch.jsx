import React, { useState, useEffect } from 'react';
import axios from "axios";

const QuizSearch = ({ onSearch }) => {
    const [keywords, setKeywords] = useState('');
    const [category, setCategory] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [hideDone, setHideDone] = useState(false);
    const [categories, setCategories] = useState([]);
    const [difficulties, setDifficulties] = useState([]);


    const fetchCategories = async () => {
      try {
          const response = await axios.get('/api/categories');
          setCategories(response.data);

      } catch (error) {
          console.error('Error fetching categories:', error);
      }
  };

  const fetchDifficulties = async () => {
      try {
          const response = await axios.get('/api/difficulties');
          setDifficulties(response.data);
      } catch (error) {
          console.error('Error fetching difficulties:', error);
      }
  };

    useEffect(() => {
        fetchCategories();
        fetchDifficulties();
    }, []);

    const handleKeywordsChange = (e) => {
      setKeywords(e.target.value);
      onSearch(e.target.value, category, difficulty, hideDone);
  };

  const handleCategoryChange = (e) => {
      setCategory(e.target.value);
      onSearch(keywords, e.target.value, difficulty, hideDone);
  };

  const handleDifficultyChange = (e) => {
      setDifficulty(e.target.value);
      onSearch(keywords, category, e.target.value, hideDone);
  };

  const handleHideDoneChange = (e) => {
      setHideDone(e.target.checked);
      onSearch(keywords, category, difficulty, e.target.checked);
  };


    return (
        <div className='searchQuiz'>
            <div className="searchQuiz__keyword">
                <input
                    type="text"
                    placeholder="Search a quiz..."
                    value={keywords}
                    onChange={handleKeywordsChange}
                />
            </div>

            <select
                value={category}
                onChange={handleCategoryChange}
            >
                <option value="">Select Category</option>
                {categories.map(category => (
                    <option key={category.id} value={category.name}>{category.name}</option>
                ))}
            </select>
            <select
                value={difficulty}
                onChange={handleDifficultyChange}
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
                    onChange={handleHideDoneChange}
                />
                Hide Completed Quizzes
            </label>
        </div>
    );
};

export default QuizSearch;
