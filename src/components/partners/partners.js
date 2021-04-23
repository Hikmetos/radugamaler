import React, {Component} from "react";
import RegionFilter from "../region-filter";
import SearchPanel from "../search-panel";
import PartnerListItem from "../partner-list-item";

export default class Partners extends Component {
    constructor(props) {
        super(props);
        this.uniqueCityList = () => {
            const newCityList = new Set(this.props.partners.map( name => name.address.city));
            return [...newCityList];
        }
    }
    render() {
        const {partners, regions} = this.props;

        return (
            <div className="partners">
                <div className="partners__regions">
                    <RegionFilter regions={regions}/>
                </div>
                <SearchPanel city={this.uniqueCityList()}/>
                <PartnerListItem partners={partners}/>
            </div>
        )
    }
}