import React from 'react'
import uuid from 'react-uuid';
import { DateTime } from 'luxon';

const Form = ({ setShowForm, formText, setFormText, cards, setCards }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowForm(false);

        const newCard = {
            id: uuid(),
            date: DateTime.local().toLocaleString(),
            body: formText
        }

        setCards([...cards, newCard])
        setFormText('');
    }

    return (
        <form className='form'>
            <textarea className='textForm' placeholder='Write some text here!' onChange={(e) => setFormText(e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default Form
