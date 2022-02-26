import React from 'react'
import {useState} from 'react'
import Display from './Display'
import "./App.css"

const Home = () => {
    const[countries , setCountries] = useState([])
 const  fetchCountries =() =>{

     document.getElementById("show").style.display ="none";
     setTimeout(() => {
        fetch("https://restcountries.eu/rest/v2/region/asia")
        .then(results =>
            results.json()
        )
        .then(data =>{
            console.log(data);
            setCountries(data);
        })
        document.getElementById("show").style.display ="";
     }, 500);
    
  }
    
    return (
        <div>
            
            <h2 style={{textAlign:"center", marginTop:"5%", fontFamily:"cursive"}}>Countries In Asia</h2>
            <h2 style={{textAlign:"center",color:"orange"}}>______________</h2>
            <button onClick ={fetchCountries} className ="btn btn-success" id="fetch-btn">
                Show Countries
            </button>
            <div  className ="container" id = "show">
                {countries.map(data=>(
                    <Display key ={data.alpha2Code}
                    name = {data.name}
                    capital = {data.capital}
                    region = {data.region}
                    subregion = {data.subregion}
                    population = {data.population}
                    image = {data.flag}
                    borders = {data.borders}
                    languages = {data.languages}
                    />
                   

                ))}
            </div>
        </div>
    )
}

export default Home
