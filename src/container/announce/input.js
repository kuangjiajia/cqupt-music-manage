import React, { Component } from 'react'
import { Input, Icon, Button } from 'antd'
import './input.css'
const { TextArea } = Input
class InputAnnounce extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
  }
  emitEmpty = () => {
    this.userNameInput.focus();
    this.setState({ userName: '' });
  }
  onChangeUserName = (e) => {
    this.setState({ userName: e.target.value });
  }
  render() {
    const { userName } = this.state;
    const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
    return (
      <div>
        <div className="input-position">
            <Input
                placeholder="请输入标题(选填)"
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                suffix={suffix}
                value={userName}
                onChange={this.onChangeUserName}
                ref={node => this.userNameInput = node}
                className="input-item-style"
            />
        </div>
        <div className="textarea-position">
            <TextArea placeholder="请输入200字以内的公告~" autosize={{ minRows: 10, maxRows: 15 }}  className="textArea-item-style"/>
        </div>
        <div className="input-position">
            <Input
                placeholder="请输入发布人姓名"
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                suffix={suffix}
                value={userName}
                onChange={this.onChangeUserName}
                ref={node => this.userNameInput = node}
                className="input-item-style"
            />
        </div>
        <div className="publish">
            <Button>发布公告</Button>
        </div>
      </div>
    );
  }
}

export default InputAnnounce