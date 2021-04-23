import React, {Component} from "react";
import RegionFilter from "../region-filter";
import SearchPanel from "../search-panel";
import PartnerListItem from "../partner-list-item";

import "./partners.sass"
export default class Partners extends Component {
    constructor(props) {
        super(props);
        this.uniqueCityList = () => {
            const newCityList = new Set(this.props.partners.map( name => name.address.city));
            return [...newCityList];
        }
        this.state = {
            regionsFilter : "",
            cityFilter : ""
        }
    }
    partnersFilter() {
        const partnerFil =  this.props.partners.filter( item => {
            if (this.state.regionsFilter.length === 0 && this.state.cityFilter.length === 0 ) {
                return item
            } else if (this.state.regionsFilter.length !== 0 && this.state.cityFilter.length !== 0 ) {
                return  item.regionCode === this.state.regionsFilter && item.address.city === this.state.cityFilter;
            } else  {
                return  item.regionCode === this.state.regionsFilter || item.address.city === this.state.cityFilter;
            }

        })
        return partnerFil
    }

    regionsFilterFunc(regions) {
        this.setState({regionsFilter : this.state.regionsFilter === regions ? "" : regions })
    }
    cityFilterFunc(city) {
        this.setState({cityFilter : city.length === 0 ? "" : city})
    }
    render() {
        const {regions} = this.props;
        return (
            <div className="partners">
                <div className="partners__regions">
                    <RegionFilter regions={regions} onRegionsFilter={(e) => this.regionsFilterFunc(e)}/>
                </div>
                <SearchPanel city={this.uniqueCityList()} onCityFilter={(e) => this.cityFilterFunc(e)}/>
                <PartnerListItem partners={this.partnersFilter()}/>
            </div>
        )
    }
}