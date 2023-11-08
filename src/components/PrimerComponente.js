



import React, { useState } from 'react'

export const PrimerComponente = () => {
    
    let nombre3 = "Victor Robles";
    let web = "victorroblesweb.es";

const [nombre, setNombre] = useState("Victor");

    let cursos = [
        "Master en JavaScript",
        "Master en PHP",
        "Master en React",
        "Master en css",
       
    ];

    const cambiarNombre= (nuevoNombre)=> {
       setNombre(nuevoNobmre);
       
    }
    
    return(
        <div>
            <h1> Mi primer componente </h1>
            <p> Este es un texto en mi componente</p>
            <p> mi nombre es:<strong className=
                         {nombre.length >= 4 ? 'verde' : 'rojo'}>{nombre}</strong> </p>
            <p> Mi web es: {web} </p>

            <input type = "text" onChange={e => cambiarNombre(e.target.value)} 
                   placeholder=" Cambia el nombre "/>

                <button onClick={e => {
                    console.log (" El valor guardadoen tu estado :", nombre);
                }}   

            <button on Click = {e => cambiarNombre("VICTOR ROBLES WEB")}></button>

            <h2> Cursos: </h2>
            <ul>
                {
                    cursos.map( (curso, indice) => {
                        return(<li key={indice}>
                            {curso} 
                        </li>);
                    })
                }
            </ul>
        </div>

    )

}

    