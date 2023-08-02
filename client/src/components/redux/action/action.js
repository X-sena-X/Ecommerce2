
//here we call the api 
// redux thunk is a middleware to get async call to api
//we can also axios to fetch data alternate to mfetch
export const getProducts = ()=> async(dispatch)=>{
  try{
    // changes for deployment before "getproducts"
    const data = await fetch(`${process.env.SERVER_URL}/getproducts`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    });
    const res = await data.json();
    console.log(res);
    // dispatch is a function to find the status of respone and pass it to reducer to carry out thyte fucnction 
    dispatch({type:"SUCCESS_GET_PRODUCTS",payload:res})
  } catch(e){
    dispatch({type:"FAIL_GET_PRODUCTS",payload:e.response})
  } 
}
