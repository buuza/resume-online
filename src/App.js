import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {},
      activityData: {},
      isLoaded: false,
      error: null
    };
  }

  //simple api implementation to get random activity
  getRandomFact(){
    fetch("https://www.boredapi.com/api/activity")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            activityData: result
          });
        },
        // it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            activityData: error
          });
        }
      )
  }

  //populate resume data from json file
  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
    this.getRandomFact();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Contact data={this.state.resumeData.main}
        activities={this.state.activityData}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
