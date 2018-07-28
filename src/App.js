import React, { Component } from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';

import Dough from './Components/RouteComponents/DoughComponent/Dough';
import Ingredients from './Components/RouteComponents/IngredientsComponents/Ingredients';


class App extends Component {
  state = {
    dough: '',
    ingredients: []
  }

  selectDough = (name, type) => {
    this.setState({[name]: type});
  }

  selectIngredients = (type) => {
    console.log(type);
    console.log(this.state.ingredients);
    if (this.state.ingredients.includes(type)) {
      let ingredients = this.state.ingredients;
      ingredients.splice(ingredients.indexOf(type), 1);
      this.setState({ingredients});
    } else {
      this.setState({ingredients: [...this.state.ingredients, type]});
    }
  }

  render() {
    return (
      <div className="App">
        <Link exact='true' to='/' style={{color: 'black', textDecoration: 'none'}}><h1>Pizza Picker ({this.state.dough || "Pizza not Started"}{this.state.ingredients.map(ingredient => <span key={ingredient}>, {ingredient}</span>)})</h1></Link>
        <Route exact path='/' render={() => <h2><Link to='/dough'>Get Started</Link></h2> }/>
        <Route path='/dough' render={() => <div><Dough selectDough={this.selectDough} selectedDough={this.state.dough}/><Link to='/ingredients' style={{color: 'black', textDecoration: 'none'}}><h2>Ingredients</h2></Link></div>}/>
        <Route path='/ingredients' render={() => <Ingredients selectedIngredients={this.state.ingredients} selectIngredients={this.selectIngredients}/>}/>
      </div>
    );
  }
}

export default App;
