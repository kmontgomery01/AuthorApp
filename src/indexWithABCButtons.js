import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';
import PropTypes from 'prop-types';

function Clicker({handleClick}) {
    return <div>
        <button onClick={(e) => {handleClick('A');}}>A</button>
        <button onClick={(e) => {handleClick('B');}}>B</button>
        <button onClick={(e) => {handleClick('C');}}>C</button>
    </div>
}

ReactDOM.render(<Clicker handleClick={(letter) => {console.log(letter + ' clicked');}}/>,
    document.getElementById('root'));
//ReactDOM.render(<AuthorQuiz />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
