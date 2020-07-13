import React from 'react';


function Hobbies(props) {
    return (
        <div className="container">
            <div className="hobby1">
            <div className="hobbyname">
            <h3 className="name">{props.name}</h3>
            </div>
            <div className="picture">
                <img src={props.photo} alt= "Hobby type"/>
            </div>
            <div className="hobbyDescription">
            <p>{props.description}</p>
            </div>
        </div>
    </div>
    )
}
export default Hobbies