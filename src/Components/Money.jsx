import React from 'react'
import './Money.css'

const Money = ({ Wallet }) => {
    return (
        <div className='money'>
            <p>{Wallet} $</p>
        </div>
    )
}

export default Money