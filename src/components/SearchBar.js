import React, { Component } from 'react';

class SearchBar extends Component {

    state = {
        searchWord: ''
    };

    changeHandle = (searchWord) => {
        this.setState({ searchWord }); // searchWord : searchWord
        this.props.searchHandle(searchWord); 
    }

    render() {
        return (
            <div className="col-12 searchBox">
                <input type="text" className="form-control" 
                       name="searchWord" placeholder="Search"
                       value={this.state.searchWord}
                       onChange={ e => this.changeHandle(e.target.value) }
                />
            </div>
        );
    }
}

export default SearchBar;