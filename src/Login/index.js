import './index.css'
import { useState } from 'react';
import { login } from './utils';
const Login = ()=>{
    const [username, setUsername] = useState('');
    const [Password, setPassword] = useState('');

const handleSubmit = async (event) =>{
    event.preventDefault();
    const results = await login({username,Password})
    console.log({results})
}
    return(
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input placeholder="Enter UserName" type="text" onChange={(event)=>setUsername(event.target.value)}/>
                <br/>
            <input placeholder="Enter Password" type="text" onChange={(event)=>setPassword(event.target.value)}/>
                <br/>
                <button type="submit">Login</button>
        </form>
    )
}
export default Login