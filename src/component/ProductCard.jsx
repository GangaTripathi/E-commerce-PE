export default function ProductCard({ product, addToCart, removeFromCart }) {
  return (
    <div>
      <img 
        src={product.image} 
        alt={product.name} 
        width="200"
        
      />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <button onClick={() => removeFromCart(product)}>Remove From Cart</button>
    </div>
  );
}

// import ProductCard from "./ProductCard";

// export default function ProductList({ product, addToCart, removeFromCart }) {
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",    
//         gap: "20px",                
//         padding: "20px"
//       }}
//     >
//        <h2>{product.name}</h2>
//       <p>{product.price}</p>
//        <button onClick={() => addToCart(product)}>Add to Cart</button>
//        <button onClick={() => removeFromCart(product)}>Remove From Cart</button>
//     </div>
    
//   );
// }
