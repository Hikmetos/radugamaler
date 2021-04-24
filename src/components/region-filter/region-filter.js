import React, { Component } from 'react';

import "./region-filter.sass"

export default class RegionFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            important : null
        };
    }
    onImportant(code, e) {
        this.props.onRegionsFilter(code, e)
        this.setState(state => ({
            important : e.target.className === 'button-name' ? true : false,
            code : code
        }));
    }
    render() {
        const {regions} = this.props;
        const {important} = this.state;
        console.log(this.state);
        console.log(regions);
        const elements = regions.map((item) => {
            const {country} = item;
            const {code} = item;
                return (
                    <button type="button" className={`button-name${this.state.code === code && important ? ' important' : ''}`}  data-code={code} key={code} onClick={(e) => this.onImportant(code, e)} >{country}</button>
                )
        });
        return elements;
    }
}
