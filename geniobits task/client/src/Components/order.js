import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { useParams } from "react-router-dom";

export default function Order(){

        const [details,setDetails]=useState([])
        const {id}=useParams()
        useEffect(()=>{
            fetch("http://localhost:3000/receipe.json"+id)
            .then(info=>info.json())
            .then(data=>setDetails(data))
        },[])


    return(
       <>
           <h1 className="text-center">Ordered Items</h1>
        <div className="container-fluid">
          <div className="row justify-content-around ">

 
        {details.map((value,index)=>(
          
          <>

            <div class="card siz ">
              <img src={`/receipe/${value.img}`} className="card-img-top "/>
              <div class="card-body">
                <h5 class="card-title">{`/receipe/${value.id}`}</h5>
                
                <p class="card-text text-center">{value.price}</p>
                <h1>{value.price}</h1>
                <a href="#" class="btn btn-primary">ORDER</a>
              </div>
            </div>
          
          </>
        ) 
        
        
        )}
        </div>

      </div>
   
  
   

       </>
    );
    
}