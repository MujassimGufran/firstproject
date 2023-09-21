import React, { Component } from "react";
import LeftPanelForm from "./LeftPanelForm";
class LeftPanelFormComponent extends Component {
  state = {
    laptops: [
      {
        model: "AX4581",
        brand: "Acer",
        ram: "4GB",
        hardDisk: "500GB",
        rating: "3",
        processor: "i3",
      },
      {
        model: "HB2881",
        brand: "HP",
        ram: "4GB",
        hardDisk: "250GB",
        rating: "4",
        processor: "i3",
      },
      {
        model: "DM811",
        brand: "Dell",
        ram: "4GB",
        hardDisk: "1TB",
        rating: "3",
        processor: "i3",
      },
      {
        model: "AP629",
        brand: "Acer",
        ram: "6GB",
        hardDisk: "1TB",
        rating: "2",
        processor: "i3",
      },
      {
        model: "AT820",
        brand: "Acer",
        ram: "8GB",
        hardDisk: "1TB",
        rating: "4",
        processor: "i5",
      },
      {
        model: "HK008",
        brand: "HP",
        ram: "6GB",
        hardDisk: "250GB",
        rating: "3",
        processor: "i5",
      },
      {
        model: "MAir11",
        brand: "Apple",
        ram: "4GB",
        hardDisk: "128GB",
        rating: "4",
        processor: "i5",
      },
      {
        model: "MPro24X",
        brand: "Apple",
        ram: "8GB",
        hardDisk: "256GB",
        rating: "4",
        processor: "i7",
      },
      {
        model: "DL390",
        brand: "Dell",
        ram: "6GB",
        hardDisk: "500GB",
        rating: "3",
        processor: "i3",
      },
      {
        model: "AM954",
        brand: "Acer",
        ram: "8GB",
        hardDisk: "1TB",
        rating: "3",
        processor: "i7",
      },
      {
        model: "AB234",
        brand: "Acer",
        ram: "4GB",
        hardDisk: "250GB",
        rating: "2",
        processor: "i3",
      },
      {
        model: "HC874",
        brand: "HP",
        ram: "8GB",
        hardDisk: "1TB",
        rating: "1",
        processor: "i7",
      },
    ],
    optionsArray: {
      brand: ["Acer", "HP", "Dell", "Apple"],
      ram: ["4GB", "6GB", "8GB"],
      rating: ["1", "2", "3", "4"],
      processor: ["i3", "i5", "i7"],
      hardDisk: ["128GB","250GB","256GB","500GB","1TB"],
    },
    optionsSel: {
      brand: [],
      ram: [],
      processor: [],
      rating: [],
      hardDisk: [],
    },
  };

  showLaptops = () => {
    const { laptops, optionsSel } = this.state;
    const {brand, ram, processor, rating, hardDisk} = optionsSel;
    const laptops1 = brand.length > 0
    ? laptops.filter((lt) => (brand === "" || lt.brand === brand))
    : laptops;
    const laptops2 = 
    ram.length > 0 
    ? laptops1.filter((lt) => (ram === "" || lt.ram === ram))
    : laptops1;
    const laptops3 = 
    processor.length > 0 
    ? laptops2.filter ((lt)=> processor.findIndex((p) => p === lt.processor) >= 0 )
    : laptops2;
    const laptops4 = 
    rating.length  > 0
     ? laptops3.filter((lt)=> rating.findIndex((ra)=> ra ===lt.rating) >= 0) 
    : laptops3; 
    const laptops5 = 
    hardDisk.length  > 0
     ? laptops4.filter((lt)=> hardDisk.findIndex((h)=> h ===lt.hardDisk) >= 0) 
    : laptops4; 
    return (
      <div className="container">
        <h4>Selected Laptops</h4>
        <div className="row">
          <div className="col-2 border">Model</div>
          <div className="col-2 border">Brand</div>
          <div className="col-2 border">RAM</div>
          <div className="col-2 border">Hard Disk</div>
          <div className="col-2 border">Rating</div>
          <div className="col-2 border">Processor</div>
        </div>
        {laptops5.map((lt) => (
          <div className="row" key={lt.model}>
            <div className="col-2 border">{lt.model}</div>
            <div className="col-2 border">{lt.brand}</div>
            <div className="col-2 border">{lt.ram}</div>
            <div className="col-2 border">{lt.hardDisk}</div>
            <div className="col-2 border">{lt.rating}</div>
            <div className="col-2 border">{lt.processor}</div>
          </div>
        ))}
      </div>
    );
  };

  // showLaptops = () => {
  //   const { laptops, optionsSel } = this.state;
  //   const { brand, ram, processor, rating, hardDisk } = optionsSel;
  
  //   const filteredLaptops = laptops.filter(lt => {
  //     const brandMatch = brand.length === 0 || brand.includes(lt.brand);
  //     const ramMatch = ram.length === 0 || ram === lt.ram;
  //     const processorMatch = processor.length === 0 || processor.includes(lt.processor);
  //     const ratingMatch = rating.length === 0 || rating.includes(lt.rating);
  //     const hardDiskMatch = hardDisk.length === 0 || hardDisk.includes(lt.hardDisk);
  
  //     return brandMatch && ramMatch && processorMatch && ratingMatch && hardDiskMatch;
  //   });
  
  //   return (
  //     <div className="container">
  //       <h4>Selected Laptops</h4>
  //       <div className="row">
  //         <div className="col-2 border">Model</div>
  //         <div className="col-2 border">Brand</div>
  //         <div className="col-2 border">RAM</div>
  //         <div className="col-2 border">Hard Disk</div>
  //         <div className="col-2 border">Rating</div>
  //         <div className="col-2 border">Processor</div>
  //       </div>
  //       {filteredLaptops.map(lt => (
  //         <div className="row" key={lt.model}>
  //           <div className="col-2 border">{lt.model}</div>
  //           <div className="col-2 border">{lt.brand}</div>
  //           <div className="col-2 border">{lt.ram}</div>
  //           <div className="col-2 border">{lt.hardDisk}</div>
  //           <div className="col-2 border">{lt.rating}</div>
  //           <div className="col-2 border">{lt.processor}</div>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // };
  

  handleClear = () => {
    let s1= {...this.state};
    s1.optionsSel = { 
      brand: [],
      ram: [],
      processor: [],
      rating: [],
      hardDisk:[],
    };
    this.setState(s1);
  };

  handleChangeOption=(optionsSel)=>{
    let s1= {...this.state};
    s1.optionsSel = optionsSel;
this.setState(s1);
  }

  render() {
    const { optionsArray, optionsSel } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-3 border bg-light">
            <LeftPanelForm
              optionsSel={optionsSel}
              optionsArray={optionsArray}
              onChangeOption={this.handleChangeOption}
              onClear={this.handleClear}
            />
          </div>
          <div className="col-9 border">{this.showLaptops()}</div>
        </div>
      </div>
    );
  }

}
export default LeftPanelFormComponent;


// import React, { Component } from "react";
// import LeftPanelForm from "./LeftPanelForm";
// class LeftPanelFormComponent extends Component {
//   state = {
//     laptops: [
//       {
//         model: "AX4581",
//         brand: "Acer",
//         ram: "4GB",
//         hardDisk: "500GB",
//         rating: "3",
//         processor: "i3",
//       },
//       {
//         model: "HB2881",
//         brand: "HP",
//         ram: "4GB",
//         hardDisk: "250GB",
//         rating: "4",
//         processor: "i3",
//       },
//       {
//         model: "DM811",
//         brand: "Dell",
//         ram: "4GB",
//         hardDisk: "1TB",
//         rating: "3",
//         processor: "i3",
//       },
//       {
//         model: "AP629",
//         brand: "Acer",
//         ram: "6GB",
//         hardDisk: "1TB",
//         rating: "2",
//         processor: "i3",
//       },
//       {
//         model: "AT820",
//         brand: "Acer",
//         ram: "8GB",
//         hardDisk: "1TB",
//         rating: "4",
//         processor: "i5",
//       },
//       {
//         model: "HK008",
//         brand: "HP",
//         ram: "6GB",
//         hardDisk: "250GB",
//         rating: "3",
//         processor: "i5",
//       },
//       {
//         model: "MAir11",
//         brand: "Apple",
//         ram: "4GB",
//         hardDisk: "128GB",
//         rating: "4",
//         processor: "i5",
//       },
//       {
//         model: "MPro24X",
//         brand: "Apple",
//         ram: "8GB",
//         hardDisk: "256GB",
//         rating: "4",
//         processor: "i7",
//       },
//       {
//         model: "DL390",
//         brand: "Dell",
//         ram: "6GB",
//         hardDisk: "500GB",
//         rating: "3",
//         processor: "i3",
//       },
//       {
//         model: "AM954",
//         brand: "Acer",
//         ram: "8GB",
//         hardDisk: "1TB",
//         rating: "3",
//         processor: "i7",
//       },
//       {
//         model: "AB234",
//         brand: "Acer",
//         ram: "4GB",
//         hardDisk: "250GB",
//         rating: "2",
//         processor: "i3",
//       },
//       {
//         model: "HC874",
//         brand: "HP",
//         ram: "8GB",
//         hardDisk: "1TB",
//         rating: "1",
//         processor: "i7",
//       },
//     ],
//     optionsArray: {
//       brand: ["Acer", "HP", "Dell", "Apple"],
//       ram: ["4GB", "6GB", "8GB"],
//       rating: ["1", "2", "3", "4"],
//       processor: ["i3", "i5", "i7"],
//     },
//     optionsSel: {
//       brand: [],
//       ram: [],
//       processor: "",
//       rating: "",
//     },
//   };
//   showLaptops = () => {
//     const { laptops, optionsSel } = this.state;
//     const {brand, ram, processor, rating} = optionsSel;
//     const laptops1 = 
//     brand.length > 0 
//     ? laptops.filter ((lt)=> brand.findIndex((br) => br ===lt.brand) >= 0 )
//     : laptops;
//     const laptops2 = 
//     ram.length > 0 
//     ? laptops1.filter ((lt)=> ram.findIndex((r) => r ===lt.ram) >= 0 )
//     : laptops1;
//     const laptops3 = processor 
//     ? laptops2.filter ((lt)=> lt.processor === processor)
//     : laptops2;
//     const laptops4 = rating
//      ? laptops3.filter((lt=>lt.rating===rating)) 
//     : laptops3; 


//     return (
//       <div className="container">
//         <h4>Selected Laptops</h4>
//         {laptops4.map((lt) => (
//           <div className="row" key={lt.model}>
//             <div className="col-2 border">{lt.model}</div>
//             <div className="col-2 border">{lt.brand}</div>
//             <div className="col-2 border">{lt.ram}</div>
//             <div className="col-2 border">{lt.hardDisk}</div>
//             <div className="col-2 border">{lt.rating}</div>
//             <div className="col-2 border">{lt.processor}</div>
//           </div>
//         ))}
//       </div>
//     );
//   };
  
//   handleClear = () => {
//     let s1= {...this.state};
//     s1.optionsSel = { 
//       brand: [],
//       ram: [],
//       processor: "",
//       rating: "",
//     };
//     this.setState(s1);
//   };
//   handleChangeOption=(optionsSel)=>{
//     let s1= {...this.state};
//     s1.optionsSel = optionsSel;
// this.setState(s1);
//   }

//   render() {
//     const { optionsArray, optionsSel } = this.state;
    
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-3 border  bg-light">
//             <LeftPanelForm
//               optionsSel={optionsSel}
//               optionsArray={optionsArray}
//               onChangeOption={this.handleChangeOption}
//               onClear={this.handleClear}
//             />
//           </div>
//           <div className="col-9 border">{this.showLaptops()}</div>
//         </div>
//       </div>
//     );
//   }
// }
// export default LeftPanelFormComponent;
