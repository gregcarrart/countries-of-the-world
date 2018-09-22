import React, { Component } from 'react';
import Search from './Search/Search';
import CountryCardsList from '../containers/CountryCardsList/CountryCardsList';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Countries Of The <span role="img" aria-label="title">🌎</span></h1>
                </header>
                <div className="container">
                    <Search />
                    <CountryCardsList />
                </div>
            </div>
        );
    }
}

export default App;
