import React, { Component } from 'react'
import AppDispatcher from '../dispatcher/AppDispatcher';

class SearchInput extends Component {

    search(e){

        // so we don't reload the page
        e.preventDefault();
        let query = e.target.value;

        AppDispatcher.dispatch({
            searchObject: {
                query: query
            }
        });

    }

    render() {
        return (
            <form className="ui form">
                <div className="field">
                    <input type="text" name="search-bar" onChange={this.search} />
                </div>
            </form>
        )
    }
}

export default SearchInput;