import React, { Component } from "react";

class ProductList extends Component {
  state = {
    selectedCategory: null,
  };

  products = [
    { id: "PEP110", name: "Pepsi", category: "Food", stock: true },
    { id: "CLO876", name: "Close Up", category: "Toothpaste", stock: false },
    { id: "PEA531", name: "Pears", category: "Soap", stock: true },
    { id: "LU7264", name: "Lux", category: "Soap", stock: false },
    { id: "COL112", name: "Colgate", category: "Toothpaste", stock: true },
    { id: "DM881", name: "Dairy Milk", category: "Food", stock: false },
    { id: "LI130", name: "Liril", category: "Soap", stock: true },
    { id: "PPS613", name: "Pepsodent", category: "Toothpaste", stock: false },
    { id: "MAG441", name: "Maggi", category: "Food", stock: true },
  ]; 

  handleRadioChange = (category) => {
    this.setState({
      selectedCategory: category,
    });
  };

  render() {
    const { selectedCategory } = this.state;
    const selectedProducts = this.products.filter(
      (product) => product.category === selectedCategory
    );

      const categories = this.products
    .map(product => product.category)
    .filter((category, index, arr) => arr.indexOf(category) === index);
  

    const selectedDetails = selectedProducts.map((product) => (
      <div className="row" key={product.id}>
        <div className="col">{product.name}</div>
        <div className="col">{product.category}</div>
        <div className="col">{product.id}</div>
        <div className="col">{product.stock ? "True" : "False"}</div>{" "}
      </div>
    ));

    return (
      <div className="container">
        <div className="row border">
          <div className="col-3 border">
            {categories.map((category) => (
              <div key={category}>
                <input
                  type="radio"
                  checked={selectedCategory === category}
                  onChange={() => this.handleRadioChange(category)}
                />
                {category}
              </div>
            ))}
          </div>

          <div className="col-9 border">
            <h3>Selected Products : {selectedCategory}</h3>
            {selectedDetails.length > 0 && (
              <div className="container">
                {selectedDetails}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;



// import React, { Component } from "react";

// class ProductList extends Component {
//   state = {
//     selectedProductId: null,
//   };

//   products = [
//     { id: "PEP110", name: "Pepsi", category: "Food", stock: true },
//     { id: "CLO876", name: "Close Up", category: "Toothpaste", stock: false },
//     { id: "PEA531", name: "Pears", category: "Soap", stock: true },
//     { id: "LU7264", name: "Lux", category: "Soap", stock: false },
//     { id: "COL112", name: "Colgate", category: "Toothpaste", stock: true },
//     { id: "DM881", name: "Dairy Milk", category: "Food", stock: false },
//     { id: "LI130", name: "Liril", category: "Soap", stock: true },
//     { id: "PPS613", name: "Pepsodent", category: "Toothpaste", stock: false },
//     { id: "MAG441", name: "Maggi", category: "Food", stock: true },
//   ];  
//     handleRadioChange = (productId) => {
//       this.setState({
//         selectedProductId: productId,
//       });
//     };
  
//     render() {
//       const { selectedProductId } = this.state;
//       const selectedProduct = this.products.find(
//         (product) => product.id === selectedProductId
//       );
  
//       return (
//         <div className="container">
//           <div className="row border">
//             <div className="col-3 border">
//               {this.products.map((product) => (
//                 <div key={product.id}>
//                   <input
//                     type="radio"
//                     checked={selectedProductId === product.id}
//                     onChange={() => this.handleRadioChange(product.id)}
//                   />
//                   {product.name}
//                 </div>
//               ))}
//             </div>
  
//             <div className="col-9 border">
//               <h2>Selected Product: {selectedProduct ? selectedProduct.name : ""}</h2>
//               {selectedProduct && (
//                 <div className="container">
//                   <div className="row">
//                     <div className="col">{selectedProduct.name}</div>
//                     <div className="col">{selectedProduct.category}</div>
//                     <div className="col">{selectedProduct.id}</div>
//                     <div className="col">
//                       {selectedProduct.stock ? "True" : "False"}
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       );
//     }
//   }
  
//   export default ProductList;
  


// import React, { Component } from "react";

// class ProductList extends Component {
//   state = {
//     selectedCategories: [],
//   };

//   products = [
//     { id: "PEP110", name: "Pepsi", category: "Food", stock: true },
//     { id: "CLO876", name: "Close Up", category: "Toothpaste", stock: false },
//     { id: "PEA531", name: "Pears", category: "Soap", stock: true },
//     { id: "LU7264", name: "Lux", category: "Soap", stock: false },
//     { id: "COL112", name: "Colgate", category: "Toothpaste", stock: true },
//     { id: "DM881", name: "Dairy Milk", category: "Food", stock: false },
//     { id: "LI130", name: "Liril", category: "Soap", stock: true },
//     { id: "PPS613", name: "Pepsodent", category: "Toothpaste", stock: false },
//     { id: "MAG441", name: "Maggi", category: "Food", stock: true },
//   ];

//   // handleCheckbox = (category) => {
//   //   const { selectedCategories } = this.state;
//   //   const updatedCategories = selectedCategories.includes(category)
//   //     ? selectedCategories.filter((cat) => cat !== category)
//   //     : [...selectedCategories, category];

//   //   this.setState({
//   //     selectedCategories: updatedCategories,
//   //   });
//   // };
//   handleCheckbox = (category) => {
//     const { selectedCategories } = this.state;
//     const categoryIndex = selectedCategories.indexOf(category);
  
//     if (categoryIndex !== -1) {
//       const updatedCategories = [
//         ...selectedCategories.slice(0, categoryIndex),
//         ...selectedCategories.slice(categoryIndex + 1),
//       ];
//       this.setState({
//         selectedCategories: updatedCategories,
//       });
//     } else {
//       this.setState({
//         selectedCategories: [...selectedCategories, category],
//       });
//     }
//   };
  

//   render() {
//     const { selectedCategories } = this.state;

//     const categories = this.products
//     .map(product => product.category)
//     .filter((category, index, arr) => arr.indexOf(category) === index);
  

//     const filteredProducts = this.products.filter((product) =>
//       selectedCategories.includes(product.category)
//     );

//     const selectedDetails = filteredProducts.map((product) => (
//       <div className="row" key={product.id}>
//         <div className="col">{product.name}</div>
//         <div className="col">{product.category}</div>
//         <div className="col">{product.id}</div>
//         <div className="col">{product.stock ? "True" : "False"}</div>{" "}
//       </div>
//     ));

//     return (
//       <div className="container">
//         <div className="row border">
//           <div className="col-3 border">
//             {categories.map((category) => (
//               <div key={category}>
//                 <input
//                   type="checkbox"
//                   checked={selectedCategories.includes(category)}
//                   onChange={() => this.handleCheckbox(category)}
//                 />
//                 {category}
//               </div>
//             ))}
//           </div>

//           <div className="col-9 border">
//           {/* <h3>Selected Products : {selectedCategories.join(", ")}</h3> */}
//           <h3>Selected Products : {selectedCategories + ','}</h3>
//             {selectedDetails.length > 0 && (
//               <div className="container">
//                 {selectedDetails}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default ProductList;

// import React, { Component } from "react";

// class ProductList extends Component {
//   state = {
//     selectedProducts: [],
//   };

//   products = [
//     { id: "PEP110", name: "Pepsi", category: "Food", stock: true },
//     { id: "CLO876", name: "Close Up", category: "Toothpaste", stock: false },
//     { id: "PEA531", name: "Pears", category: "Soap", stock: true },
//     { id: "LU7264", name: "Lux", category: "Soap", stock: false },
//     { id: "COL112", name: "Colgate", category: "Toothpaste", stock: true },
//     { id: "DM881", name: "Dairy Milk", category: "Food", stock: false },
//     { id: "LI130", name: "Liril", category: "Soap", stock: true },
//     { id: "PPS613", name: "Pepsodent", category: "Toothpaste", stock: false },
//     { id: "MAG441", name: "Maggi", category: "Food", stock: true },
//   ];

//   handleCheckboxChange = (productId) => {
//     const { selectedProducts } = this.state;
//     const isSelected = selectedProducts.includes(productId);

//     if (isSelected) {
//       this.setState({
//         selectedProducts: selectedProducts.filter((id) => id !== productId),
//       });
//     } else {
//       this.setState({
//         selectedProducts: [...selectedProducts, productId],
//       });
//     }
//   };

//   render() {
//     const { selectedProducts } = this.state;
//     const selectedProductNames = this.products
//     .filter((product) => selectedProducts.includes(product.id))
//     .map((product) => product.name)
//     .join(", ");

//     const selectedDetails = this.products
//       .filter((product) => selectedProducts.includes(product.id))
//       .map((product) => (
//         <div className="row" key={product.id}>
//           <div className="col">{product.name}</div>
//           <div className="col">{product.category}</div>
//           <div className="col">{product.id}</div>
//           <div className="col">
//             {product.stock ? "True" : "False"}
//           </div>
//         </div>
//       ));

//     return (
//       <div className="container">
//         <div className="row border">
//           <div className="col-3 border">
//             {this.products.map((product) => (
//               <div key={product.id}>
//                 <input
//                   type="checkbox"
//                   checked={selectedProducts.includes(product.id)}
//                   onChange={() => this.handleCheckboxChange(product.id)}
//                 />
//                 {product.name}
//               </div>
//             ))}
//           </div>

//           <div className="col-9 border">
//             <h2>Selected Products : {selectedProductNames}</h2>
//             {selectedProducts.length > 0 && (
//               <div className="container">
//                 <div className="row">

//                 </div>
//                 {selectedDetails}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default ProductList;
