import axios from "axios";

import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Form from 'react-bootstrap/Form'; 
import { useState } from "react";// Define the Login function.
export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');  
    const [err,setError] = useState(false)
    
    const submit = async e => {
        e.preventDefault();
        const user = {
            username: username,
            password: password
        };
     try{
        const result = await axios.post("http://localhost:8000/api/login/",user)
        const data = result.data
      
    
    
    console.log(result.status,"this is the result status") 


    localStorage.clear();
    localStorage.setItem('access_token', data.access);
    localStorage.setItem('refresh_token', data.refresh);
    axios.defaults.headers.common['Authorization'] =
        `Bearer ${data['access']}`;
     }
     catch(err){
        console.log(err,"this is the errror")
     }
   
            }
return (
        <Form  onSubmit={submit}>
            <div className="form-group">
                <h3 className="Auth-form-title">Sign In</h3>
                <div className="form-group mt-3">
                    <label>Username</label>
                    <input className="form-control"
                        placeholder="Enter Username"
                        name='username'
                        type='text' value={username}
                        required
                        onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="form-group mt-3">
                    <label>Password</label>
                    <input name='password'
                        type="password"
                        className="form-control mt-1"
                        placeholder="Enter password"
                        value={password}
                        required
                        onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="d-grid gap-2 mt-3">
                    <button type="submit"
                        className="btn btn-primary">Submit</button>
                </div>
            </div>
        </Form>

)
}

