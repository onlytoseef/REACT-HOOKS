import React, { useState } from 'react'


const initalState = 0





export default function UseReducer() {

const [count,SetCount] = useState(0)


const handelIncrement = () => {
    SetCount()
}
const handelDecrement = () => {
    
}





    return (
        <div className="container py-5">
            <div className="row">
                <div className="col text-center ">
                    <h1>UseReducer</h1>


                    <div className="btn btn-success"  onClick={handelIncrement}>
                        Increment
                    </div> <br />
                    <div>
                        {count}
                    </div> <br />
                    <div className="btn btn-danger" onClick={handelDecrement} >
                        Decrement
                    </div><br />
                    <div>
                        {}
                    </div> <br />
                    <div className="btn btn-info">
                        Reset
                    </div>
                </div>
            </div>
        </div>
    )
}
