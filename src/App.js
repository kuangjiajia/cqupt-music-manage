import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';
import Login from './component/login/login'
import LayoutPage from './component/page/page'
import { BrowserRouter } from 'react-router-dom'
// import { store } from './store/index.js'
// import { Provider } from 'react-redux'

class App extends Component {
  render() {
    return (
      // <Provider store={store}>
        <BrowserRouter>
            <LayoutPage />
        </BrowserRouter>
      // </Provider>
    );
  }
}

export default App;
