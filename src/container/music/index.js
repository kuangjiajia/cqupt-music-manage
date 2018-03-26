import React, { Component } from 'react'
import './index.css'
import { Input } from 'antd'
import '../Items/index.js'
import Items from '../Items/index.js';

const Search = Input.Search

class AddMusic extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="music">
                <div className="music-header">
                    <h1 className="add-music">点歌</h1>
                    <div className="input-position">
                        <Search
                        placeholder="input search text"
                        onSearch={value => console.log(value)}
                        enterButton
                        className="search"
                        />
                    </div>
                </div>
                <div>
                    <Items />
                </div>
            </div>
        )
    }
}
 
export default AddMusic;