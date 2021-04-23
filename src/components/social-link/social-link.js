import React, { Component } from "react";


import "./social-link.sass";


export default class SocialLink extends Component {
    render() {
        const {links} = this.props;
        const elements = links.map(item => {
            const {name} = item;
            const {link} = item;
            return (
               <a href={link} className="social-link"><span className={name}></span></a>
            )
        });
        return elements;
    }
}