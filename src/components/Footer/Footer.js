import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.scss';

class Footer extends React.Component {
    constructor(props)
    {
        super(props)
        this.state= 
        {
            links: this.props.links === undefined ?
        [
            {name:"Code Of Conduct",url:"/"},
            {name:"Privacy Policy",url:"/"},
            {name:"Feedback",url:"/"},
            {name:"Contact",url:"/"}
        ] : this.props.links
        }

    }
    render()
    {
        return (
        <div className="Footer">
            <ul id="links" >
            {
                this.state.links.map((f) => {
                   return(
                    <NavLink to={f.url} activeClassName="active">
                        <li>
                            {f.name}  
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
export default Footer;