import './signin.css'
import '../components/general.css'
import authLogin from '../backend/auth/authLogin';
import { useNavigate } from 'react-router-dom';

import React, { useState } from 'react';

function SignupPage() {
    const navigate = useNavigate();
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
    
    async function handleSubmit(event) {
        event.preventDefault();
        let {email, password} = formData;
        console.log(formData);
        await authLogin(email, password).then(() => {
            navigate('/');}).catch((e) => {
            setErrmsg(String(e));
        });
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