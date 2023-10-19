import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Frontend from "./Frontend"
import Auth from "./Auth"
import Hooks from './Frontend/Hooks'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'



export default function Index() {
    return (
        <>
            

                <Header />
                <main>
                    <Routes>



                        <Route path='/*' element={<Frontend />} />
                        <Route path='/Auth/*' element={<Auth />} />
                        <Route path='/Hooks/*' element={<Hooks />} />



                    </Routes>
                </main>



               <footer>
               <Footer />
               </footer>
            

        </>
    )
}
