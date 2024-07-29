import React, { useState } from 'react';
import "./App.css"
const SimpleCalculator=()=>{

    const[result,setResult]=useState("");

    const clickHandler=(event)=>{
        setResult(result.concat(event.target.value))
    }
    const clearDisplay=()=>{
        setResult("");
    }
    // const calculate=()=>{
    //     setResult(eval(result).toString());
        
    // }

    const calculate = () => {
        try {
            const evaluationResult = eval(result);
            if (!isNaN(evaluationResult) && evaluationResult !== Infinity && evaluationResult !== -Infinity) {
                setResult(evaluationResult.toString());
            } else {
                setResult("Not Devide Zero");
            }
        } catch (error) {
            setResult("Not Devide Zero");
        }
    }
  
    return(
        <div className='calc'>
            <input type='text' placeholder='0' id='answer' value={result}></input>
            <input type='button' value='9' className='button' onClick={clickHandler}></input>
            <input type='button' value='8' className='button' onClick={clickHandler}></input>
            <input type='button' value='7' className='button' onClick={clickHandler}></input>
            <input type='button' value='6' className='button' onClick={clickHandler}></input>
            <input type='button' value='5' className='button' onClick={clickHandler}></input>
            <input type='button' value='4' className='button' onClick={clickHandler}></input>
            <input type='button' value='3' className='button' onClick={clickHandler}></input>
            <input type='button' value='2' className='button' onClick={clickHandler}></input>
            <input type='button' value='1' className='button' onClick={clickHandler}></input>
            <input type='button' value='0' className='button' onClick={clickHandler}></input>
            <input type='button' value='.' className='button' onClick={clickHandler}></input>
            <input type='button' value='+' className='button' onClick={clickHandler}></input>
            <input type='button' value='-' className='button' onClick={clickHandler}></input>
            <input type='button' value='*' className='button' onClick={clickHandler}></input>
            <input type='button' value='/' className='button' onClick={clickHandler}></input>
            <input type='button' value='%' className='button'onClick={clickHandler}></input>
            <input type='button' value='Clear' className='button button1' onClick={clearDisplay}></input>
            <input type='button' value='=' className='button button1' onClick={calculate}></input>
        </div>
    )
}
export default SimpleCalculator;