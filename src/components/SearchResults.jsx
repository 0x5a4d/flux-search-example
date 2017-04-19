import React, {Component, PropTypes} from 'react'

export default class SearchResults extends Component {
    render() {
        console.log(this.props.searchResults);
        const books = this.props.searchResults.map(function (result, index) {
            return (
                <div key={index} style={{float: "left", width: "100%"}}>
                    <div style={{float: "left"}}>
                        <img src={result.volumeInfo.imageLinks.thumbnail}/>
                    </div>
                    <div style={{float: "left"}}>
                        <h2>{result.volumeInfo.title}</h2>
                    </div>
                </div>
            )
        });

        return (
            <div>{books}</div>
        )
    }
}

SearchResults.propTypes = {
    searchResults: PropTypes.array.isRequired
};
