import React, { Component } from 'react';

import "./partner-list-item.sass"


import SocialLink from "../social-link";


export default class PartnerListItem extends Component {
    render() {
        const {partners} = this.props;
                return (
                    <div className="container">
                   {partners.map(partner => (
                            <div className="partner-item" data-code={partner.regionCode}>
                            <h3 className="partner-item__title">{partner.name}</h3>
                            <div className="partner-item__descr">
                            <div className="partner-item__adress"> {`${partner.address.index}, ${partner.address.city}, ${partner.address.street}  ${partner.address.home}`}</div>
                            <div className="partner-item__contacts">
                                <a className="partner-item__contacts_tel" href={`tel:${partner.telephone}`}>{partner.phone}</a>
                                <a className="partner-item__contacts_mail" href={`mailto:${partner.mail}`}>{partner.mail}</a>
                            </div>
                            <div className="partner-item__social">
                                <SocialLink links={partner.social} />
                            </div>
                            <a href={partner.webSite} className="button-link">Перейти на сайт</a>
                            </div>
                        </div>
                        ))
                    }
                    </div>

                )
            }
};
