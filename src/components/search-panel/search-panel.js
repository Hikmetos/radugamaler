import React, { Component } from 'react';

import './partner-search.sass'

export default class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName :  ''
        }
    }
    searchCity(e) {
        this.setState({
            cityName : e.target.value, 
            values : this.props.city.filter((item) => {
                return e.target.value.length === 0 ? null : item.toLowerCase().includes(e.target.value.toLowerCase())
            })
        })
    }
    clickCity(e, nav) {
        this.setState({
            cityName : nav,
            values : null
        })
    }
    render() {
        const {cityName} = this.state;
        const {values} = this.state;
        console.log(this.state.cityName);
        return (
            <div className="partner-search">
            <input className="partner-search__input" type="search" placeholder="Поиск" value={cityName} onChange={(e) => this.searchCity(e)}></input>
            <ul className="partner-search__list">{values && values.length > 0 ? values.map(val => {return <li className="partner-search__button" onClick={(e) => this.clickCity(e, val)}>{val}</li>}) : null }</ul>
            </div>
        )
    }
}