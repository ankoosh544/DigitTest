import { useState } from "react";

import AuthUser from "./AuthUser";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const [inputs, setInput] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInput(values => ({ ...values, [name]: value }))

    }
    const {http, setToken} = AuthUser();
    const submitForm = () => {
        http.post('/users', inputs).then((res) => {
            navigate('/login');
        })
        .then((error) =>{
            console.log(error);
        })

    }
    return (

        <div className="row justify-content-center pt-5">
            <div className="col-sm-6 ">
                <div className="card p-4">
                    <label>Name</label>
                    <input type="text" name="name" className="form-control mb-2" value={inputs.name || ''} onChange={handleChange} />

                    <label>Email</label>
                    <input type="email" name="email" className="form-control mb-2" value={inputs.email || ''} onChange={handleChange} />

                    <label>Password</label>
                    <input type="password" name="password" className="form-control mb-2" value={inputs.password || ''} onChange={handleChange} />

                    <button type="button" onClick={submitForm} className="btn btn-info mt-2">Create</button>
                </div>
            </div>
           
        </div>

    )
}