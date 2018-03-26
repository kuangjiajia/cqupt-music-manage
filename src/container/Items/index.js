import React, { Component } from 'react'
import { Table, Button } from 'antd'
import { columns, data} from './config.js'
import './items.css'
class Items extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
    data
  };
  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  }
  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }
  onAdoptChange = () => {
    const selectedRowKeys = this.state.selectedRowKeys
    const data = this.state.data
    for(let i = 0; i < selectedRowKeys.length; i++) {
        data[selectedRowKeys[i]]['adopt'] = 1
    }
    this.setState(data)
  }
  onDelItem = () => {
    const selectedRowKeys = this.state.selectedRowKeys
    const data = this.state.data
    for(let i = 0; i < selectedRowKeys.length; i++) {
        data.splice(selectedRowKeys[i],1)
    }
    this.setState(data)
  }
  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button
            type="primary"
            onClick={this.start}
            disabled={!hasSelected}
            loading={loading}
          >
            Reload
          </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
          <Button className="del btn" onClick={this.onDelItem}>删除</Button>
          <Button className="adopt btn" onClick={this.onAdoptChange}>采纳</Button>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data} />
      </div>
    );
  }
}




export default Items