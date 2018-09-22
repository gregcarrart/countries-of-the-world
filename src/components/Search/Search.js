////////
////////
////////
//Search component to dispatch search term as an action to the store
////////
////////
////////

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../actions';

import './Search.css';

class Search extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            term: ''
        };
    }
    
    render() {
        return(
            <div className="input-container">
                <form
                    name="search"
                    className="search-form"
                    onSubmit={(e) => {
                            e.preventDefault();
                            this.props.onSubmit(e);
                        }}
                    >
                    <input
                        type="text"
                        className="input"
                        placeholder="Search Countries"
                        onChange={(e) => {
                            if (e.target.value === '') {
                                this.props.onClear();
                            }
                        }}
                    />
                    <button
                        type="submit"
                        className="search-button"
                    >
                        <span role="img" aria-label="search">🔍</span>
                    </button>
                </form>
            </div>    
        );
    }
};

const mapStateToProps = (state) => ({country: state.country});
const mapDispatchToProps = (dispatch) => ({
    onSubmit: (e) => {
        dispatch(fetchData(e.target.querySelector('input').value));
    },
    onClear: () => {
        dispatch(fetchData(''));
    }
});

Search = connect(mapStateToProps, mapDispatchToProps)(Search);

export default Search;
