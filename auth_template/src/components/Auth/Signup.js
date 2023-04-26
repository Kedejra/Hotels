import {useAuth} from './AuthProvider'
import {useRef, useState} from 'react'
import { useNavigate } from 'react-router-dom';
function Signup()
{
    const authContext = useAuth();
    const usernameRef = useRef();
    const pwdRef = useRef();
    const userRef = useRef();
    const navigate= useNavigate();
    const [loader,setLoader]= useState(false);

    function onAttemptSignup(e)
    {
        e.preventDefault();
        authContext.signup(usernameRef.current.value,pwdRef.current.value);

        setLoader(true);
        setTimeout(function() {navigate('/admin/dashboard/hotels')},7000);
        setLoader(false);
    }

    return(
        <div className="container-Forms">
            {loader ? <div className="loader"></div> :
        <div className="loginform">
            <h3>Sign Up</h3>
            <form>
                <input type="text" ref={usernameRef} placeholder='Username'></input><br/>
                <input type="text" ref={pwdRef} placeholder='Password'></input><br/>
                <button onClick={onAttemptSignup}>Login</button>
            </form>
        </div>
}
        </div>
    )
}


export default Signup