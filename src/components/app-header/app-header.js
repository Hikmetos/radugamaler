import React, { Component } from 'react';

import './app-header.sass'

export default class AppHeader extends Component {
    render() {
        return(
            
            <div className="container header">
            <div className="logo"><a href="/"><span>РадугаМалер</span></a></div>
            
          
                <ul className="navigation">
                    <li><a href="/">Каталог</a></li>
                    <li><a href="/">Карта продаж</a></li>
                    <li><a href="/">Партнерам</a></li>
                    <li><a href="/">Новости</a></li>
                    <li><a href="/">Компания</a></li>
                    <li><a href="/">Контакты</a></li>
                </ul>
            <div className="header__contacts">
                <a href="tel:+78634389542">+7 (8634) 38-95-42</a>
                <a href="mailto:taganrog-raduga@mail.ru">taganrog-raduga@mail.ru</a>
            </div>
        </div>
        )
    };
};