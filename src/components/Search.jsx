import React, {Component} from 'react'
import SearchInput from './SearchInput'
import SearchResults from './SearchResults'
import ResultStore from '../stores/ResultStore';

let getResultState = () => {
    return {
        searchResults: ResultStore.getResults()
    };
};

export default class Search extends Component {

    // Method to setState based upon Store changes
    _onChange() {
        this.setState(getResultState());
    }

    constructor() {
        super();
        this.state = getResultState();
    }

    // Add change listeners to stores
    componentDidMount() {
        ResultStore.addChangeListener(this._onChange.bind(this));
    }

    // Remove change listeners from stores
    componentWillUnmount() {
        ResultStore.removeChangeListener(this._onChange.bind(this));
    }

    render() {
        return (
            <div>
                <SearchInput />

                <SearchResults searchResults={this.state.searchResults}/>
            </div>
        )
    }
}
