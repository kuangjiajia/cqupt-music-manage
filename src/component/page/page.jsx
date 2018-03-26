import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Icon } from 'antd'
import { Switch, Route, Link } from 'react-router-dom'
import AddMusic from '../../container/music/index.js'
import Announce from '../../container/announce/index.js'
import History from '../../container/history/index.js'
const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Layout className="slider-layout-style">
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          width='140'
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/music">
                <Icon type="user" />
                <span>点歌</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/annouce">
                <Icon type="video-camera" />
                <span>发布公告</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/history">
                <Icon type="delete" />
                <span>历史公告</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            <Switch>
                <Route exact path='/music' component={AddMusic}/>
                <Route path='/annouce' component={Announce}/>
                <Route path='/history' component={History}/>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo
          