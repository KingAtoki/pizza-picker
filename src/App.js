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

  componentDidMount() {
    this.setState({dough: '', ingredients: []});
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

  render() {
    return (
      <div className="App">
        <Link exact='true' to='/' style={{color: 'darkgreen', textDecoration: 'none'}}><h1>SME Pizza</h1></Link>
        <Route exact path='/' render={() => <Link to='/dough' style={{textDecoration: 'none'}}><h2 className='build-pizza-btn'>Build Your Own Pizza</h2></Link> }/>
        <Route path='/dough' render={() => <Dough selectDough={this.selectDough} />}/>
        <Route path='/ingredients' render={() => <Ingredients selectIngredients={this.selectIngredients}/>}/>
        
      </div>
    );
  }
}

export default App;
