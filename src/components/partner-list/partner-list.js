import React, { Component } from 'react';
import PartnerListItem from '../partner-list-item/partner-list-item';



export default class PartnerList extends Component {
    handClick(e) {
        e.preventDefault();
        console.log("click po a");
    }
    render() {
        return (
            <PartnerListItem  /> 
        )
    }
}









