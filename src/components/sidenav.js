import  React  from 'react';
import {NavLink} from "react-router-dom";
class Sidenav extends React.Component{
    render(){
        return (
            <div className="sidenav">
                <ul >
                    <li>
                        <NavLink   to="/bank">Bank</NavLink>
                    </li>
                    <li>
                        <NavLink  to="/fav">Favorite</NavLink>
                    </li>
                
                </ul>
            </div>
        )
    }
}
export default Sidenav;