import React, { Children, createContext,useState,useMemo } from 'react'





export const CountContext = createContext()


export default function CountContextProvider(props) {



  const myName = "Toseef "

  const [add, setAdd] = useState(0)
  const [minus, setMinus] = useState(100)

  

  const multplication = useMemo( () => {

    console.log("Multplication is working with useMemo Hook " )
    return add * 10

  },[add])

  return (
   <CountContext.Provider value={{ myName,add,minus,setAdd,setMinus,multplication }} >
      {props.children }
    </CountContext.Provider>

  )
}
