import React from 'react';
import Searchbar from './Searchbar'
import youtube from '../apis/youtube';
import VideoList from './VideosList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

    state = { videos: [], selectedVideo: null };


    onSearchSubmit = async (term) => {

        console.log(term);

        const res = await youtube.get('/search', {
            params: {
                q: term
            }
        })

        this.setState({ 
            videos: res.data.items,
            selectedVideo:res.data.items[0]
         });
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    componentDidMount(){
        this.onSearchSubmit('cars');
    }

    render() {
        return (
            <div className="ui container">
                <Searchbar onSubmit={this.onSearchSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail selectedVideo={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default App;