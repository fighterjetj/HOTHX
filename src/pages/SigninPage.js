import './signin.css'
import '../components/general.css'
import React, { useState } from 'react';

function SignIn() {
    const [errmsg, setErrmsg] = useState("");
    const [formData, setFormData]  = useState({
        name: "",
        email: "",
        password: "",
        confirm: ""
    });

    function handleChange(event) {
        const {name, value, type, checked} = event.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }
    
    function handleSubmit(event) {
        console.log(formData);
    }

    return (
        <div>
            <h1 className="homepageTitle">sign up</h1>
            <div className="formholder">
                <form className="form" onSubmit={handleSubmit}>
                    <input
                        className='input'
                        type="text"
                        placeholder="Name"
                        name="name"
                        onChange={handleChange}
                    />
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
                    <input
                        className='input'
                        type="password"
                        placeholder="confirm password"
                        name="confirm password"
                        onChange={handleChange}
                    />
                <button className="submitbutton">Submit</button>
                </form>
            </div>
            {errmsg && <div className="error">{errmsg}</div>}
        </div>
    )
}

export default SignIn;