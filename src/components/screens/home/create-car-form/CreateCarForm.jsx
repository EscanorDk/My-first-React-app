import { useState } from "react"
import styles from "./CreateCarForm.module.css"

const clearData = {
    name:"",
    price:"",
    image:""
}

function CreateCarForm({setCars}){

    const [data, setData] = useState(clearData);

    const createCar = (e)=>{
        e.preventDefault();
        setCars((prev)=>[...prev,{id:++prev.length,...data}]);
        setData(clearData);
    };
    
    return (
        <form action="" className={styles.form}>
            <input 
            type="text"
            placeholder="Name"
            onChange={(e)=>setData((prev)=> ({...prev, name:e.target.value}))}
            value={data.name} 
            />
            <input 
            type="text"
            placeholder="Price"
            onChange={(e)=>setData((prev)=> ({...prev, price:e.target.value}))}
            value={data.price} 
            />
            <input 
            type="text"
            placeholder="Image"
            onChange={(e)=>setData((prev)=> ({...prev, image:e.target.value}))}
            value={data.image} 
            />
            <button className="btn" onClick={e=>createCar(e)}>Create</button>
        </form>
    )

}

export default CreateCarForm
