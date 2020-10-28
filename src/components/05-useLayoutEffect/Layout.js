import React, { useLayoutEffect, useRef } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const Layout = () => {
    const { state, increment } = useCounter();
    const stateFetch = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);
    const { data } = stateFetch;
    // data => null
    // !data => true
    // !!data => false
    const { quote } = !!data && data[0]; 

    const quoteTag = useRef()

    useLayoutEffect(() => {
        console.log( quoteTag.current.getBoundingClientRect() );
    }, [ quote ])

    return (
        <div>
            <h1>Layout!</h1>
            <p ref={ quoteTag }  className="quote">"{ quote }"</p>
            <button onClick={()=> increment(1)}>Next quote</button>
        </div>
    )
}
