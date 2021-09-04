import React from 'react'
import "./App.css"

import 'bootstrap/dist/css/bootstrap.min.css';


const Display = ({name , capital , region,subregion , population , borders , image , languages}) => {
    return (
        <div>
            

            <div className="card bg-light" style={{width: '18rem'}}>
  <img src={image} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><font style ={{color: 'green' }} >Name</font> : {name}</h5>
    <p className ="card-text"><font style ={{color: 'green' }} >Capital</font> : {capital}</p>
    <p className ="card-text"><font style ={{color: 'green' }} >Region</font> : {region}</p>
    <p className ="card-text"><font style ={{color: 'green' }} >Sub-Region</font> : {subregion}</p>
    <p className ="card-text"><font style ={{color: 'green' }} >Population : </font>{population}</p>
    
    <p class="card-text">
        <font style ={{color: 'green' }} >Border(s) : </font>
                      {borders.map(element =>(
                          <p style ={{display:"inline" , margin:"0.3rem"}}key ={element}><font style={{color:"red"}}>{element}</font></p>
                      ))}
    </p>
    <p className ="card-text">
          <font style ={{color: 'green' }} > Language(s) :</font>
                    {languages.map(language =>(
                        <p  style ={{display:"inline" , margin:"0.3rem",}} key ={language.name}>{language.name}</p>
                    ))}
    </p>
    
  </div>
</div>
        </div>
    )
}

export default Display
