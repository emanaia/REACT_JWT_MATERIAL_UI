
import React from 'react';
import { useCount } from '../context/Context';



export default function Contador() {

    const { count, setCount } = useCount();

    return (
        <>
            <div>_{count}_ </div>

            <div> <button onClick={() => setCount(count + 1)}> + </button> <button onClick={() => setCount(count - 1)}> - </button> </div>


        </>
    );
}
