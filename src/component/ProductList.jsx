import ProductCard from "./ProductCard";

export default function ProductList({ product, addToCart,removeFromCart }) {
  return (
    <div>
      {product.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
           removeFromCart={removeFromCart}
        />
      ))}
   
 



    </div>
  );
}
