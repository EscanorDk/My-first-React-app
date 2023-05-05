import {cars as carsData} from "./cars.data"
import CarItem from "./car-item/CarItem"
import CreateCarForm from "./create-car-form/CreateCarForm"
import { useEffect, useState } from "react"

function Home() {

    const [cars,setCars] = useState([]);

    useEffect(()=>{
      const fetchData = async ()=>{
        const response = await fetch("http://localhost:4200/cars");
        const data = await response.json();
        setCars(data)
      }

      fetchData();
    },[])
    
    return (
      <div>

        <h1>Cars catalog</h1>
        <CreateCarForm setCars={setCars}/>

        <div>

          {cars.length ? cars.map(car=>
          
          (<CarItem key={car.id} car={car}/>))
          
          : <p>There are no cars</p>

          }
        </div>
      </div>
    )
  }
  
  export default Home