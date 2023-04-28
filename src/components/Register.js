import React, { useState } from 'react';

function Register(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    return(
        <>
        <form>
            <h5>Register</h5>
            username: <input type="text" value={username} onChange={event => setUsername(event.target.value)} /> <br/>
            password: <input type="password" value={password} onChange={event => setPassword(event.target.value)} /> <br/>
            <input type="submit" value="Login" className="loginButton"/>
        </form>
      {errorMessage && <p className="message">{errorMessage}</p>}
        </>
    )

}

export default Register;