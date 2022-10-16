import React, { useEffect, useState } from 'react';
import Joke from './Joke';
import './Jokes.css'

const jokes = () => {
    const [jokes, setJokes] = useState([]);
    const [allJokes, setAllJokes] = useState([]);
    useEffect(() => {
        fetch('https://api.chucknorris.io/jokes/search?query=all')
            .then(res => res.json())
            .then(data => {
                setJokes(data.result)
                setAllJokes(data.result)
            })
    }, []);
    const handleExplicit = () => {
        const explicitJokes = allJokes.filter(joke => joke.categories[0] === "explicit")
        setJokes(explicitJokes)
    }
    const handleHistory = () => {
        const historyJokes = allJokes.filter(joke => joke.categories[0] === "history")
        setJokes(historyJokes)
    }
    const handleScience = () => {
        const scienceJokes = allJokes.filter(joke => joke.categories[0] === "science")
        setJokes(scienceJokes)
    }
    const handleMoney = () => {
        const moneyJokes = allJokes.filter(joke => joke.categories[0] === "money")
        setJokes(moneyJokes)
    }
    const handleUn = () => {
        const unJokes = allJokes.filter(joke => joke.categories.length === 0)
        setJokes(unJokes)
    }
    const handleAll = () => {
        const alllJokes = allJokes.filter(joke => joke.length !== 0)
        setJokes(alllJokes)
    }
    return (
        <div style={{ margin: '50px' }}>
            <div className='button-grid'>
                <button className='button' onClick={handleExplicit}> EXPLICIT </button>
                <button className='button' onClick={handleHistory}> HISTORY </button>
                <button className='button' onClick={handleScience}> SCIENCE </button>
                <button className='button' onClick={handleMoney}> MONEY </button>
                <button className='button' onClick={handleUn}> UNCATEGORISED </button>
                <button className='button' onClick={handleAll}> ALL JOKES </button>

            </div>
            <h2> Total Jokes {jokes.length}</h2>
            <div className='card'>
                {
                    jokes.map(joke => <Joke key={joke.id} joke={joke}></Joke>)
                }
            </div>
        </div>
    );
};

export default jokes;