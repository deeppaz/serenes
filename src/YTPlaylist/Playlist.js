import React, { Component } from 'react';
import { Media, Player, controls } from 'react-media-player'
import './Playlist.css';

class Playlist extends Component {
    state = {
        curTime: new Date().toLocaleString(),
    }
    componentWillMount() {
        setInterval(function () {
            this.setState({
                curTime: new Date().toLocaleString()
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
                            <Player src="https://www.youtube.com/watch?v=CnAdbjG-A6c" className="media-player" />
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
