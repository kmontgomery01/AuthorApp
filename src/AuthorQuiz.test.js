import React from 'react';
import ReactDOM from 'react-dom'; 
import AuthorQuiz from './AuthorQuiz';
import { exportAllDeclaration } from '@babel/types'; 

import Paul from './images/PaulStamets.jpeg';
import Terence from './images/TerranceMcKenna.jpeg';
import Wilson from './images/WilsonRawls.jpeg';
import Stephen from './images/StephenKing.jpeg';

import Enzyme, {mount, shallow, render} from 'enzyme';  
//import Adapter from 'enzyme-adapter-react-16';  
//Enzyme.configure({adapter: new Adapter()}); 

const state = {
  turnData: {
    books: ['Psilocybin Mushrooms of the World', 'Growing Gourmet and Medicinal Mushrooms',
    'Psilocybe Mushrooms & Their Allies','Mycelium Running: How Mushrooms Can Help Save the World',
    'Psilocybin: Magic Mushroom Growers Guide', 'Food of the Gods','Where the Wild Fern Grows','It', 
    'The GunSlinger'],
    author: {
      name: 'Stephen King',
      imageSrc: Stephen,
      imageSource: 'Google Images',
      books: ['It', 'The GunSlinger']
    }
  },
  highlight:'none'
}


describe("Author Quiz", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AuthorQuiz {...state} onAnswerSelected={()=>{}}/>, div);
  });
});