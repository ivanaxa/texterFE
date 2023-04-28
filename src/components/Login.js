import React, { useState } from 'react';

function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    return(
        <>
        <form>
        <h3>Sign In</h3>
        <div className="mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Username"
          />
        </div>
        <div className="mb-2">
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid mb-2">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p>
          <a href="/register">Register</a>
        </p>
      </form>
        </>
    )

}

export default Login;