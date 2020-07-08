import React, { Component } from 'react';
import { Media, Player, controls } from 'react-media-player'
import YTPlaylists from '../data/playlist.json';
import './Playlist.css';

class Playlist extends Component {
    constructor() {
        super();
        this.state = {
            YTPlaylist: Math.floor(Math.random() * YTPlaylists.length),
            curTime: new Date().toLocaleString(),
        };
    }
    componentWillMount() {
        setInterval(function () {
            this.setState({
                curTime: new Date().toLocaleTimeString()
            })
        }.bind(this), 1000);
    }
    render() {
        const {
            PlayPause,
            CurrentTime,
            SeekBar,
            Duration,
            MuteUnmute,
            Volume
        } = controls
        return (
            <div>

                <Media>
                    {mediaProps => (
                        <div
                            className="media"
                            onKeyDown={(null, mediaProps)}
                        >
                            <Player src={YTPlaylists[this.state.YTPlaylist].musics} className="media-player" />
                            <div className="media-controls">
                                <h1 className="saat">{this.state.curTime}</h1>
                                <PlayPause className="playButton" />
                                <CurrentTime className="currentTime" />
                                <SeekBar className="sliderTime" />
                                <Duration className="duration" />
                                <div className="volumeContainer">
                                    <MuteUnmute className="soundToggle" />
                                    <Volume className="volumeSlider" />
                                </div>
                            </div>
                        </div>
                    )}
                </Media>
            </div >
        )
    }
}

export default Playlist
