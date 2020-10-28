import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { process } from '../../helpers/process';
import '../02-useEffect/effects.css';

export const MemoHook = () => {

    const { state, increment } = useCounter( 10 );

    const [show, setShow] = useState(true);

    const memoProcess = useMemo(() => process(state), [state]);

    return (
        <div>
            <h1>MemoHook! </h1>
            <p>Counter: <small>{ state }</small></p>
            <p>{ memoProcess  }</p>
            <button onClick={()=>increment(1)}>Increment Counter</button>
            <button onClick={()=>setShow(!show)} >Show/Hide {JSON.stringify(show)}</button>
        </div>
    )
}
