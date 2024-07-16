import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Profile = () => {
    const [userName, setUserName] = useState('');
    const [quizStats, setQuizStats] = useState([]);

    const fetchUserName = async () => {
        try {
            const response = await axios.get('/api/user');
            setUserName(response.data.name);
        } catch (error) {
            console.error('Error fetching user name:', error);
        }
    };

    const fetchQuizStats = async () => {
        try {
            const response = await axios.get('/api/quizzes');
            setQuizStats(response.data);
        } catch (error) {
            console.error('Error fetching quiz stats:', error);
        }
    };

    useEffect(() => {
        fetchUserName();
        fetchQuizStats();
    }, []);


return (
<div>
    <div className = "profilepage">
        <h1>Hello {userName}!</h1>
        <div className="profile__generalstats">
            <h2>General statistics</h2>
            <ul>
                <li>Total number of quiz finished:</li>
                <li>Number of different quiz finished:</li>
                {/* <li>Total time spent doing quiz:</li> */}
            </ul>
        </div>
        <div className="profile__bestscores">
            <h2>Your statistics by quiz</h2>
            <table>
        <thead>
            <tr>
                <th>Quiz</th>
                <th>Best score</th>
                <th>Average score</th>
                <th>Your attempts</th>
                <th>Total attempts</th>
            </tr>
        </thead>
        <tbody>
            {quizStats.map((quiz) => (
                <tr key={quiz.id}>
                    <td>{quiz.name}</td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td>N/A</td>
                </tr>
            ))}
        </tbody>
    </table>
        </div>
    </div>
</div>

);

};


export default Profile;