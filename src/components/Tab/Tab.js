import React from 'react';
import { NavLink } from 'react-router-dom';
import './Tab.scss';

class Tab extends React.Component {
    constructor(props) {
        super(props)
        this.state =
        {
            links: this.props.links === undefined ?
                [
                    { name: "Followers Post", url: "/followers-post" },
                    { name: "Community Post", url: "/community-post" },
                    { name: "Search", url: "/search" },
                    { name: "User Profile", url: "/user-profile" },
                ] : this.props.links
        }

    }
    render() {
        return (
            <div className="Tab">
                <ul id="links" >
                    {
                        this.state.links.map((h) => {
                            return (
                                <li>
                                    <NavLink to={h.url}>
                                        {h.name}
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }

}
export default Tab;