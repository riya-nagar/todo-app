import React,{useState} from 'react'

function TodoInput(props) {
  const [inputText,setInputText] = useState('');
  const handleEnterPress = (e) => {
    if(e.keyCode===13)
    {
      props.addList(inputText)
      setInputText("")
    }
  }
  return (
    <div className="input-container">
     <input type="text" 
     className="input-box-todo"
     placeholder="Enter your Task"
     value={inputText} // line 18
     onChange={e=>{
      setInputText(e.target.value)
     }}
     onKeyDown={handleEnterPress}
     />
     <button className="add-btn" 
     onClick={()=>{
      props.addList(inputText)
      setInputText("") //to set the input field blank
     }}>+</button>

     <div>{inputText}</div>
   </div>
  )
}

export default TodoInput
