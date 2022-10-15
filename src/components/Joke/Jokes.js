import React, { useEffect, useState } from 'react';
import './Jokes.css'

const jokes = () => {
    const [jokes, setJokes] = useState([])
    useEffect(() => {
        fetch('https://api.chucknorris.io/jokes/search?query=all')
            .then(res => res.json())
            .then(data => {
                setJokes(data.result)
            })
    }, []);
    return (
        <div className='card'>
            {
                jokes.map((joke) => {
                    return (
                        <div key={joke.id} className='container'>
                            <h4>{joke.id}</h4>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default jokes;