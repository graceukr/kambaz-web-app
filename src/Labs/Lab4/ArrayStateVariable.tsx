import { useState } from "react";
import "./style.css"; 

export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  
  const deleteElement = (index: number) => {
    setArray(array.filter((_, i) => i !== index));
  };
  
  return (
    <div>
        <div className="as-container">
            <h2>Array State Variable</h2>
            <button 
                className="as-add-button" 
                onClick={addElement}
                >Add Element</button>
            <ul className="as-list-container">
            {array.map((item, index) => (
                <li key={index} className="as-list-item">
                    <span className="as-item-value">{item}</span>
                    <button 
                    className="as-delete-button" 
                    onClick={() => deleteElement(index)}
                    >Delete</button>
                </li>
                ))}
            </ul>
        </div>
        <hr />
    </div>
  );
}