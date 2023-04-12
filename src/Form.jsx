import React from "react";

const Form = () => {
    return (
        <>
            <form>
                <div className="form-group">
                    <label>Full Name:</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=" Name" autoComplete="off" />
                </div>
                <div className="form-group">
                    <label>Email address:</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" autoComplete="off" />
                </div>
                <div className="form-group">
                    <label>Phone No.</label>
                    <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Phone Number" autoComplete="off" />
                </div>
                <div className="form-group">
                    <label>Address with zip code:</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Address" autoComplete="off" />
                </div>
                
                <div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </>
    )
}
export default Form;