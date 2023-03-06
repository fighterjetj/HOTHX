import './signin.css'
import '../components/general.css'
import authSignup from '../backend/auth/authSignup';

import React, { useState } from 'react';

function SignupPage() {
    const [errmsg, setErrmsg] = useState("");
    const [formData, setFormData]  = useState({
        name: "",
        email: "",
        password: "",
        confirm: ""
    });

    function handleChange(event) {
        const {name, value, type} = event.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }
    
    function handleSubmit(event) {

    }

    return (
        <div>
            <h1 className="homepageTitle">sign in</h1>
            <div className="formholder">
                <form className="form" onSubmit={handleSubmit}>
                    <input
                        className='input'
                        type="text"
                        placeholder="email"
                        name="email"
                        onChange={handleChange}
                    />
                    <input
                        className='input'
                        type="password"
                        placeholder="password"
                        name="password"
                        onChange={handleChange}
                    />
                <button className="submitbutton">Submit</button>
                </form>
            </div>
            {errmsg && <div className="error">{errmsg}</div>}
        </div>
    )
}

export default SignupPage;