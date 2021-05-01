import React,{useState} from 'react'
import './login.css';

const Login = () => {
    const [data,setData] = useState({
        email:'',
        password:''
    })
    const {email,password} = data;
    
    const emailHandler = (e) =>{
            setData({...data,email:e.target.value})
    }

    const passHandler = (e) =>{
        setData({...data,password:e.target.value});
    }
    const [checker,setChecker] = useState(false);

    const onSubmit = (e) =>{
        e.preventDefault();
        if(password.length <=5 ){
            setChecker(true);
        }
        else{
            console.log({email,password});
            setChecker(false);
        }
        

    }
    


    return (
        <div>
            <div style={{"marginBottom":"80px"}} ></div>
            <div className="card">
                <div className="container">
                    <h4><b>Login</b></h4> 
                    <form onSubmit={e => onSubmit(e)}>
                    <input type="text" size="40" placeholder="Email" 
                    onChange={(e) => emailHandler(e)}
                    name="email" value={email} equired /> <br />

                    <input type="password" size="40" placeholder="password"
                    onChange={(e) => passHandler(e)}
                    name="password" value={password} required /> <br />
                    {checker && <p style={{"color":"red"}}>Password should be greater than 5 letter</p> }
                    <input type="submit" value="Submit"/>
                    </form>
                    
                </div>
                </div>

        </div>
    )
}

export default Login ;