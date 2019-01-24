import React,{Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ProductMiddleware from '../middleware/ProductMiddleware'


export default class DisplayCart extends Component{

 constructor(){
    super();
     this.state={
        cartItemsList :[]
     }
     this.productMiddleware = new ProductMiddleware();
 }   
//  id = 0;
//  createData(name, calories, fat, carbs, protein) {

//   let tid =this.id+1;
//   return { tid, name, calories, fat, carbs, protein };
// }

// rows = [
//   this.createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   this.createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   this.createData('Eclair', 262, 16.0, 24, 6.0),
//   this.createData('Cupcake', 305, 3.7, 67, 4.3),
//   this.createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

getAllIteminCart = async ()=>{
    console.log('GrandChild did mount.');
    let response = await this.productMiddleware.fetchAllIteminCart();
    if(!response.hasError){
        console.log("list of all iteams ",response.groceryData);
        let cartItemsList = response.cartIteams;
        console.log(cartItemsList);
        this.setState({cartItemsList})
       }else{
        console.log("Error ",response.errorMessage);
       } 
}

componentDidMount(){
    this.getAllIteminCart();
}

render(){
    return(
        <Paper style= {{  width: "90%", marginTop: "theme.spacing.unit * 3", overflowX: "auto"}}>
            <Table className="Cart-table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Produce Items</TableCell>
                        <TableCell align="right">Category </TableCell>
                        <TableCell align="right">Volume</TableCell>
                        <TableCell align="right">Comments</TableCell>
                     </TableRow>
                    </TableHead>
                <TableBody>
                    {this.state.cartItemsList.map(row => (
                        <TableRow key={row._id}>
                            <TableCell component="th" scope="row"> {row.name} </TableCell>
                                <TableCell align="right">{row.type}</TableCell>
                                <TableCell align="right">{row.volume}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                        
            </Table>

        </Paper>
     )
    }

}