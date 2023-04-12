import React from "react";
import { NavLink } from "react-router-dom";
const Card = (propes) => {
    return (
        <>
            <div className="col-md-4 col-sm-10 mx-auto mb-4 cardhover">
                <div className="card">
                    <img src={propes.imgsrc} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{propes.title}</h5>
                        <NavLink to="/learnstart" className="btn btn-success">Learn Now</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;