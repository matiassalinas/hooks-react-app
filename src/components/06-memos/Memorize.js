import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';
import { Small } from './Small';

export const Memorize = () => {

    const { state, increment } = useCounter( 10 );

    const [show, setShow] = useState(true)

    return (
        <div>
            <h1>Memorize! </h1>
            <p>Counter: <Small value={ state } /></p>

            <button onClick={()=>increment(1)}>Increment Counter</button>
            <button onClick={()=>setShow(!show)} >Show/Hide {JSON.stringify(show)}</button>
        </div>
    )
}
