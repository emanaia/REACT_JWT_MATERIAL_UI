
import React from 'react';
import { useCount } from '../../context/Context';



export default function Counter() {

    const { count, setCount } = useCount();

    return (
        <>
            <div>Count: {count} </div>

            <div> <button onClick={() => setCount(count + 1)}> + </button> <button onClick={() => setCount(count - 1)}> - </button> </div>


        </>
    );
}
