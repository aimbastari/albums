import React from 'react';
import ReactNative, {Text, View, CardSection} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends React.Component{
    state = {albums: []};

    componentWillMountWithFetch() {
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response)=> response.json())
            .then((responseJson) => {this.setState({albums: responseJson})})
            .catch((response) => {
                console.log(response);
            })

    }

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response) => {this.setState({albums: response.data})})
            .catch((response) => {console.log(response)})
    }

    renderAlbums(){
        return this.state.albums.map(album => <AlbumDetail key={album.title} album={album}/>)
    }


    render(){
        return( <View>{this.renderAlbums()}</View>)
    }


} 

export default AlbumList;