import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [user,setUser] = useState({});

    const navigator = useNavigate();

    const handleChange = (e)=>{
        const {name, value} = e.target;

        setUser({...user,[name]:value});
     }

    const handleSubmit = (e)=>{
        e.preventDefault();
        createUser();        
    } 

    const createUser = async()=>{
        try {
            const res = await axios.post('http://localhost:8081/api/user',user);
            console.log(res);   
            navigator('/login');
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>
            <div className="main-wrapper">
                <div className="
    auth-wrapper
    d-flex
    no-block
    justify-content-center
    align-items-center
    bg-dark
  ">
                    <div className="auth-box bg-dark border-top border-secondary">
                        <div>
                            <div className="text-center pt-3 pb-3">
                                <span className="db"><img src="../assets/images/logo.png" alt="logo" /></span>
                            </div>
                            {/* Form */}
                            <form className="form-horizontal mt-3" action="" onSubmit={handleSubmit}>
                                <div className="row pb-4">
                                    <div className="col-12">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text bg-success text-white h-100" id="basic-addon1"><i className="mdi mdi-account fs-4" /></span>
                                            </div>
                                            <input type="text" name='name' onChange={handleChange} value={user.name || ''} className="form-control form-control-lg" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" required />
                                        </div>
                                        {/* email */}
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text bg-danger text-white h-100" id="basic-addon1"><i className="mdi mdi-email fs-4" /></span>
                                            </div>
                                            <input type="email" name='email' onChange={handleChange} value={user.email || ''} className="form-control form-control-lg" placeholder="Email Address" aria-label="Username" aria-describedby="basic-addon1" required />
                                        </div>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text bg-warning text-white h-100" id="basic-addon2"><i className="mdi mdi-lock fs-4" /></span>
                                            </div>
                                            <input type="password" name='password' onChange={handleChange} value={user.password || ''} className="form-control form-control-lg" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" required />
                                        </div>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text bg-info text-white h-100" id="basic-addon2"><i className="mdi mdi-lock fs-4" /></span>
                                            </div>
                                            <input type="password" name='confirmPassword' onChange={handleChange} value={user.confirmPassword || ''} className="form-control form-control-lg" placeholder=" Confirm Password" aria-label="Password" aria-describedby="basic-addon1" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row border-top border-secondary">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <div className="pt-3 d-grid">
                                                <button className="btn btn-block btn-lg btn-info" type="submit">
                                                    Sign Up
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* ============================================================== */}
                {/* Login box.scss */}
                {/* ============================================================== */}
                {/* ============================================================== */}
                {/* Page wrapper scss in scafholding.scss */}
                {/* ============================================================== */}
                {/* ============================================================== */}
                {/* Page wrapper scss in scafholding.scss */}
                {/* ============================================================== */}
                {/* ============================================================== */}
                {/* Right Sidebar */}
                {/* ============================================================== */}
                {/* ============================================================== */}
                {/* Right Sidebar */}
                {/* ============================================================== */}
            </div>

        </div>
    )
}

export default Register
