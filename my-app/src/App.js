
import React, { Component } from 'react';
import './App.css';
import Dashboard from './dashboard';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/swiper.min.css';
import '../assets/css/animate.css';
import '../assets/css/iconfont.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/magnific-popup.css';
import '../assets/css/bootsnav.css';
import '../assets/css/style.css';
import '../assets/css/responsive.css';
import '../assets/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js';


class App extends Component {
  render() {
    return (
      <div >
        <Dashboard />
      </div>
    );
  }
}

export default App;
