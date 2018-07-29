import React, { Component } from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';

import Dough from './Components/RouteComponents/DoughComponent/Dough';
import Ingredients from './Components/RouteComponents/IngredientsComponents/Ingredients';
import Review from './Components/RouteComponents/ReviewComponent/Review'



class App extends Component {
  state = {
    dough: 'Thin Dough',
    ingredients: []
  }
  
  selectDough = (name, type) => {
    this.setState({[name]: type});
  }

  selectIngredients = (type) => {
    if (this.state.ingredients.includes(type)) {
      let ingredients = this.state.ingredients;
      ingredients.splice(ingredients.indexOf(type), 1);
      this.setState({ingredients});
    } else {
      this.setState({ingredients: [...this.state.ingredients, type]});
    }
  }

  submit = () => {
    /**
     * Will POST to backend with as an object
     */
    //let order = {dough: this.state.dough, ingredients: this.state.ingredients, price: 5 + (0.5 * this.state.ingredients.length)};
    alert(`Order placed successfully!`);
    this.setState({dough: 'Thin Dough', ingredients: []});
  }

  render() {
    return (
      <div className="App">
        <Link exact='true' to='/' style={{color: 'darkgreen', textDecoration: 'none'}}><h1>SME Pizza</h1></Link>
        <Route exact path='/' render={() => <Link to='/dough' style={{textDecoration: 'none'}}><h2 className='build-pizza-btn'>Build Your Own Pizza</h2></Link> }/>
        <Route path='/dough' render={() => <Dough selectDough={this.selectDough} selectedDough={this.state.dough}/>}/>
        <Route path='/ingredients' render={() => <Ingredients selectIngredients={this.selectIngredients} selectedIngredients={this.state.ingredients}/>}/>
        <Route path='/review' render={() => <Review dough={this.state.dough} ingredients={this.state.ingredients} submit={this.submit}/>}/>
      </div>
    );
  }
}

export default App;
