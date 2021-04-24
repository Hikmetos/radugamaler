import React, {Component} from "react";
import RegionFilter from "../region-filter";
import SearchPanel from "../search-panel";
import PartnerListItem from "../partner-list-item";

import "./partners.sass"
export default class Partners extends Component {
    constructor(props) {
        super(props);

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
    getUniqueCityList(list) {
        const newList = new Set(list.map( name => name.address.city));
        return [...newList];
    }
    getRegionsFilter(regions) {
        this.setState({regionsFilter : this.state.regionsFilter === regions ? "" : regions })
    }
    getCityFilter(city) {
        this.setState({cityFilter : city.length === 0 ? "" : city})
    }
    render() {
        const {partners} = this.props;
        const {regions} = this.props;
        return (
            <div className="partners">
                <div className="partners__regions">
                    <RegionFilter regions={regions} onRegionsFilter={(e) => this.getRegionsFilter(e)}/>
                </div>
                <SearchPanel city={this.getUniqueCityList(partners)} onCityFilter={(e) => this.getCityFilter(e)}/>
                <PartnerListItem partners={this.partnersFilter()}/>
            </div>
        )
    }
}