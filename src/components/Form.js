import React from 'react'

const Form = ({ setShowForm }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowForm(false);

    }

    return (
        <form className='form'>
            <textarea className='textForm' placeholder='Write some text here!' />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default Form
