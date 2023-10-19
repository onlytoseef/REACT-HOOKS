import React from 'react'
import { Route, Routes } from 'react-router-dom'

// Pages
import UseContext from './UseContext'
import UseState from './UseState'
import UseRefaandUseMemo from "./UseRefaandUseMemo"
import not from "../../../Assets/Images/not.png"
import UseReducer from './UseReducer'


export default function Index() {
    return (
        <Routes>

            <Route path='/useContext' element={<UseContext />} />
            <Route path='/UseState' element={<UseState />} />
            <Route path='/UseRefaandUseMemo'   element={<UseRefaandUseMemo/>}/>
            <Route path='/UseReducer'   element={<UseReducer/>}/>
            <Route path='*' element={not} />

        </Routes>
    )
}
