import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };

    onTextChange = (event) => {
        console.log(event.target.value);
        this.setState({ term: event.target.value });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);


    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search </label>
                        <input type="text" value={this.state.term} onChange={this.onTextChange} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;