import React from "react";
import stay from "./images/stay.png"
const Content=()=>{
    return(
        <>
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <h1><i>Stay Tuned Content will upload soon.</i> </h1>
                </div>
                <div className="col-md-6">
                    <img src={stay} alt=".." />
                </div>
            </div>
        </div>
        </>
    )
}
export default Content