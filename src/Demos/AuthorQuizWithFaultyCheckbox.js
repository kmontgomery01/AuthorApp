import React, {Component} from 'react';
//import logo from './logo.svg';

import './App.css';
import './bootstrap.min.css';
import _ from 'underscore';


function Hero() {
  return(<div className="row">
    <div className="jumbotron col-10 offset-1">
      <h1>Author Quiz</h1>    
      <p>Select the book written by the author shown.</p>
    </div>
  </div>)
}

function Book({title})
{
  return ( <div className = "answer">
    <h4>{title}</h4>
  </div>)
}

function Turn(author, books){

  console.log(author);
  return (<div className="row turn" style={{backgroundColor: "white"}}>
    <div className="col-4 offset-1">
      <img src={author.author.imageSrc} className="authorimage" alt="Author"/>
    </div>
    <div className="col-6">
      {Array.from(author.books).map((title)=><Book title={title} key={title}></Book>)} 
    </div>
  </div>)
}

function Continue(){
  return <div></div>
}

function Footer(){
  return (<div id="footer" className="row">
    <p className="text-muted credit">
      All images are from <a href="https://commons.wikimedia.org/wiki/Main_Page">WikiMedia</a>
    </p>
  </div>);
}

function TestButton(props){
  const clickHandler = console.log;
  return (<button onClick={clickHandler}>Make an Event</button>);
}

function FaultyCheckBox(props){
  
  const faultyCheckHandler = (e) => {
    e.preventDefault();
    console.log("Don't tell me what to do, bruh.");
  };


  return(<input type="checkbox" onClick={faultyCheckHandler} />);
}
function AuthorQuiz ({turnData}) {
    return (
      <div className="container-fluid">
        <Hero></Hero>
        <Turn {...turnData}></Turn>
        <Continue></Continue>
        <Footer></Footer>
        <TestButton></TestButton>
        <FaultyCheckBox />
      </div>
    );
  }


export default AuthorQuiz;
