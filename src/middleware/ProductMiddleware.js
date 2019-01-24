
import HttpRequestHandler from '../util/HttpRequestHandler'

export default class ProductMiddleware{

    constructor(){
        this.httpRequestHandler = new HttpRequestHandler();
    }

    getListOfallGroceryIteams= async ()=>{
        debugger;
        let hasError = false;
        let errorMessage = "";
        let groceryList = {};

      try{
        console.log("=====> ProductMiddleware========.>");
        let response = await this.httpRequestHandler.getListOfallGroceryIteams();
        groceryList = response.data;
       
        // {
        //     items:[
        //         'Sunflower Oils','Potato, Onion & Tomato','Toor Dal','Washing Powders','Wheat Atta','Tea','Other Vegetables','Other Fruits','Toilet Cleaners','Cheese','Toothpaste','Butter & Cream','Glucose', 'Marie & Milk Biscuits,Namkeen'
        //   ]};

       }catch(err){

        hasError = true;
        errorMessage = "grocery list not found ";

       }

       return {
        hasError: hasError,
        errorMessage: errorMessage,
        groceryData : groceryList
      };
        
        
    }

    postIteamSelectedtoCart = async (iteam)=>{
        let item = "";
        let hasError = false;
        let errorMessage = "";

        try{
            let response = await this.httpRequestHandler.postIteamSelectedtoCart(iteam);
            item =response.data;

        }catch(err){
            hasError = true;
            errorMessage = "Error while posting grocery iteam";
        }

        return {
            hasError: hasError,
            errorMessage: errorMessage,
            groceryiteam: item
        };
       
    }

    fetchAllIteminCart = async ()=>{
        let items = "";
        let hasError = false;
        let errorMessage = "";
        try{
           let response = await this.httpRequestHandler.fetchAllIteminCart();
           items =response.data;
        //    items = {items:[{
        //      id:1, 
        //      name :'Sunflower Oils',
        //      type : 'Weight',
        //      volume : '1 kg'
        //     },
        //     {
        //     id:2,
        //     name : 'Eggs',
        //     type : 'Quentity',
        //     volume : '5'
        //    }
        //   ]
        // }
        }catch(err){
            hasError = true;
            errorMessage = "Error while posting grocery iteam";
        }

        return {
            hasError: hasError,
            errorMessage: errorMessage,
            cartIteams: items
        };

    }
}