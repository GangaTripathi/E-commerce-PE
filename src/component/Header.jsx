// // export default function Header({cartCount}){
// //     return(
// //         <div>
// // <h2>React demo App</h2>
// // <p>Cart Item count:{cartCount}</p>
// // <img src="https://cdn-icons-png.flaticon.com/512/6318/6318376.png" alt="Logo" width={100} />
// //         </div>
// //     )
    
// // }
// export default function Header({ cartCount }) {
//   return (
//     <header
//       style={{
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         padding: "10px 20px",
//         backgroundColor: "#222",
//         color: "#fff"
//       }}
//     >
      
//       <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//         <img
//           src="https://static.vecteezy.com/system/resources/previews/021/883/643/original/professional-abstract-business-ecommerce-logo-design-template-free-free-vector.jpg" 
//           alt="App Logo"
//           style={{ width: "40px", height: "40px" }}
//         />
//         <h2 style={{ margin: 0 }}>React Demo App</h2>
//       </div>
 
//       <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//         <span></span>
//         <p style={{ margin: 0 }}>Cart Items: {cartCount}</p>
//       </div>
//     </header>
//   );
// }
import Search from "../Search";
export default function Header({ cartCount, onSearch }) {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#222",
        color: "#fff"
      }}
 
 >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src="https://static.vecteezy.com/system/resources/previews/021/883/643/original/professional-abstract-business-ecommerce-logo-design-template-free-free-vector.jpg"
          alt="App Logo"
          style={{ width: "40px", height: "40px" }}
        />
        <h2 style={{ margin: 0 }}>React Demo App</h2>
      </div>

      
      <div>
        <input
          type="text"
          placeholder="Search products..."
          style={{
            padding: "6px 10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            width: "200px"
          }}
          onChange={(e) => onSearch?.(e.target.value)}
        />
      </div>

     
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <p style={{ margin: 0 }}>Cart Items: {cartCount}</p>

      </div>
      <Search/>
    </header>
  );
}
