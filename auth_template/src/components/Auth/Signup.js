import {useAuth} from './AuthProvider'
import {useRef} from 'react'
import { useNavigate } from 'react-router-dom';
function Signup()
{
    const authContext = useAuth();
    const usernameRef = useRef();
    const pwdRef = useRef();
    const userRef = useRef();
    const navigate= useNavigate();

    function onAttemptSignup(e)
    {
        e.preventDefault();
        authContext.signup(userRef.current.value,pwdRef.current.value);

        setTimeout(function() {navigate('/admin/dashboard/hotels')},7000);
    }

    return(
        <div className="container-Forms">
        <div className="loginform">
            <h3>Sign Up</h3>
            <form>
                <input type="text" ref={usernameRef} placeholder='Username'></input><br/>
                <input type="text" ref={pwdRef} placeholder='Password'></input><br/>
                <button onClick={onAttemptSignup}>Login</button>
            </form>
        </div>
        </div>
    )
}


export default Signup