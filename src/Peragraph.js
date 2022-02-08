import React, { useState } from 'react';

const Peragraph = (props) => {
    let [Event, setEvent] = useState(false);

    const cleckedFac = () => {
        setEvent(true)
    }
    return (<>
        <div className='pera'
            onDoubleClick={cleckedFac}> {props.text} </div>
        {Event ? <p onClick={() => {
                return props.deletee(props.id)
        }}
        > <i className="fa fa-trash pera"></i></p> : null}
    </>)
}
export default Peragraph;