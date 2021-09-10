import React from 'react';
import Card from './Card';
import { FaTrash } from "react-icons/fa";


const Grid = ({ cards, setCards }) => {

    const deleteCard = (id) => {
        const filteredCards = [...cards].filter((card) => card.id !== id);
        setCards(filteredCards);
    }

    return (
        <div className='grid'>
            <Card />
            {cards.map((card) => <div className='card' key={card.id}>
                <span>{card.date}</span>
                <p>{card.body}</p>
                <FaTrash className='trashIcon' onClick={() => deleteCard(card.id)}/>
            </div> )}
    
        </div>
    )
}

export default Grid
