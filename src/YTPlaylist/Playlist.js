import React, { Component } from 'react';
import { Media, Player, controls } from 'react-media-player'
// import YTPlaylists from '../data/playlist.json';
import { YTPlaylists } from '../data/Playlist';
import './Playlist.css';

const getRandomFromRange = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};
const randomSongIndex = getRandomFromRange(0, YTPlaylists.length);

class Playlist extends Component {
    constructor() {
        super();
        this.state = {
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
        const randomSong = YTPlaylists[randomSongIndex];

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
                            <Player autoPlay src={randomSong} className="media-player" />
                            <div className="media-controls">
                                <h1 className="saat">{this.state.curTime}</h1>
                         
                                <PlayPause className="playButton" onClick={this.whenFinish === false} />
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
