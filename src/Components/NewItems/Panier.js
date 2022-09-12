import React from 'react'
import './Panier.css'

const Panier = (props) => {

    const removeHandler = (data) => {
        props.rmvhandle(data)
    }

    return (

        <div>


            <div className={props.items.unit === 0 ? " remove " : "panier"}>

                <div className='inner-panier'>
                    <div><img className='product-img' src={props.items.image} alt="" />

                    </div>
                    <div>Products: {props.items.nom} || Amount: {props.items.unit} </div>

                </div>
                <div><button onClick={removeHandler}>rendre</button></div>
            </div>
        </div>



    )
}

export default Panier