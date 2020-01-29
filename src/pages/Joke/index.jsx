import React from 'react';

import JokeItem from './components/JokeItem/index.jsx';
import jokeData from './jokeData.js';

const Joke = () => {
    const jokeItem = jokeData
        .filter(joke => joke.question && joke.punchLine)
        .map(joke => (
            <li key={joke.id}>
                <JokeItem
                    data={{
                        question: joke.question,
                        punchLine: joke.punchLine,
                    }}
                />
            </li>
        ));

    return <ul>{jokeItem}</ul>;
};

export default Joke;
