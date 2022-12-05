import React from "react";
import "./page2.css";
import { Navigate, useNavigate } from "react-router";

const Page2 = () => {
    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        navigate("/");
    }
    return(
        <div className="page2">
            <div className="page2-div">
                <h1>Page2 Component</h1>
                <button onClick={handleClick}>Go to Page1</button>
            </div>
        </div>
    )
}

export default Page2;