import React, { useContext } from 'react'
import {CountContext} from '../../../Context/CountContext'
import { AuthContext } from '../../../Context/AuthContext'

export default function Home() {

    const {myName} = useContext(AuthContext)

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1 className='text-center py-5' >Homepage</h1>

                        <h2>Welcome {myName}</h2>
                      

                    </div>

                </div>
            </div>

        </>
    )
}
