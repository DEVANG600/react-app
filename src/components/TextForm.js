import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        setText(text.toUpperCase());
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

     const handleClearClick = () => {
        setText('');
    };
    const [text, setText] = useState('');
    return (
        <>
            <div className='container'>
                <div className="form-group">
                    <label htmlFor="mytext">{props.heading}</label>
                    <textarea type="text" className="form-control" id="description" value={text} onChange={handleOnChange} rows="4" aria-describedby="emailHelp" placeholder="Enter Description" />
                </div>
                <button type="submit" onClick={handleUpClick} className="btn btn-primary my-2 mx-1">Convert Upper Case</button>
                <button type="submit" onClick={handleClearClick} className="btn btn-primary my-2 mx-1">Clear</button>
            </div>
            <div className="container my-2">
                <h2>Your, text summary</h2>
                <p>{text.length} character, {text.split(' ').length-1} words</p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text : "Enter the some text to preview it here"}</p>
            </div>
        </>
    )
}

