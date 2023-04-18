import {useAuth} from './AuthProvider'
import { Outlet } from 'react-router-dom';
import { Navigate,useNavigate } from 'react-router-dom';

function Logout()
{
    const loginInfo = useAuth()
    const navigate=useNavigate();
    loginInfo.signout();
    return(
        <div className='container-Forms'>
        
        <h2 style={{margin:'auto'}}>You Have Been Logged Out</h2>
        {setTimeout(()=>{navigate('/login')},2000)}
        
        </div>
    )
}

export default Logout