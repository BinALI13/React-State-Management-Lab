// src/App.jsx


import { useState } from "react";

function App() {
  const [availableItems] = useState([
    {
      id: 1,
      name: "Black T shirt",
      price: 5
    },
    {
      id: 2,
      name: "Hanger Set",
      price: 8
    },
    {
      id: 3,
      name: "Thoub",
      price: 12
    },
    {
      id: 4,
      name: "Computer Bag",
      price: 20
    },
    {
      id: 5,
      name: "Couch",
      price: 50
    },
    {
      id: 6,
      name: "Gaming Chair",
      price: 70
    }
  ])


  const [availableBalance, setAvaliableBalance] = useState(100)
  const [shoppingCart, setShoppingCart] = useState([]);
  const [warningMessage, setWarningMessage] = useState(null);


  const handleAddToCart = (item) => {

    if (availableBalance >= item.price) {

      const updatedItems = availableItems.filter(
        (availableItem) => availableItem.id !== item.id
      )
      setAvailableItems(updatedItems);
      setShoppingCart([...shoppingCart, item])
      setAvailableBalance(availableBalance - item.price);
      setWarningMessage(null);
    } else {
      setWarningMessage(
        "Insufficient funds. Your balance is too low to purchase this item")
      setTimeout(() => {
        setWarningMessage(null);
      }, 4000)

    }
  }

  const handleRemoveFromShoppingCart = (item) => {
    const updatedCart = shoppingCart.filter(
      (cartItem) => cartItem.id !== item.id
    );

    setShoppingCart(updatedCart)

    setAvailableItems([...availableItems, item])

    setAvailableBalance(availableBalance + item.price)
  }
  return (
    <>
      <h1>Sayed Hameds Closet</h1>

      <h2>Your Balance:{availableBalance}</h2>
      {warningMessage && <p>{warningMessage}</p>}

      <h2>Available Items</h2>
      {availableItems.length === 0 ? (
        <p>No available items</p>
      ) : (
        availableItems.map((oneItem) => (
          <div key={oneItem.id}>
            <p>Product name: {oneItem.name}</p>
            <p>Price: {oneItem.price}</p>

            <button
              onClick={() => {
                handleAddToCart(oneItem);
              }}
            >
              Add to Cart
            </button>
          </div>
        ))
      )}
      <h2>Shopping Cart</h2>
{shoppingCart.length === 0 ? (
  <p>Your shopping cart is empty</p>
) : (
  shoppingCart.map((item) => (
    <div key={item.id}>
      <p>Product name: {item.name}</p>
      <p>Price: {item.price}</p>

      <button
        onClick={() => {
          handleRemoveFromShoppingCart(item);
        }}
      >
        Remove
      </button>
    </div>
  ))
)}
    </>
  );
}

export default App
