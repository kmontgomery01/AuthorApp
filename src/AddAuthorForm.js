import React, {Component} from 'react';
import ReactDOM from 'react-dom'; 

import "./AddAuthorForm.css";

class AuthorForm extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name: "",
            imageSrc: "",
            books: [],
            bookTemp: "",

        };
        this.onFieldChange = this.onFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddBook = this.handleAddBook.bind(this);
    }
    onFieldChange(event)
    {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit(event)
    {
        event.preventDefault();
        this.props.onAddAuthor(this.state);
    }

    handleAddBook(event)
    {
        this.setState({
            books: this.state.books.concat([this.state.bookTemp]),
            bookTemp: ""
        })
    }
    render(){
        return  <form onSubmit ={this.handleSubmit}>
        <div className="AddAuthorForm__input">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.onFieldChange}></input>
        </div>
        <div className="AddAuthorForm__input">
            <label htmlFor="imageSrc">Image URL</label>
            <input type="text" name="imageSrc" value={this.state.imageSrc} onChange={this.onFieldChange}></input>
        </div>
        <div className="AddAuthorForm__input">
            {this.state.books.map((book)=> <p key={book}>{book}</p>)}
            <label htmlFor="bookTemp">Books</label>
            <input type="text" name="bookTemp" value={this.state.bookTemp} onChange={this.onFieldChange} />
            <input type="button" value="+" onClick={this.handleAddBook} />
        </div>
        <input type="submit" value="Add"/>
    </form>
    }
}

function AddAuthorForm(match){
    console.log(match);
    return(
    <div className="AddAuthorForm">
        <h1>Add Author</h1>
        <AuthorForm onAddAuthor={match.onAddAuthor}></AuthorForm>
    </div>);
}

export default AddAuthorForm;