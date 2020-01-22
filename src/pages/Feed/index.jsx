import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

class Feed extends React.Component {
    constructor(props) {
        super(props)
        this.state =
        {
            links: this.props.links === undefined ?
                [
                    { name: "Followers", url: "/followers" },
                    { name: "Community", url: "/community" },
                ] : this.props.links
        }

    }
    render() {
        return (
            <div className="Feed">
                <ul id="links" >
                    {
                        this.state.links.map((h) => {
                            return (
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
export default Feed;