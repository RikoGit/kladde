import React from 'react';

const JokeItem = ({ data }) => {
    const jokeQuestion = data.question ? <h3>question: {data.question}</h3> : undefined;
    return (
        <div>
            {jokeQuestion}
            <p>punchLine: {data.punchLine}</p>
        </div>
    );
};

export default JokeItem;
