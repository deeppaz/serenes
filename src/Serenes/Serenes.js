import React, { Component } from 'react'
import BGifs from '../data/BGif.json';
//style
import './Serenes.css';

class Serenes extends Component {
    constructor() {
        super();
        this.state = {
            BGif: Math.floor(Math.random() * BGifs.length),
        };
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                BGif: Math.floor(Math.random() * BGifs.length),
            });
        }, 15000);
    }
    render() {
        return (
            <div>
                <img src={BGifs[this.state.BGif].gifs}
                    style={{
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",

                        width: "100%",
                        height: "100%",
                        position: "fixed",
                        top: 0,
                        left: 0,
                        zIndex: -100,
                    }}
                    alt="bgifs"
                />
            </div>
        )
    }
}

export default Serenes
