import React, { Component } from 'react'
import YouTube from 'react-youtube';
import './Playlist.css'

class Playlist extends Component {
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
    render() {
        const opts = {
            height: '90',
            width: '640',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            },
        };
        return (
            <div style={{blockSize:"39px"}}>
                <YouTube containerClassName="PlaylistContainer" videoId="2g811Eo7K8U" opts={opts} onReady={this._onReady} />
            </div >
        )
    }
}

export default Playlist
