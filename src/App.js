import logo from './logo.svg';
import './App.css';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import { useState } from 'react';

function App() {
  return (
    <div className="App">

    <Counter></Counter>
    <Counter></Counter>
     
      
    </div>
  );
}

function Counter (){

  const [count ,setCount]=useState(55)
  const increaseCount =()=>setCount(count+1);
  const decrease=()=>setCount(count-1);
  
  // const increaseCount =()=>{
  //   const newCount =count+1;
  //   setCount(newCount);
  // }
  return (
    <div>
      <h1>Count :{count}</h1>
      <button onClick={increaseCount} >increase</button>
      <button onClick={decrease} >decrease</button>
    </div>
  )
}


// {
//   products.map(product=> <Products name={product.name} price={product.price} ></Products>)
// }
{/* <Products name="Jahidul islam" job="aladin" ></Products>
<Products name="karimul  islam" job="mamar vari"></Products> */}

function Products (props){
  return (
    <div className='products'>
      <h3>Name : {props.name}</h3>
      <p>Price:{props.price}</p>


    </div>


  )
}

export default App;






// const products =[
//   {name :'laptop',price:53000},
//   {name :'phone',price:3000},
//   {name :'watch',price:5300},
//   {name :'tablet',price:5000}
 
 
//  ]
 