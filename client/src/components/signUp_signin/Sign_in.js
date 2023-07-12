import React, { useState } from 'react';
import {ToastContainer,toast} from "react-toastify";
import './css/signIn.css';
import {Link} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

//import {auth} from '../firebase';
//import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

const Sign_in = ()=>{
    const [logdata,setData] = useState({
        email:'',
        password:''
    });
    const addlog = (e)=>{
        const {name,value} = e.target;
        
        setData(()=>{
            return{
                ...logdata,
                [name]:value
            }
        })
    }
    const senddata=  async(e)=>{
        e.preventDefault();
        const {email,password} = logdata;
        // changed for deplyment "/login"
        const res = await fetch("https://server-zmuv.onrender.com/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,password
            })
        });
        const data = await res.json();
        console.log(data);

        if(res.status===422|| !data){
            //console.log("Invalid details");
            toast.error("Invalid details",{
                position:"top-center",
            })
        }else{
            //console.log("data valid");
            
            toast.success("Logged IN",{
                position:"top-center",
            })
            setData({...logdata,email:"",password:""});
        }
    }
    return(
        <div className="login">
            <Link to="/">
                <img src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="Logo" className="login_logo" />
            </Link>
            
            <div className="login_container">
                <h1>Sign-in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" 
                    name="email" 
                    id="email"
                    value={logdata.email}
                    onChange={addlog}
                     />
                    <h5>Password</h5>
                    <input type="password" name="password" 
                    value={logdata.password}
                    onChange={addlog}
                    placeholder='At least 6 char' id="password" />
                    <button type="submit" className='login_signInButton' onClick={senddata}>  Sign In</button>
                    <p>
                    By continuing, you agree to Amazon's Conditions of <a href="!">Use and Privacy Notice</a>.
                    </p>
                    
                    <Link to='/signup'>
                        <button  className="login_registerButton">Create New Account</button>
                    </Link>
                    
                </form> 
            </div>
            <ToastContainer/>
        </div>
    )
}
export default Sign_in