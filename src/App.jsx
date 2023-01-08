import { useState } from "react";
import Menu from "./Menu";
import Card from './Card';
const App=()=>{
const [item,setitem]=useState(Menu);

const Mains=(main)=>{
const update =Menu.filter((elem)=>{
    return elem.category ===main;
})
setitem(update)
}

    return(
    <>
    <center>
        <div className="container d-flex justift-content-space-around">
         <button className="btn btn-warning" onClick={()=>Mains('Burger')}>Burger</button>
         <button className="btn btn-warning" onClick={()=>Mains('Fish')}>Fish</button>
         <button className="btn btn-warning" onClick={()=>Mains('Sandwich')}>Sandwich</button>
         <button className="btn btn-warning" onClick={()=>Mains('Burrito')}>Burrito</button>
         <button className="btn btn-warning" onClick={()=>Mains('Muffin')}>Muffin</button>
         <button className="btn btn-warning" onClick={()=>Mains("Taco")}>Taco</button>
         <button className="btn btn-warning" onClick={()=>Mains('Milkshake')}> Milkshake</button>
         <button className="btn btn-warning" onClick={()=>Mains('Cheeseburger')}>Cheeseburger</button>
        <button className="btn btn-warning" onClick={()=>setitem(Menu)}>All</button>
        </div>
    </center>
    <br />
    <br />
    <Card item={item}/>




    </>
)
}
export default App;