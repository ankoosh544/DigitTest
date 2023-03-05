import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";



export default function AuthUser(){

    const navigate = useNavigate();
    
    const getToken = () =>{
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken;
    }

    const getUser = () =>{
        const userString = sessionStorage.getItem('token');
        const user_data = JSON.parse(userString);
        return user_data;
    }
    const [token,setToken] = useState(getToken());
    const [user, setUser] = useState(getUser());


    const saveToken = (user, token) =>{
        sessionStorage.setItem('token', JSON.stringify(token));
        sessionStorage.setItem('user', JSON.stringify(user));
        setToken(token+''+user.email);
        setUser(user);
        navigate('/dashboard');


    }


    const http = axios.create({
        baseURL : "http://127.0.0.1:8000/api",
        headers:{
            "Content-Type" : "application/json"
        }
    });
    return{
        setToken:saveToken,
        token,
        user,
        getToken,
        http
    }
}

