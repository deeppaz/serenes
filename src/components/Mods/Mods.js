import React, { Component } from 'react'
import { Link } from 'react-router-dom';

//images
import Chill from '../../assets/image/icons/chill.svg'
import Hype from '../../assets/image/icons/energy.svg'
import Random from '../../assets/image/icons/random.svg'


export class Mods extends Component {
    render() {
        return (
            <div>
                <h1>Select your Mod</h1>
                <Link style={{ textDecoration: 'none' }} to="/play"><button>Chill <img width="50px" height="50px" src={Chill} alt="Chill"/></button></Link>
                
                <button>Hype <img width="50px" height="50px" src={Hype} alt="Hype"/></button>
                <button>Random <img width="50px" height="50px" src={Random} alt="Random"/></button>
            </div>
        )
    }
}

export default Mods
