import {cars as carsData} from "./cars.data"
import CarItem from "./car-item/CarItem"
import CreateCarForm from "./create-car-form/CreateCarForm"
import { useEffect, useState } from "react"
import { CarService } from "../../../services/CarService"
import { useNavigate } from "react-router-dom"

function Home() {

    const [cars,setCars] = useState([]);
    
    useEffect(()=>{

      const fetchData = async ()=>{
        const data = await CarService.getAll();
        setCars(data)
      }

      fetchData();
    },[])


    return (
      <div>

        <h1>Cars catalogsdfsdf</h1>
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