import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import '../App.css';


const TodoInput = (props) => {
    
    const {addList} = props;
    const [inputText, setInputText] = useState('');


    return (
        <div className="input-container">
            <input 
                type="text"
                className="input-box-todo"
                placeholder="Add your new todo"
                value={inputText}
                onChange={event => {
                    setInputText(event.target.value);
                }}
            />
            <button 
                className="add-btn"
                onClick={() => {
                    addList(inputText);
                    setInputText('');
                }}
            >
                <AddIcon style={{fontSize:35}} />
            </button>
        </div>
    )
}


export default TodoInput;