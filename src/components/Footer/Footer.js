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
            {name:"Code Of Conduct",url:"/code-of-conduct"},
            {name:"Privacy Policy",url:"/privacy-policy"},
            {name:"Feedback",url:"/feedback"},
            {name:"Contact",url:"/contact"}
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