import axios from 'axios';


export default class HttpRequestHandler{
    
    ACTIVE_BASE_URL_PREFIX = "/api/";
    GROCERY_URL_SUFFIX = "grocery";
    CART_URL_SUFFIX ="cart";

    headers = {
        "Content-Type": "application/json"
    };

    getListOfallGroceryIteams = ()=>{
        console.log("HttpRequestHandler ");
        let url = this.ACTIVE_BASE_URL_PREFIX + this.GROCERY_URL_SUFFIX;
        console.log(url);
        return axios.get(url, this.headers);

    }

    postIteamSelectedtoCart =(iteam)=>{
        console.log(" post the item selected to db");
        let url = this.ACTIVE_BASE_URL_PREFIX + this.CART_URL_SUFFIX;
        console.log(url);
        return axios.post(url,iteam,this.headers);

    }

    fetchAllIteminCart = () =>{
        console.log(" get all fetchAllIteminCart");
        let url = this.ACTIVE_BASE_URL_PREFIX + this.CART_URL_SUFFIX;
        console.log(url);
        return axios.get(url, this.headers);
    }

}  





