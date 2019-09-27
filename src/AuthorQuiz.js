import React, {Component} from 'react';
import PropTypes from 'prop-types';
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

function Book({title, onClick})
{
  return ( <div className = "answer" onClick={()=> {onClick(title);}}>
    <h4>{title}</h4>
  </div>)
}

function Turn(props)
{
  //console.log(props);
  
  function mapHighlightToBgColor (highlight){
    const highlightMapping = {
      'none': 'white',
      'correct': 'blue',
      'wrong': 'orange'
    }
    return highlightMapping[highlight];
  }

 // console.log(author.highlight);
  return (<div className="row turn" style={{backgroundColor: mapHighlightToBgColor(props.highlight)}}>
    <div className="col-4 offset-1">
      <img src={props.author.imageSrc} className="authorimage" alt="Author"/>
    </div>
    <div className="col-6">
      {Array.from(props.books).map((title)=><Book title={title} key={title} onClick={props.onAnswerSelected}></Book>)} 
    </div>
  </div>)
  
 //return <div></div>
}
Turn.propTypes ={
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.string).isRequired
  }),
  books: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  highlight: PropTypes.string.isRequired
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


function AuthorQuiz ({turnData, highlight, onAnswerSelected}) {
  //console.log(turnData);  
  //console.log(highlight);
    return (
      <div className="container-fluid">
        <Hero></Hero>
        <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected}></Turn>
        <Continue></Continue>
        <Footer></Footer>
      </div>
    );
  }


export default AuthorQuiz;
