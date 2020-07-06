import React, { Component } from 'react';
import { Media, Player, controls } from 'react-media-player'
import './Playlist.css';

class Playlist extends Component {

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
