import React,{useState} from 'react'

export default function Form(props) {

      function handleUpOnClick(){
        const newName = name.toUpperCase();
        setname(newName);
      };

      function handleDnOnClick(){
        const newName = name.toLowerCase();
        setname(newName);
      };
    
      function handleOnChange(event){
        setname(event.target.value)
      }

    const [name, setname] = useState("click to convert uppercase");
  return (
    <>
        <div className='container'>
            <h1 className='my-2'>{props.formHeading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" onChange={handleOnChange} value={name}></textarea>
            </div>
            <button type="button" className="btn btn-primary mx-1" onClick={handleUpOnClick}>Uppercase</button>
            <button type="button" className="btn btn-primary mx-1" onClick={handleDnOnClick}>Lowercase</button>
            
        </div>
        <div className='container'>
          <h3>Your text Summary</h3>
          <p>{name.length} characters and {name.split(" ").length} words</p>
          <p>{0.08 * name.split(" ").length} minutes to read</p>
          <h4>Preview</h4>
          <p>{name}</p>

        </div>
    </>
  )
}
