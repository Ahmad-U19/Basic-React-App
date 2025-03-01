import React,{useState} from 'react'


export default function TextForms(props) {
    const [Text, setText] = useState("Enter Text Here");

    const handleOnChange = (event) =>{
        console.log("On Change");
        setText(event.target.value)
    }

    const handleOnClick = () =>{
        console.log("You Clicked " + Text);
        let newtext=Text.toUpperCase();
        setText(newtext);
    }
    return (
    <>
        <div>
        <h3>{props.heading}</h3>
        <div className="mb-3">
            <textarea className="form-control" value={Text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button onClick={handleOnClick} type="button" className="btn btn-success">Convert to UpperCase</button>
        </div>
        <div className="container">
            <h3 className='my-3'>Your Text Summary</h3>
            <p>{Text.split(" ").length} words and {Text.length} Characters</p>
            <p>{0.008 * Text.split(" ").length} Minutes to Read</p>    
            <h3>Preview</h3>
            <p>{Text}</p>
        </div>    
    </>
  )
}
