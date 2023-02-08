import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom';

export default function Receipe(){

        const [details,setDetails]=useState([])

        useEffect(()=>{
            fetch("http://localhost:3000/receipe.json")
            .then(info=>info.json())
            .then(data=>setDetails(data))
        },[])


    return(
        <>
            <div className="container-fluid bg-dark">
                <div className="row justify-content-space-between">
                    {
                        details.map((value,index)=>(
                            <div className="col-lg-3 mb-3">
                            <div class="card col-lg-12">
                            <img src={value.img} class="card-img-top container receipe-image" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">{value.desname}</h5>
                                <p class="card-text">{value.price}</p>
                                <Link to={`/receipe/${value.id}`}><a href="#" class="btn btn-primary col-12">Buy</a></Link>
                            </div>
                            </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    );
    
}