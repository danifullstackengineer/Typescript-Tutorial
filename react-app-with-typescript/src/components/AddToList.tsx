import React, { useState } from 'react';
import {IState as Props} from '../App';

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>;
}

const AddToList: React.FC<IProps> = ({people, setPeople}) => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        note: "",
        img: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void =>{
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    } 
    
    const handleClick = ():void => {
        if(
            !input.name || !input.age || !input.img
        ) {
            return
        }

        setPeople([
            ...people, 
            {
                name: input.name,
                age: parseInt(input.age),
                url: input.img,
                note: input.note,
                id: input.img
            }
        ])

        setInput({
            name: "",
            age: "",
            note: "",
            img: ""
        })

    }

    return (
      <div className="AddToList">
        <input
          type="text"
          placeholder="Name"
          value={input.name}
          className="AddToList-input"
          onChange={handleChange}
          name="name"
        />
        <input
          type="text"
          placeholder="AGE"
          value={input.age}
          className="AddToList-input"
          onChange={handleChange}
          name="age"
        />
        <input
          type="text"
          placeholder="Image-URL"
          value={input.img}
          className="AddToList-input"
          onChange={handleChange}
          name="img"
        />
        <textarea
          placeholder="Notes"
          value={input.note}
          className="AddToList-input"
          onChange={handleChange}
          name="note"
        />
        <button className="AddToList-btn" onClick={handleClick}>
            Add to list
        </button>
      </div>
    );
}

export default AddToList;