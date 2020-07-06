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
                {/* <iframe title="serenesmusicplayer" className="PlaylistContainer" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https://api.soundcloud.com/users/334535459&amp;auto_play=true&amp;buying=false&amp;liking=false&amp;download=false&amp;sharing=false&amp;color=%23000000&amp;show_artwork=false&amp;show_comments=false&amp;show_playcount=false&amp;show_user=false&amp;hide_related=false&amp;visual=false&amp;start_track=0&amp;callback=true"></iframe> */}
                {/* <div className='player-wrapper'>
                    <ReactPlayer
                        playing="true"
                        muted="true"
                        playbackRate="3"
                        config={{
                            youtube: {
                              playerVars: { showinfo: 0 }
                            }
                          }}
                        className="react-player"
                        url={[
                            'https://www.youtube.com/watch?v=oUFJJNQGwhk',
                            'https://www.youtube.com/watch?v=jNgP6d9HraI'
                        ]}
                    />
                </div> */}
                <Media>
                    {mediaProps => (
                        <div
                            className="media"
                            onKeyDown={(null, mediaProps)}
                        >
                            <Player src="https://www.youtube.com/watch?v=CnAdbjG-A6c" className="media-player" />
                            <div className="media-controls">
                                <PlayPause className="playButton"/>
                                <CurrentTime className="currentTime"/>
                                <SeekBar className="sliderTime" />
                                <Duration className="duration" />
                                <MuteUnmute className="soundToggle"/>
                                <Volume className="volumeSlider" />
                            </div>
                        </div>
                    )}
                </Media>
            </div >
        )
    }
}

export default Playlist
