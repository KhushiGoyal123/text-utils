import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to UpperCase", "success");
    }
    const handleLowClick = () => {
        // console.log("Lowercase was clicked"+ text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to LowerCase", "success");
    }
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }
    
    const [text, setText] = useState('');
    return (
        <>
    <div className="container" style={{color : props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='light'?'#adb5bd':'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-success mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-success mx-2 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
    </div>
    <div className="container my-3" style={{color : props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the above testbox to preview it here"}</p>
    </div>
    </>
    )
}
