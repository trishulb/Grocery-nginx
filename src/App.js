import React, { Component } from 'react';
import './App.css';
import SelectProduct from './productList/SelectProduct';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import DisplayCart from './productList/DisplayCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

class App extends Component {
  render() {
    return (
      <div>
          <div className="App">
            <header className="App-header">
              <b>Add Iteams</b>
            </header>    
          </div>
          
          <div>
          <Card>
          <CardContent>
          <Router>
               <div style={{paddingLeft: "10%"}}> 
                 <aside> 
                 
                <IconButton aria-label="Cart" style={{margin: '5px'}}>
                <a href={'/showcart'}>
                    <Badge badgeContent={4} color="primary" className="App-badge">
                        <ShoppingCartIcon/>       
                     </Badge>
                </a>
                 </IconButton>
                  
                <Link to={'/'}>Add to cart</Link>
                    </aside>
                    <main>
                    <Route exact path="/showcart" component={DisplayCart} />
                    <Route exact path="/" component={SelectProduct} />
                    </main>
                </div>
          </Router>
          </CardContent>
          </Card>
          </div>
      </div>
    );
  }
}

export default App;
