import React from "react";


const Answer = ({ questionId }) => {
    const [answers, setAnswers] = useState([]);
    const propositionLetters = ['A', 'B', 'C', 'D'];

    const fetchAnswers = async () => {
        try {
          const response = await axios.get(`/api/answers/${questionId}`);
          const fetchedAnswers = response.data.map((answer, index) => ({
            ...answer,
            letter: propositionLetters[index]
          }));
          setAnswers(fetchedAnswers);
        } catch (error) {
          console.error('Error fetching answers:', error);
        }
      };


      useEffect(() => {
        fetchAnswers();
    }, [questionId]);

    return (
        <div>
    <div>
      {answers.map((answer) => (
        <div key={answer.id}>
          <div>{answer.letter}. </div>
          <div>{answer.name}</div>
        </div>
      ))}
    </div>
        </div>
    );
}

export default Answer;
