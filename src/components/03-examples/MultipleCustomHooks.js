import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {
    const { state, increment } = useCounter();
    const stateFetch = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);
    const { loading, data } = stateFetch;
    // data => null
    // !data => true
    // !!data => false
    const { author, quote } = !!data && data[0]; 
    return (
        <div>
            <h1>CustomHooks!</h1>
            {
                loading
                ?
                (
                    <p>Cargando...</p>
                )
                :
                (
                    <p>{ author }: "{ quote }"</p>
                )
            }
            <button onClick={()=> increment(1)}>Next quote</button>
        </div>
    )
}
