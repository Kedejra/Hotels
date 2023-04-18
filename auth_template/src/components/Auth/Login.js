import {useAuth} from './AuthProvider'
import {useRef, useState} from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login()
{
    const authContext = useAuth();
    const userRef = useRef();
    const pwdRef = useRef();
    const navigate= useNavigate();
    const user = useAuth();
    const [loader,setLoader]= useState(false);

    function onAttemptLogin(e)
    {
        e.preventDefault();
        authContext.signin(userRef.current.value,pwdRef.current.value)
          console.log(user.currentUser);
         setLoader(true);
        //    navigate("/admin/dashboard/hotels");
          setTimeout(function() {navigate('/admin/dashboard/hotels')},7000);
          setLoader(false);
        
    }

    return(
        <div className="container-Forms">
        {loader ? <div className="loader"></div> :
        <div className="loginform">
            <h3>Login</h3>
            <form>
                <input type="text" ref={userRef} placeholder='Username'></input><br/>
                <input type="text" ref={pwdRef} placeholder='Password'></input><br/>
                <button onClick={onAttemptLogin}>Login</button>
                
                
                <br />
                <br />
                <small>Dont have an account ?</small>
                <small><Link to='/signup'>Sign up</Link></small>
            </form>
        </div> }
        </div>

    )
}


export default Login