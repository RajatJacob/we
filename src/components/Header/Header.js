import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
          
class Header extends React.Component {
    constructor(props)
    {
        super(props)
        this.state= 
        {
            links: this.props.links === undefined ?
        [
            {name: "Who We Are", url: "/who-we-are"},
			{name: "Opportunities", url: "/opportunities"},
			{name: "Join Us", url: "/join-us"},
			{name: "Support", url: "/support"},
			{name: "Community", url: "/community"}
        ] : this.props.links
        }

    }
    render()
    {
        return (
        <div className="Header">
            <ul id="links" >
            {
                this.state.links.map((h) => {
                   return(
                    <NavLink to={h.url} activeClassName="active">
                        <li>
                            {h.name}  
                        </li>
                    </NavLink>
                    )
                })
            }
            </ul>
        </div> 
        );
    }

}
export default Header;
