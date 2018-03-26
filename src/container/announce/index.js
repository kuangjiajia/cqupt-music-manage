import React, { Component } from 'react'
import InputAnnounce from './input.js'
import './index.css'
class Announce extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="music">
                <div className="music-header">
                    <h1 className="add-music">公告</h1>
                </div>
                <InputAnnounce />
            </div>
        )
    }
}
 
export default Announce;