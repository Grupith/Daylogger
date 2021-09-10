import React from 'react';
import Card from './Card';

const Grid = ({ cards, setCards }) => {
    return (
        <div className='grid'>
            <Card />
            {cards.map((card) => <div className='card' key={card.id}>
                <span>{card.date}</span>
                <p>{card.body}</p>
            </div> )}
    
        </div>
    )
}

export default Grid
