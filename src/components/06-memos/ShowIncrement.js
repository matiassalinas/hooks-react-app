import React from 'react'

export const ShowIncrement = ({increment}) => {

    console.log("generado");

    return (
        <button
            onClick={()=>{
                increment();
            }}
        >
            Incrementar
        </button>
    )
}
