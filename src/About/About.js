import React, { Component } from 'react'
import './About.css'

export class About extends Component {

    refreshPage() {
        window.location.reload();
    }

    //i used like this for performance, i would like to use the target _blank method, but reactjs gets angry. soo, yes
    playlistOrGif() {
        window.open(
            'https://github.com/deeppaz/serenes/issues',
            '_blank'
        );
    }

    sourceCode() {
        window.open(
            'https://github.com/deeppaz/serenes',
            '_blank'
        );
    }

    render() {
        return (
            <div>
                <div id="options-container">
                    <div id="options">
                        <button className="pixel" onClick={this.playlistOrGif} tabindex="-1">send playlist or gifs</button>
                        <button className="pixel" onClick={this.sourceCode} tabindex="-1">source code</button>
                        <button onClick={this.refreshPage} className="pixel">random playlist</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default About
