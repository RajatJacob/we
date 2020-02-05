import React from 'react';
import ReactDOM from 'react-dom';
const Panel =props =>{
    return(
    <div>
    <img src={props.imgsrc} alt="props.name" className="image"/>

    </div>);
}
export default Panel;