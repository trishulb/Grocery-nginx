import React, { Component } from 'react';
//import classNames from 'classnames';
//import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ProductMiddleware from '../middleware/ProductMiddleware'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';



export default class SelectProduct extends Component{

    constructor(props){

        super(props);
        this.state={
            groceryItem :"select",
            measureType:"select",
            volume:"select",
            groceryItemsList :[],
            measurements:[],
            types:["Weight","Quantity"]

        }

        this.productMiddleware = new ProductMiddleware();

    }

        ITEM_HEIGHT = 48;
        ITEM_PADDING_TOP = 8;
        MenuProps = {
            PaperProps: {
            style: {
                maxHeight: this.ITEM_HEIGHT * 4.5 + this.ITEM_PADDING_TOP,
                width: 250,
            },
          },
        };  
    
    getListOfallGroceryIteams = async ()=>{
        console.log('GrandChild did mount.');
       let response = await this.productMiddleware.getListOfallGroceryIteams();
       if(!response.hasError){
        console.log("list of all iteams ",response.groceryData);
        let groceryItemsList = response.groceryData[0].items;
        console.log(groceryItemsList);
        this.setState({groceryItemsList})
       }else{
        console.log("Error ",response.errorMessage);
       } 
 
    };

    setMeasurementType=(e)=>{
        let measurements = [];
             if(e.target.value === "Weight"){
                 measurements=[
                    "100 gm",
                    "200 gm",
                    "500 gm",
                     "1 kg"
                ];
             } else{
                 measurements=[
                    "1",
                    "2",
                    "3"
                ];
             }
        let measureType = e.target.value;
        this.setState({ measurements, measureType});

    }

    postIteamSelectedtoCart = async ()=>{
        let iteam = {
             name :this.state.groceryItem,
             type : this.state.measureType,
             volume : this.state.volume
        };
        console.log('post Iteam Selected.',iteam);
        let response = await this.productMiddleware.postIteamSelectedtoCart(iteam);

        if(!response.hasError){
            
        }else{
            console.log(response.errorMessage);
        }
    }

    componentDidMount() {
        this.getListOfallGroceryIteams();      
    }    
    

    render(){
        return(
            <React.Fragment>
           <form autoComplete="off" style={{paddingLeft: "1%"}}>
           <FormControl>
            <b>
            Products: 
            </b>

        <Select
              label="groceryItem"
              value={this.state.groceryItem}
              onChange={e => this.setState({ groceryItem: e.target.value })}
            >
              {this.state.groceryItemsList.map(name => (
                <option value={name} key={name}>
                 {name}
                </option>
              ))}
        </Select>
        <br/><br/>
        <b>
           Type: 
        </b>
        <Select
              label="measureType"
              value={this.state.measureType}
              onChange={e => this.setMeasurementType(e)}
            >
              {this.state.types.map(type => (
                <option value={type} key={type}>
                 {type}
                </option>
              ))}
        </Select>
        <br/><br/>
        <b>
           Volume: 
        </b>
        <Select
              label="volume"
              defaultValue = {this.state.measurements[0]}
              value={this.state.volume}
              onChange={e => this.setState({ volume: e.target.value })}
            >
              {this.state.measurements.map(measurement => (
                <option value={measurement} key={measurement}>
                 {measurement}
                </option>
              ))}
        </Select>

        <IconButton color="primary" aria-label="Add to shopping cart" style={{paddingTop: '30%',paddingRight: '90%'}} onClick = {()=>this.postIteamSelectedtoCart()}>  
            <AddShoppingCartIcon />
        </IconButton>
    </FormControl>
    </form>
    </React.Fragment>
    )
  }
}