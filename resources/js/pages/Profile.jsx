import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Profile = () => {
    const [userName, setUserName] = useState('');

    const fetchUserName = async () => {
        try {
            const response = await axios.get('/api/user');
            setUserName(response.data.name);
        } catch (error) {
            console.error('Error fetching user name:', error);
        }
    };

    useEffect(() => {
        fetchUserName();
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
            <tr>
                <td>Quiz 1</td>
                <td>95</td>
                <td>80</td>
                <td>3</td>
                <td>10</td>
            </tr>
            <tr>
                <td>Quiz 2</td>
                <td>88</td>
                <td>75</td>
                <td>2</td>
                <td>8</td>
            </tr>
            <tr>
                <td>Quiz 3</td>
                <td>90</td>
                <td>85</td>
                <td>4</td>
                <td>12</td>
            </tr>
            <tr>
                <td>Quiz 4</td>
                <td>92</td>
                <td>78</td>
                <td>5</td>
                <td>15</td>
            </tr>
        </tbody>
    </table>
        </div>
    </div>
</div>

);

};


export default Profile;