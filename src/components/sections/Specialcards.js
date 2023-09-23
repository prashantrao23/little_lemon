import React from 'react'

const Specialcards = (props) => {
    return (
        <div className="card" >
            <img src={props.image} className="card-img-top" alt={props.name} />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <h2>{props.price}</h2>
                    <p className="card-text">{props.description}</p>
                    <a href="/" className="btn order-btn">Order Online</a>
                </div>
        </div>
    )
}

export default Specialcards