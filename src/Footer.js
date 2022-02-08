import React, { useState } from 'react';
import Peragraph from './Peragraph';



const Footer = () => {
    let [Value, setValue] = useState("");
    let [Array, setArray] = useState([]);
    let [newThing, setNewThing] = useState(false);

    const InputValue = (event) => {
        setValue(event.target.value)
    }
    const addEvent = () => {
        if (Value.length) {
        setArray((prev) => {
            return [...prev, Value]
        })}
        setValue("");
    };

    const deleting = (id) => {
        setArray((prev) => {
            return prev.filter((values, index) => {
                return index !== id
            })
        })
    }
    const itemFac=()=>{
        setNewThing(true)
    }
    const closing=()=>{
        setNewThing(false)
    }

    return (<>
    {/* <Header/> */}
<div className='secOuterDiv'>
<header>
        <h2>Massege box ✨</h2>
</header>
        {Array.map((inputVal, index) => {
            return <Peragraph
                id={index}
                key={index}
                text={inputVal}
                deletee={deleting}
            />

        })}

        {newThing?
        <div className="card list-group" style={{ width: "18rem" }} onClick={closing}>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Add to Favourites</li>
                <li className="list-group-item">Copy</li>
                <li className="list-group-item">forward</li>
            </ul>
            <div className="card-footer list-group">
                view details
            </div>
        </div> : null}

        <footer>
            <button className='item item2' onClick={itemFac} >
                <i className="fa fa-plus-circle"></i>
            </button>

            <input
                className='item item1'
                type="text"
                placeholder='Text message'
                onChange={InputValue}
                value={Value}
                autoFocus />

            <button className='item item2'
                onClick={addEvent}
            >
                <i className="fa fa-paper-plane"></i>
            </button>

        </footer>
</div>
    </>)
}
export default Footer;

