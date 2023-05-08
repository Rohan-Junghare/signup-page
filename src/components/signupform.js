import React, {useEffect, useState} from "react";
import "./loginform.css"

const SignupForm = () => {


    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }

    const onSuccess = e => {
        alert("User signed in")
        console.log(e)
    }

    const onFailure = e => {
        alert("User sign in Failed")
        console.log(e)
    }

    return (
        <div className="cover">
            <h1>Signup</h1>
            <input type="text" placeholder="Enter your Email" />
            <input type="password" placeholder=" Create password" />
            <input type="text" placeholder="Confirm Password" />
            <input type="text" placeholder="Mobile number" />

            <div className="login-btn" onClick={popup}>Signup</div>
            
            <div className={popupStyle}>
                <h3>Signup Failed</h3>
                <p>Enter correct details</p>
            </div>
            
        </div>
    )
}

export default SignupForm