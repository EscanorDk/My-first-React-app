import { Link, useParams } from "react-router-dom";
import { CarService } from "../../../services/CarService";
import { useState,useEffect } from "react";
import CarItem from "../home/car-item/CarItem";

const CarDetail = ()=>{

    const {id} = useParams();
    const [car,setCar] = useState();
    
    useEffect(()=>{
        
        if(!id) return

        const fetchData = async ()=>{
          const data = await CarService.getById(id);
          setCar(data)
        }
  
        fetchData();
      },[id])

    

    return car ? 
        (<div>
            <Link to="/">Back</Link>
            <CarItem car={car}/>
        </div>) 
        : (<div>Not found</div>);
}

export default CarDetail;