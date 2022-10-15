import React from 'react';
import './Jokes.css'

const Joke = ({ joke }) => {
    const { value } = joke || {}
    return (
        <div className='container'>
            {
                joke.categories.length !== 0 ?
                    <h6 className='uncatButton'>{joke.categories[0]}</h6>
                    :
                    <h6 className='uncatButton'>uncategorised</h6>

            }
            <h5>{value}</h5>
        </div>
    );
};

export default Joke;