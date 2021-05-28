import React, {useState} from 'react'
import PropTypes from 'prop-types'

const CounterApp=({value = 10})=>{

    const [counter, setCounter] = useState(value); 


    //handleSubstract
    const handleSubstract=(number)=>{
        setCounter(counter+number);
        // setCounter((c)=> c+1)
    }

    //handleReset
    const handleReset=()=>setCounter(value);
    
    
    return(
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>

            <button onClick={ ()=> handleSubstract(1) }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ ()=> handleSubstract(-1) }>-1</button>
        </>
    );
}

CounterApp.propTypes={
    value: PropTypes.number
}

export default CounterApp;