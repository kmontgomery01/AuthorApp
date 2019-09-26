import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';
//import PropTypes from 'prop-types';
import _ from 'underscore';
import Paul from './images/PaulStamets.jpeg';
import Terence from './images/TerranceMcKenna.jpeg';
import Wilson from './images/WilsonRawls.jpeg';
import Stephen from './images/StephenKing.jpeg';
import {shuffle, sample} from 'underscore';



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
    turnData: getTurnData(authors)
} 
//console.log(state);//
//console.log(state);
//ReactDOM.render(<AuthorQuiz author={authors[0]} books={authors[0].books}/>, document.getElementById('root'));
ReactDOM.render(<AuthorQuiz {...state}/>, document.getElementById('root'));
//ReactDOM.render(<TestButton />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
