import React, { Component } from 'react';
import AppHeader from '../app-header';
import Partners from "../partners/Partners";

import './app.sass';



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
                <div className='app container'>
                    <AppHeader />
                    <Partners regions={data} partners={partners}/>
                </div>
            )
        }
    }
}



