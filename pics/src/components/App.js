import React from 'react';
import SearchBar from './SearchBar'
import unsplash from '../api/unspash'
import ImageList from './ImageList';

class App extends React.Component {

    state = { images: [] };

     onSearchSubmit = async (term) => {

        console.log(term);

        const res = await unsplash.get('photos', {

            params: { query: term },

           
        });

        this.setState({ images: res.data });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
                Found : {this.state.images.length} images
                <ImageList images={this.state.images}/>
            </div>
        );
    }


}

export default App;