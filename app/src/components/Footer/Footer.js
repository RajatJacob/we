import React from 'react';
import './Footer.css';


class Footer extends React.Component {
    constructor(props)
    {
        super(props)
        this.state= 
        {
            links: 
        [
            {name:"Code Of Conduct",url:"/"},
            {name:"Privacy Policy",url:"/"},
            {name:"Feedback",url:"/"},
            {name:"Contact",url:"/"}
        ]
        }

    }
}