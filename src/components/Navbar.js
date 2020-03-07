import React from 'react';
//  import Home from '../components/Home.js'
import {Link} from "react-router-dom";
class Navbar extends React.Component{
    render(){
        return(
          <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                
                    <Link to="/bank" className="brand-logo">
                    BrandLogo
                </Link>
            </nav>
        </div>
        )
};
};
export default Navbar;