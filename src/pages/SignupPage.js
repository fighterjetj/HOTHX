import './signin.css'
import '../components/general.css'
import React, { useState } from 'react';
import authSignup from '../backend/auth/authSignup';
import { useNavigate } from 'react-router-dom';




function SignIn() {
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
        let {name, email, password, confirm} = formData;
        console.log(formData);
        await authSignup(name, email, password, confirm).then(() => {
            navigate('/');}).catch((e) => {
            setErrmsg(String(e));
        });
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
                        name="confirm"
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