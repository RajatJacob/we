import React from 'react';
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
                    <a href={f.url}>
                        <li>
                            {f.name}  
                        </li>
                    </a>
                    )
                })
            }
            </ul>
        </div> 
        );
    }

}
export default Footer;