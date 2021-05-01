import React from 'react'
import './login.css';


const Register = () => {
    return (
        <div>
            <div style={{"marginBottom":"80px"}} ></div>
            <div class="card">
                <div class="container">
                    <h4><b>Register</b></h4> 
                    <form>
                    <input type="text" size="40" placeholder="Name" required /> <br />
                    <input type="email" size="40" placeholder="Email" required /> <br />
                    <input type="password" size="40" placeholder="Password" required /> <br />
                    <input type="password" size="40" placeholder="Confirm Password" required /> <br />
                    <input type="submit" value="Submit"/>
                    </form>
                </div>
                </div>
        </div>
    )
}

export default Register ;