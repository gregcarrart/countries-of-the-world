////////
////////
////////
//Here is where we handle the data and map it, presenting a CountryCard for each.
////////
////////
////////

import React from 'react'
import { connect } from 'react-redux'
import CountryCard from '../../components/CountryCard/CountryCard';

import './CountryCardsList.css';

let CountryCardsList = ({ countries, loading }) => {
    let countriesList = '';
    //Check to see if countries exists and if there are any in the list
    if (countries && countries.length > 0) {
        countriesList = countries.map((country, index) => (
            <div key={`${index}`} className='country-card'>
                <CountryCard country={country} />
            </div>
        ));
    } else {
        //Otherwise return message
        countriesList = <h3>Sorry, no countries found.</h3>
    }
    
    //Loading indicator based on load state
    if (loading){
        countriesList = <h3 className="loading-indicator">Loading ...</h3>
    }
  
    return (
        <div className="country-card-list">
            {countriesList}
        </div>
    );
};

const mapStateToProps = (state) => ({
    countries: state.json,
    loading: state.loading
});

CountryCardsList = connect(mapStateToProps)(CountryCardsList);

export default CountryCardsList;
