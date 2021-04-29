import React, { Component } from 'react';
import Partners from "./components/partners";
import Catalog from "./components/catalog";
import "./App.sass"
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            partners: [],
        }
    }
    componentDidMount() {
        fetch("./data.json", {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

        }).then(res => res.json()).then((result) => {
                this.setState({
                    isLoaded : true,
                    partners : result.partners,
                    data: result.data
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render() {
        const { error, isLoaded, partners, data } = this.state;
        if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Загрузка...</div>;
        } else {
            return (
                <Router>
                <div className='app container'>

                        <div className="container header">
                            <div className="logo"><a href="/"><span>РадугаМалер</span></a></div>

                            <nav>
                            <ul className="navigation">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/catalog">Продукция</Link></li>
                                <li><Link to="/partners">Карта продаж</Link></li>
                                <li><Link to="/license">Партнерам</Link></li>
                            </ul>
                            </nav>
                            <div className="header__contacts">
                                <a href="tel:+78634389542">+7 (8634) 38-95-42</a>
                                <a href="mailto:taganrog-raduga@mail.ru">taganrog-raduga@mail.ru</a>
                            </div>


                        </div>

                        <Switch>
                            <Route path="/" exact>
                                <div>5</div>
                            </Route>
                            <Route path="/partners" component={Partners}>
                                <Partners regions={data} partners={partners}/>
                            </Route>
                            <Route><Catalog/></Route>
                            <Route path="/license">
                                <About/>
                            </Route>
                        </Switch>


                </div>
                </Router>
            )
        }
    }
}

function About() {
    return <h2>About</h2>;
}