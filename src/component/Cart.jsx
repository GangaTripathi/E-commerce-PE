export default function Cart({ cart, removeFromCart }) {
  const totalAmt = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Your Cart:</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <p>
              {item.name} - ₹{item.price}
            </p>
            <button onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>

        ))
      )}
      <h4>Enter your Address Details: </h4>
      <form action="submit">
     <input type="text"placeholder="Enter details"  />
 </form>

     

      <h3>Total Cart Amount: ₹{totalAmt}</h3>
    </div>
  );
}
