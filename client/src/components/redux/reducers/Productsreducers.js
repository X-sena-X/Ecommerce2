
// we store all teh data into a blank array
const products = [];

export const getProductsReducers = (state={products},action)=>{
    switch(action.type){
        case "SUCCESS_GET_PRODUCTS":
            return {products:action.payload}
        case "FAIL_GET_PRODUCTS":
            return{error:action.payload}
        default  : return state
    }
}