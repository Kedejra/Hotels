import {useAuth} from './AuthProvider'
import {useRef} from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login()
{
    const authContext = useAuth();
    const userRef = useRef();
    const pwdRef = useRef();
    const navigate= useNavigate();
    const user = useAuth();
    function onAttemptLogin(e)
    {
        e.preventDefault();
        authContext.signin(userRef.current.value,pwdRef.current.value)
          console.log(user.currentUser);
      
        //    navigate("/admin/dashboard/hotels");
          setTimeout(function() {navigate('/admin/dashboard/hotels')},7000);
        // window.location='/admin/dashboard'
        
    }

    return(
        <div className="container-Forms">
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
        </div>
        </div>

    )
}


export default Login