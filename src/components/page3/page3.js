import React from "react";
import "./page3.css";
import { Navigate, useNavigate } from "react-router";

const Page3 = () => {
    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        navigate("/");
    }
    return(
        <div className="page3">
            <div className="page3-div">
                <h1>Page3 Component</h1>
                <button onClick={handleClick}>Go to Page1</button>
            </div>
        </div>
    )
}

export default Page3;