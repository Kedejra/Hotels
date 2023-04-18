import {Link} from 'react-router-dom'

function Navigation()
{
    return(
        <div className="navbar">

            <Link className="navlink" to="/">Home</Link>
            <Link className="navlink" to="/picks">Top Picks of the Day</Link>
            {/* <Link className="navlink" to="/admin/dashboard">Find Hotels</Link> */}
            <Link className="navlink" to="/admin/dashboard/hotels">Find Hotels</Link>
            {/* <Link className="navlink" to="/about">About</Link> */}
        </div>
    )
}

export default Navigation