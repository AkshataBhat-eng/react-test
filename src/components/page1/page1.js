import React from "react";
import "./page1.css";
import { Navigate, useNavigate } from "react-router";

const Page1 = () => {
    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        navigate("/page2");
    }
    const handleClickPage = (e) => {
        e.preventDefault();
        navigate("/page3");
    }
    return(
        <div className="page1">
            <div className="page1-div">
                <h1>Page1 Component</h1>
                <button onClick={handleClick}>Go to Page2</button>
                <button onClick={handleClickPage}>Go to Page3</button>
            </div>
        </div>
    )
}

export default Page1;