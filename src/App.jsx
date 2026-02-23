import { useState } from "react";
import Header from "./component/Header";
import ProductCard from "./component/ProductCard";
import ProductList from "./component/ProductList";
import Cart from "./component/Cart";
import Search from './Search';

export default function App(){
const [cart,setCart]=useState([]);
const [totalAmt, setAmt] = useState(0);
const product=[
  {
    id:1,
    name:"Laptop",
    image:"https://imgs.search.brave.com/r1ESoOahZeb99icXtyTC9Cm4D_rM6hD8mqWW8jHP2yI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9sYXB0b3Atd2l0/aC1ibGFjay1zY3Jl/ZW4td29ya2luZy1k/ZXNrLXdpdGgtY3Vw/LWVhcnBob25lcy1i/bGFjay1iYWNrZ3Jv/dW5kXzkzNjc1LTE2/NzEyNC5qcGc_c2Vt/dD1haXNfaHlicmlk/Jnc9NzQwJnE9ODA",
    price:840000
  },
    {
    id:2,
    name:"Charger",
    image:"https://imgs.search.brave.com/qgJBS3LnviaSUZ9J2N69JGfSXwwUwHT1NgzGozQtuoE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE4/MjI5MDU3Mi9waG90/by93aGl0ZS1zbWFy/dHBob25lLWNoYXJn/ZXItb24tZGFyay1i/YWNrZ3JvdW5kLWNo/YXJnZXItYW5kLXVz/Yi1jYWJsZS10eXBl/LWMtb24tZGFyay1i/YWNrZ3JvdW5kLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1T/WDRjaEdiSndLOXZu/T05NblhOT0pCejJy/Ry1sT3lNZkRFWktE/ZE90SVZRPQ",
    price:1400
  },
    {
    id:3,
    name:"LED-TV",
    image:"https://imgs.search.brave.com/fVkmyNSjau1FbLnDHu9I73wCnsA4vx4KwsGaBx7nUSY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQz/NjA0NDg2OS9waG90/by9sZWQtdHYtaGFu/Z2luZy13aGl0ZS13/YWxsLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz0yNkRGOUt5/U0JOX3g4TGxkcTli/OFZkYzdRZ1FoQ01Y/eVV0OGwwNzBxU0tV/PQ",
    price:36000
  },
    {
    id:4,
    name:"Tab",
    image:"https://imgs.search.brave.com/ePWPu4usWIG7ogKBh3f6rYV_GIDrJ2IPHpynb6qY3F0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saDMu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tLzBn/TzMyVkFld0EtSFY2/blptWUhWcE55T3Zn/R016ZU1rUGtjMDky/Q2drak1vZ1dLaFZ0/Wk5qczlXUWR6aWZ2/Rk91U09Wem5zUmRf/enN6LVprU2g1X0la/M1NJODBwOUlwUFBF/N09xQzdsYmQxeWhW/TlZSZw",
    price:10000
  },
    {
    id:5,
    name:"Earbuds",
    image:"https://imgs.search.brave.com/lbBTQIEHyWircpBPpVjAkko6gqE8E2ZxwjHjUo1ZU8A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzAv/MzcwLzgwMS9zbWFs/bC93aXJlbGVzcy1l/YXJidWRzLWluLWNo/YXJnaW5nLWNhc2Ut/b24tZGFyay1iYWNr/Z3JvdW5kLXBob3Rv/LmpwZw",
    price:190000
  }
  ,
    {
    id:6,
    name:"Powerbank",
    image:"https://imgs.search.brave.com/lP5U7j9xTCxkHPspTxcVq1A4HB0Hz3d5yLUr2Pcv7uI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8x/Mi8xMi8xOS8zMS9i/cmFuZC10YXNhbXJv/bmctMTA4OTk4Nl82/NDAuanBn",
    price:840
  }
  ,
    {
    id:7,
    name:"Mobile",
    image:"https://imgs.search.brave.com/0B5qwIqRTtukvNl8Uz2I94uAUHpRBcxkYpqPeIot3Mg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTcv/MTAxLzA2Mi9zbWFs/bC9tb2JpbGUtc21h/cnRwaG9uZS1uZXct/c2hpbnktbW9iaWxl/LWNlbGwtcGhvbmUt/bW9kZXJuLW1vYmls/ZS1waG9uZS10ZW1w/bGF0ZS1mcmVlLXBo/b3RvLmpwZw",
    price:1400000
  }
  ,
    {
    id:8,
    name:"Iron",
    image:"https://imgs.search.brave.com/NRgShmq1ox_ZLMJHX22Z5-CbP2jBLr_PxEMAUB6Z4_Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTIz/Nzk0NzU2L3Bob3Rv/L2lyb24tYW5kLWly/b25pbmctYm9hcmQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWg1UXVhZVdEbDY2/QUU4X3pHekFBQTgy/SE00a1NqNFh5VFJz/LVhPWld2UXM9",
    price:8400
  }
]
  
    
  function addToCart(product) {
    setCart([...cart, product]);
    setAmt(totalAmt+product.price);
  }

function removeFromCart(itemToRemove) { 
  setCart(cart.filter(item => item.id !== itemToRemove.id));
 
}
 
  
  return (
    <div>
      <Header cartCount={cart.length} />
  
      <ProductList product={product} addToCart={addToCart} removeFromCart={removeFromCart} />
      <Cart 
       cart={cart} 
     totalAmt={totalAmt} 
       removeFromCart={removeFromCart} 
/>
    </div>

    
  );
}
