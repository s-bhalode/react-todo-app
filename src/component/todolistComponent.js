import React from "react";
import '../App.css';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';


const TodolistComponent = (props) => {
    const {deleteListItem} = props;
    return (
        <>
            <li className="todo-item">
                <span>{props.item}</span>
                <button 
                    className="dlt-btn"
                    onClick={(event => {
                        deleteListItem(props.index)
                    })}
                >
                    <RemoveCircleIcon />
                </button>
            </li>
        </>
    )
}

export default TodolistComponent;