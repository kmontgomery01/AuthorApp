import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';
import PropTypes from 'prop-types';
import _ from 'underscore';

function ClickyButtons({numberOfButtons, onSelection}) {
    const makeButton = v => <button key={v} id={v} onClick ={event => onSelection(event.target.id)}>{v}</button>;
    return <div>
        {_.range(1, numberOfButtons+1).map(makeButton)}
    </div>;
}

ReactDOM.render(<ClickyButtons numberOfButtons={99} onSelection={console.log} />,
        document.getElementById('root'));
//ReactDOM.render(<AuthorQuiz />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
