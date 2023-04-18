import AuthNav from "./Auth/AuthNav";
import {Component} from 'react'

class Header extends Component
{

    render()
    {
    return(
        <header>
            <div className="header">
            <p>
            <span className="headerText1">The </span>  <span className="headerTextSub">Art </span><span className="headerText1">of </span> <span className="headerTextMain">  Travel</span>
            </p>
            <AuthNav/>
            </div>
        </header>
    )
}
}


export default Header;