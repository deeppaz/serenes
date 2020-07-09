import React, { Component } from 'react';
import { Media, Player, controls } from 'react-media-player'
import YTPlaylists from '../data/playlist.json';
import './Playlist.css';

class Playlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            YTPlaylist: Math.floor(Math.random() * YTPlaylists.length),
            curTime: new Date().toLocaleString(),
            active: false
        };
    }

    componentWillMount() {
        setInterval(function () {
            this.setState({
                curTime: new Date().toLocaleTimeString()
            })
        }.bind(this), 1000);
    }

    toggleSoundIcon = () => this.setState((currentState) => ({active: !currentState.active}));

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
                    <>
                        <Player autoPlay src={YTPlaylists[this.state.YTPlaylist].musics} className="media-player" />
                        <div className="media-controls">
                            <h1 className="saat">{this.state.curTime}</h1>

                            <PlayPause className="playButton" />
                            <CurrentTime className="currentTime" />
                            <SeekBar className="sliderTime" />
                            <Duration className="duration" />
                            <div className="volumeContainer">
                                <MuteUnmute  className={this.state.active ? 'soundToggle' : 'soundToggle2'} onClick={this.toggleSoundIcon} />
                                <Volume className="volumeSlider" />
                            </div>
                        </div>
                    </>
                </Media>
            </div >
        )
    }
}

export default Playlist
