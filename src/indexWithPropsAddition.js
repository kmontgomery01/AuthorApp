import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';
import PropTypes from 'prop-types';

function Sum(props) {
    return <h1>
        {props.a} + {props.b} = {props.a + props.b}
    </h1>;
}


Sum.propTypes = 
{
    a: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired
}

ReactDOM.render(<Sum a={'mush'} b={'2'} />,
    document.getElementById('root'));
//ReactDOM.render(<AuthorQuiz />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
