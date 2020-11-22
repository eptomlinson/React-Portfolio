// import logo from './logo.svg';
import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: "Erik Tomlinson",
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'My Portfolio',
        subTitle: 'Here are my cool apps!',
        subSubTitle: 'Check em out!'
      },
      about: {
        title: 'About Erik Tomlinson'
      },
      contact: {
        title: 'HMU'
      }
    }
  }

    render(){
      return (
        <div> Hello World</div>
      )
    }
};

export default App;
