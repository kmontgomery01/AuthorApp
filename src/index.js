import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from 'react-router-dom';
//import PropTypes from 'prop-types';
import _ from 'underscore';
import Paul from './images/PaulStamets.jpeg';
import Terence from './images/TerranceMcKenna.jpeg';
import Wilson from './images/WilsonRawls.jpeg';
import Stephen from './images/StephenKing.jpeg';
import {shuffle, sample} from 'underscore';
import {Link} from 'react-router-dom';



const authors = [
    {
        name: 'Paul Stamets',
        imageSrc: Paul,
        imageSource: 'Google Images',
        books: ['Psilocybin Mushrooms of the World', 'Growing Gourmet and Medicinal Mushrooms','Psilocybe Mushrooms & Their Allies','Mycelium Running: How Mushrooms Can Help Save the World']
    }, 
    {
        name: 'Terence McKenna',
        imageSrc: Terence,
        imageSource: 'Google Images',
        books: ['Psilocybin: Magic Mushroom Growers Guide', 'Food of the Gods']
    },
    {
        name: 'Wilson Rawls',
        imageSrc: Wilson,
        imageSource: 'Google Images',
        books: ['Where the Wild Fern Grows']
    }, 
    {
        name: 'Stephen King',
        imageSrc: Stephen,
        imageSource: 'Google Images',
        books: ['It', 'The GunSlinger']
    }
];


function getTurnData(authors) {
    const allBooks = authors.reduce(function(p, c, i){
        return p.concat(c.books);
    }, []);
    const fourRandomBooks = shuffle(allBooks).slice(0,4);
    const answer = sample(fourRandomBooks);

    return {
        books: fourRandomBooks,
        author: authors.find((author) =>
        author.books.some((title)=>
        title===answer))
    };
}

const state={    
    turnData: getTurnData(authors),
    highlight: ''
} 

function onAnswerSelected(answer){
    const isCorrect= state.turnData.author.books.some((book)=>book===answer);
    state.highlight=isCorrect ? 'correct' : 'wrong';
    render();
}
function App(){
    return <AuthorQuiz {...state} onAnswerSelected={onAnswerSelected}/>;
}

function AddAuthorForm(match){
    return(<div><h1>Add Author</h1>
    <p>{JSON.stringify(match)}</p>
    </div>);
}

function render(){
    ReactDOM.render(
    <BrowserRouter>
        <React.Fragment>
            <Route exact path='/' component={App} />
            <Route exact path='/add' component={AddAuthorForm} />
        </React.Fragment>
    </BrowserRouter>, document.getElementById('root'));
}

render();
//ReactDOM.render(<AuthorQuiz turnData={state.turnData} highlight={state.highlight} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
