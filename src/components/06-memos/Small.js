import React from 'react';

export const Small = React.memo(( { value } ) => {
    console.log("Llamada")
    return (
        <small>
            { value } 
        </small>
    )
}
)