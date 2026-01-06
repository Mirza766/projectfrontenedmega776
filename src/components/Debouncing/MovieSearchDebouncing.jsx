import React, { useEffect, useState } from 'react'

function useDebouncing(value,delay) {

const [debounceValue,seteDebounceValue]=useState(value);
useEffect(()=>{
    const handler=setTimeout(()=>{
      seteDebounceValue(value)
    },delay);

    return ()=>{
        clearTimeout(handler);
    };  
},[value,delay])

  return debounceValue
}

export default useDebouncing