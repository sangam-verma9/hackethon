import React from "react";
import img from "./images/dis.png"
const Discussion = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 my-3 backdisscussion">
                        
                        <form className="mt-5">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Name:</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email:</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">About:</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"placeholder="Enter about you" />
                            </div>

                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <div className="col-md-6 my-3">
                        <img src={img} className="img-fluid" alt=".." />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Discussion