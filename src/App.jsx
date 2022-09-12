
import React, { useState, useEffect } from "react";
import './App.css'
import Items from "./Components/Items";
import Money from "./Components/Money";
import Minute from "./Images/minute.png"
import Cola from './Images/Cola.png'
import Tea from './Images/tea.png'

import Panier from "./Components/NewItems/Panier";
const ITEMS = [{
  id: 1,
  nom: "Coca Cola",
  prix: 1,
  stock: 5,
  unit: 0,
  image: Cola,

}, {
  id: 2,
  nom: "Minute Maid",
  prix: 1.5,
  stock: 5,
  unit: 0,
  image: Minute,



},
{
  id: 3,
  nom: "Iced Tea",
  prix: 2,
  stock: 5,
  unit: 0,
  image: Tea,

}
]



function App(props) {
  const [expenses, setExpenses] = useState(ITEMS);
  const [amount, setAmount] = useState(20)
  const [button, setButton] = useState("add")


  const addProductHandler = expense => {
    if (amount > expense.prix) {
      expense.stock -= 1
      setAmount(amount - expense.prix)
      expense.unit += 1
      console.log('yay');
    } else {
      setButton("delete")
      console.log('nay');

    }
  }

  const removeProductHandler = expense => {
    expense.stock += 1
    expense.unit -= 1
    setAmount(amount + expense.prix)
    console.log('yoooo');
  }

  return (
    <div>
      <Money Wallet={amount} />
      <div className="items">
        {
          expenses.map((data, index) => {
            return <Items
              items={data}
              key={index}
              itembtn={button} addHandler={() => addProductHandler(data)}
              stock={data.stock}
            />
          })
        }

      </div>

      <div>
        {
          expenses.map((data, index) => {
            return <Panier
              items={data}
              key={index}
              rmvhandle={() => removeProductHandler(data)}


            />
          })
        }
      </div>

    </div>
  );
}

export default App;
