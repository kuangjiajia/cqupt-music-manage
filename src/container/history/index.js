import React, { Component } from 'react'
import { Table } from 'antd';
import { data, columns} from './config.js'


class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data
        }
    }
    render() { 
        return (  
            <div>
                 <Table
                    columns={columns}
                    expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
                    dataSource={this.state.data}
                />  
            </div>
        )
    }
}
 
export default History