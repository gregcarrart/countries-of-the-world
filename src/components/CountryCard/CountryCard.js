////////
////////
////////
//Here we can use internal state to show/hide expandable content
////////
////////
////////

import React, {Component} from 'react';

import './CountryCard.css';

class CountryCard extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            expandContent: false
        }
    }
    
    toggleExpand = () => {
        this.setState({
            expandContent: !this.state.expandContent
        });
    }
    
    formatNumber = (num) => {
        if (num) {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }
    
    render() {
        let expandState = this.state.expandContent ? '' : 'hidden';
        let expandClass = `content ${expandState}`;
        
        return (
            <article onClick={() => this.toggleExpand()}>
                <div className="article-wrapper">
                    <h3 className="content content-title country">
                        {this.props.country.name}</h3>
                    <div className={expandClass}>
                        <div className="row">
                            <div className="col-6">
                                <img src={this.props.country.flag} alt="" />
                            </div>
                            <div className="col-6">
                                <p className="content-text">Region: {this.props.country.region || 'N/A'}</p>
                                <p className="content-text">Capital: {this.props.country.capital || 'N/A' }</p>
                                <p className="content-text">Population: { this.formatNumber(this.props.country.population) || 'N/A' }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        );
    }
}


export default CountryCard;
