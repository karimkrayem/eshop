import React from 'react'
import './Items.css'

const Items = (props) => {

    const addHandle = (data) => {
        props.addHandler(data)
    }


    return (
        <div className="items">

            <div id={props.items.nom} className={props.stock === 0 ? 'bg-red' : 'inner-item'}>
                <img src={props.items.image} alt="" />
                <div className={props.stock === 1 ? 'bg-green' : 'item-txt'}>
                    <h1>{props.items.nom}</h1>
                    <span>Prix : {props.items.prix} $</span>
                    <p>Stock : {props.items.stock} Unités </p>
                </div>
                <button id={props.items.id} onClick={addHandle} className={props.stock === 0 ? "remove" : props.itembtn}>Acheter</button>
            </div>
        </div>
    )
}

export default Items