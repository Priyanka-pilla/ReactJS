import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick =() =>{
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  }
  const handleOnChange =(event) =>{
    console.log("on Change");
    setText(event.target.value);
  }

const handleLowClick = () =>{
  let newText = text.toLowerCase();
  setText(newText);
  props.showAlert("Converted to LowerCase", "success");
}

  const [text, setText] = useState("");

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'black' }} id="myBox" rows="8" ></textarea>

</div>
<button disabled={text.length==0} className="btn  btn-primary mx-2 my-2" onClick ={handleUpClick}>Convert to UpperCase</button>
<button disabled={text.length==0} className="btn  btn-primary mx-2 my-2"  onClick ={handleLowClick}>Convert to LowerCase</button>

    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} Words and {text.length} Characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} minutes to read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
    )
}
