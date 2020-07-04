import React, { Component } from 'react'
import './Playlist.css'

class Playlist extends Component {
    render() {
        return (
            <div>
                {/* <iframe title="serenesmusicplayer" className="PlaylistContainer" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https://soundcloud.com/bentrok/growing-a-little-metropolis&amp;auto_play=true&amp;color=%23000000&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true" loading="lazy">
                </iframe> */}
                <iframe title="serenesmusicplayer" className="PlaylistContainer" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https://api.soundcloud.com/users/334535459&amp;auto_play=true&amp;buying=false&amp;liking=false&amp;download=false&amp;sharing=false&amp;color=%23000000&amp;show_artwork=false&amp;show_comments=false&amp;show_playcount=false&amp;show_user=false&amp;hide_related=false&amp;visual=false&amp;start_track=0&amp;callback=true"></iframe>
            </div >
        )
    }
}

export default Playlist
