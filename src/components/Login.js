import { useState } from "react";

import AuthUser from "./AuthUser";

export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const {http, setToken} = AuthUser();

    const submitForm =() =>{
        http.post('/login',{email:email, password:password}).then((res) =>{
           setToken(res.data.user, res.data.access_token);
        })
    } 

    return (
        <div className="row justify-content-center pt-5">
            <div className="col-sm-6">
                <div className="card p-4">
                    <div className="form-group">
                        <label >Email address:</label>
                        <input type="email" className="form-control" id="email" onChange={e=>setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group mt-3">
                        <label >Password:</label>
                        <input type="password" className="form-control" id="pwd" onChange={e=>setPassword(e.target.value)}/>
                    </div>
                   
                    <button type="button" onClick={submitForm} className="btn btn-info">Login</button>

                </div>

            </div>

        </div>
    )
}