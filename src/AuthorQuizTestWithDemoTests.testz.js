import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';
import { exportAllDeclaration } from '@babel/types';
import Enzyme, {mount, shallow, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});


function Hello(props) {
  return <h1>Hello at {props.now}</h1>;
}

const moment = new Date(1588946400000);

describe("When testing directly", () => {
  let result;
  beforeAll( ()=> {
    result=Hello({now: moment.toISOString()});
  });

  it("returns a value", () => {
    expect(result).not.toBeNull();
  });

  it("is a h1", () => {
    expect(result.type).toBe("h1"); 
  });

  it("has children", () => {
    expect(result.props.children).toBeTruthy();
  });
});

describe("When testing with ReactDOM",  () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Hello now ={moment.toString()} />, div);
  });
});

/*Enzyme.configure({ adapter: new Adapter() }); 

describe("When testing with Enzyme", () => {
  it("renders a h1", () => {
    const wrapper = shallow(<Hello now={moment.toISOString()} />);
    expect(wrapper.find("h1").length).toBe(1);
  });
});*/

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AuthorQuiz />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("When setting up testing", () => {
  it("should be able to do maths", () => {
    expect(1+1).toBe(2);
  })
});
