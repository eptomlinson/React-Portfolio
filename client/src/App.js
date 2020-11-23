// import logo from './logo.svg';
import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
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

        <div>Hello my dudes!</div>
      //   <Router>
      //   <Container className="p-0" fluid={true}>
          
      //     <Navbar className="border-bottom" bg="transparent" expand="lg">
      //       <Navbar.Brand>Garrett Love</Navbar.Brand>

      //       <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
      //       <Navbar.Collapse id="navbar-toggle">
      //         <Nav className="ml-auto">
      //           <Link className="nav-link" to="/">Home</Link>
      //           <Link className="nav-link" to="/about">About</Link>
      //           <Link className="nav-link" to="/contact">Contact</Link>
      //         </Nav>
      //       </Navbar.Collapse>
      //     </Navbar>

      //     <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
      //     <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
      //     <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
          
      //     <Footer />

      //   </Container>
      // </Router>
      )
    }
};

export default App;
