import React, { useState } from 'react';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {Link} from 'react-router-dom';
import './css/Sign_up.css'
const Sign_Up = ()=>{
    //const [IntCode, setint] = React.useState('');
    const [udata,setUdata] = useState({
        name:"",
        Intcode:"",
        mobile:"",
        email:"",
        password:"",
        
    });
    const handleChange = (e) => {
        const {name,value} = e.target;
        //console.log(udata);
        setUdata((e)=>{
            return{
                ...udata,
                [name]:value
            }
        })
    };
    const senddata = async(e)=>{
        e.preventDefault()
        const {name,Intcode,mobile,email,password} = udata;
        // changed for deployment "/signup"
        const res = await fetch("https://shopelites-server.vercel.app/signup",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,Intcode,mobile,email,password
            })
        });
        const data = await res.json();
        //console.log(data);
        if(res.status=== 422 || !data){
            alert("no data")

        }else{
            alert("data successfully added")
        }

    }

    return(
        <div className='signUp'>
            <Link to="/">
                <img src="" alt="Logo" className="login_logo" />
            </Link>
            <div className="signUp_container justify-center items-center">
                <form method='POST'>
                    <h1>Create Account</h1>
                    <h5>Your name</h5>
                    <input type='text' 
                    className='inputBox h-11 py-1 px-2  border-blue-700 border-2 border-solid w-auto'
                    value={udata.name}
                    onChange={handleChange}
                    placeholder='First and last name' name="name"/>
                    <h5>Mobile number</h5>
                    <div className='sigup_mobno'>
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"     
                            name="Intcode"       
                            value={udata.Intcode}
                            
                            onChange={handleChange}
                            className='InputCode h-8'
                        >
                            <MenuItem  value={213}>Algeria (+213)</MenuItem>
                            <MenuItem  value={376}>Andorra (+376)</MenuItem>
                            <MenuItem  value={244}>Angola (+244)</MenuItem>
                            <MenuItem  value={1264}>Anguilla (+1264)</MenuItem>
                            <MenuItem  value={1268}>Antigua &amp; Barbuda (+1268)</MenuItem>
                            <MenuItem  value={54}>Argentina (+54)</MenuItem>
                            <MenuItem  value={374}>Armenia (+374)</MenuItem>
                            <MenuItem  value={297}>Aruba (+297)</MenuItem>
                            <MenuItem value={61}>Australia (+61)</MenuItem>
                            <MenuItem value={43}>Austria (+43)</MenuItem>
                            <MenuItem value={1242}>Bahamas (+1242)</MenuItem>
                            <MenuItem value={880}>Bangladesh (+880)</MenuItem>
                            <MenuItem  value={375}>Belarus (+375)</MenuItem>
                            <MenuItem  value={994}>Azerbaijan (+994)</MenuItem>
                            <MenuItem  value={501}>Belize (+501)</MenuItem>
                            <MenuItem  value={973}>Bahrain (+973)</MenuItem>
                            <MenuItem  value={1441}>Bermuda (+1441)</MenuItem>
                            <MenuItem  value={1246}>Barbados (+1246)</MenuItem>
                            <MenuItem  value={975}>Bhutan (+975)</MenuItem>
                            <MenuItem  value={32}>Belgium (+32)</MenuItem>
                            <MenuItem  value={591}>Bolivia (+591)</MenuItem>
                            <MenuItem  value={229}>Benin (+229)</MenuItem>
                            <MenuItem  value={387}>Bosnia Herzegovina (+387)</MenuItem>
                            <MenuItem  value={267}>Botswana (+267)</MenuItem>
                            <MenuItem  value={55}>Brazil (+55)</MenuItem>
                            <MenuItem  value={673}>Brunei (+673)</MenuItem>
                            <MenuItem  value={359}>Bulgaria (+359)</MenuItem>
                            <MenuItem  value={226}>Burkina Faso (+226)</MenuItem>
                            <MenuItem  value={257}>Burundi (+257)</MenuItem>
                            <MenuItem  value={855}>Cambodia (+855)</MenuItem>
                            <MenuItem  value={237}>Cameroon (+237)</MenuItem>
                            <MenuItem  value={1}>Canada (+1)</MenuItem>
                            <MenuItem  value={238}>Cape Verde Islands (+238)</MenuItem>
                            <MenuItem  value={1345}>Cayman Islands (+1345)</MenuItem>
                            <MenuItem  value={236}>Central African Republic (+236)</MenuItem>
                            <MenuItem  value={56}>Chile (+56)</MenuItem>
                            <MenuItem  value={86}>China (+86)</MenuItem>
                            <MenuItem  value={57}>Colombia (+57)</MenuItem>
                            <MenuItem  value={269}>Comoros (+269)</MenuItem>
                            <MenuItem  value={242}>Congo (+242)</MenuItem>
                            <MenuItem  value={682}>Cook Islands (+682)</MenuItem>
                            <MenuItem value={506}>Costa Rica (+506)</MenuItem>
                            <MenuItem value={385}>Croatia (+385)</MenuItem>
                            <MenuItem value={53}>Cuba (+53)</MenuItem>
                            <MenuItem value={90392}>Cyprus North (+90392)</MenuItem>
                            <MenuItem value={357}>Cyprus South (+357)</MenuItem>
                            <MenuItem value={42}>Czech Republic (+42)</MenuItem>
                            <MenuItem value={45}>Denmark (+45)</MenuItem>
                            <MenuItem value={253}>Djibouti (+253)</MenuItem>
                            <MenuItem value={1809}>Dominica (+1809)</MenuItem>
                            <MenuItem value={1809}>Dominican Republic (+1809)</MenuItem>
                            <MenuItem value={593}>Ecuador (+593)</MenuItem>
                            <MenuItem value={20}>Egypt (+20)</MenuItem>
                            <MenuItem value={503}>El Salvador (+503)</MenuItem>
                            <MenuItem value={240}>Equatorial Guinea (+240)</MenuItem>
                            <MenuItem value={291}>Eritrea (+291)</MenuItem>
                            <MenuItem value={372}>Estonia (+372)</MenuItem>
                            <MenuItem value={251}>Ethiopia (+251)</MenuItem>
                            <MenuItem value={500}>Falkland Islands (+500)</MenuItem>
                            <MenuItem value={298}>Faroe Islands (+298)</MenuItem>
                            <MenuItem value={679}>Fiji (+679)</MenuItem>
                            <MenuItem value={358}>Finland (+358)</MenuItem>
                            <MenuItem value={33}>France (+33)</MenuItem>
                            <MenuItem value={594}>French Guiana (+594)</MenuItem>
                            <MenuItem value={689}>French Polynesia (+689)</MenuItem>
                            <MenuItem value={241}>Gabon (+241)</MenuItem>
                            <MenuItem value={220}>Gambia (+220)</MenuItem>
                            <MenuItem value={7880}>Georgia (+7880)</MenuItem>
                            <MenuItem value={49}>Germany (+49)</MenuItem>
                            <MenuItem value={233}>Ghana (+233)</MenuItem>
                            <MenuItem value={350}>Gibraltar (+350)</MenuItem>
                            <MenuItem value={30}>Greece (+30)</MenuItem>
                            <MenuItem value={299}>Greenland (+299)</MenuItem>
                            <MenuItem value={1473}>Grenada (+1473)</MenuItem>
                            <MenuItem value={590}>Guadeloupe (+590)</MenuItem>
                            <MenuItem value={671}>Guam (+671)</MenuItem>
                            <MenuItem value={502}>Guatemala (+502)</MenuItem>
                            <MenuItem value={224}>Guinea (+224)</MenuItem>
                            <MenuItem value={245}>Guinea - Bissau (+245)</MenuItem>
                            <MenuItem value={592}>Guyana (+592)</MenuItem>
                            <MenuItem value={509}>Haiti (+509)</MenuItem>
                            <MenuItem value={504}>Honduras (+504)</MenuItem>
                            <MenuItem value={852}>Hong Kong (+852)</MenuItem>
                            <MenuItem value={36}>Hungary (+36)</MenuItem>
                            <MenuItem value={354}>Iceland (+354)</MenuItem>
                            <MenuItem value={91}>India (+91)</MenuItem>
                            <MenuItem value={62}>Indonesia (+62)</MenuItem>
                            <MenuItem value={98}>Iran (+98)</MenuItem>
                            <MenuItem value={964}>Iraq (+964)</MenuItem>
                            <MenuItem value={353}>Ireland (+353)</MenuItem>
                            <MenuItem value={972}>Israel (+972)</MenuItem>
                            <MenuItem value={39}>Italy (+39)</MenuItem>
                            <MenuItem value={1876}>Jamaica (+1876)</MenuItem>
                            <MenuItem value={81}>Japan (+81)</MenuItem>
                            <MenuItem value={962}>Jordan (+962)</MenuItem>
                            <MenuItem value={7}>Kazakhstan (+7)</MenuItem>
                            <MenuItem value={254}>Kenya (+254)</MenuItem>
                            <MenuItem value={686}>Kiribati (+686)</MenuItem>
                            <MenuItem value={850}>Korea North (+850)</MenuItem>
                            <MenuItem value={82}>Korea South (+82)</MenuItem>
                            <MenuItem value={965}>Kuwait (+965)</MenuItem>
                            <MenuItem value={996}>Kyrgyzstan (+996)</MenuItem>
                            <MenuItem value={856}>Laos (+856)</MenuItem>
                            <MenuItem value={371}>Latvia (+371)</MenuItem>
                            <MenuItem value={961}>Lebanon (+961)</MenuItem>
                            <MenuItem value={266}>Lesotho (+266)</MenuItem>
                            <MenuItem value={231}>Liberia (+231)</MenuItem>
                            <MenuItem value={218}>Libya (+218)</MenuItem>
                            <MenuItem value={417}>Liechtenstein (+417)</MenuItem>
                            <MenuItem value={370}>Lithuania (+370)</MenuItem>
                            <MenuItem value={352}>Luxembourg (+352)</MenuItem>
                            <MenuItem value={853}>Macao (+853)</MenuItem>
                            <MenuItem value={389}>Macedonia (+389)</MenuItem>
                            <MenuItem value={261}>Madagascar (+261)</MenuItem>
                            <MenuItem value={265}>Malawi (+265)</MenuItem>
                            <MenuItem value={60}>Malaysia (+60)</MenuItem>
                            <MenuItem value={960}>Maldives (+960)</MenuItem>
                            <MenuItem value={223}>Mali (+223)</MenuItem>
                            <MenuItem value={356}>Malta (+356)</MenuItem>
                            <MenuItem value={692}>Marshall Islands (+692)</MenuItem>
                            <MenuItem value={596}>Martinique (+596)</MenuItem>
                            <MenuItem value={222}>Mauritania (+222)</MenuItem>
                            <MenuItem value={269}>Mayotte (+269)</MenuItem>
                            <MenuItem value={52}>Mexico (+52)</MenuItem>
                            <MenuItem value={691}>Micronesia (+691)</MenuItem>
                            <MenuItem value={373}>Moldova (+373)</MenuItem>
                            <MenuItem value={377}>Monaco (+377)</MenuItem>
                            <MenuItem value={976}>Mongolia (+976)</MenuItem>
                            <MenuItem value={1664}>Montserrat (+1664)</MenuItem>
                            <MenuItem value={212}>Morocco (+212)</MenuItem>
                            <MenuItem value={258}>Mozambique (+258)</MenuItem>
                            <MenuItem value={95}>Myanmar (+95)</MenuItem>
                            <MenuItem value={264}>Namibia (+264)</MenuItem>
                            <MenuItem value={674}>Nauru (+674)</MenuItem>
                            <MenuItem value={977}>Nepal (+977)</MenuItem>
                            <MenuItem value={31}>Netherlands (+31)</MenuItem>
                            <MenuItem value={687}>New Caledonia (+687)</MenuItem>
                            <MenuItem value={64}>New Zealand (+64)</MenuItem>
                            <MenuItem value={505}>Nicaragua (+505)</MenuItem>
                            <MenuItem value={227}>Niger (+227)</MenuItem>
                            <MenuItem value={234}>Nigeria (+234)</MenuItem>
                            <MenuItem value={683}>Niue (+683)</MenuItem>
                            <MenuItem value={672}>Norfolk Islands (+672)</MenuItem>
                            <MenuItem value={670}>Northern Marianas (+670)</MenuItem>
                            <MenuItem value={47}>Norway (+47)</MenuItem>
                            <MenuItem value={968}>Oman (+968)</MenuItem>
                            <MenuItem value={680}>Palau (+680)</MenuItem>
                            <MenuItem value={507}>Panama (+507)</MenuItem>
                            <MenuItem value={675}>Papua New Guinea (+675)</MenuItem>
                            <MenuItem value={595}>Paraguay (+595)</MenuItem>
                            <MenuItem value={51}>Peru (+51)</MenuItem>
                            <MenuItem value={63}>Philippines (+63)</MenuItem>
                            <MenuItem value={48}>Poland (+48)</MenuItem>
                            <MenuItem value={351}>Portugal (+351)</MenuItem>
                            <MenuItem value={1787}>Puerto Rico (+1787)</MenuItem>
                            <MenuItem value={974}>Qatar (+974)</MenuItem>
                            <MenuItem value={262}>Reunion (+262)</MenuItem>
                            <MenuItem value={40}>Romania (+40)</MenuItem>
                            <MenuItem value={7}>Russia (+7)</MenuItem>
                            <MenuItem value={250}>Rwanda (+250)</MenuItem>
                            <MenuItem value={378}>San Marino (+378)</MenuItem>
                            <MenuItem value={239}>Sao Tome &amp; Principe (+239)</MenuItem>
                            <MenuItem value={966}>Saudi Arabia (+966)</MenuItem>
                            <MenuItem value={221}>Senegal (+221)</MenuItem>
                            <MenuItem value={381}>Serbia (+381)</MenuItem>
                            <MenuItem value={248}>Seychelles (+248)</MenuItem>
                            <MenuItem value={232}>Sierra Leone (+232)</MenuItem>
                            <MenuItem value={65}>Singapore (+65)</MenuItem>
                            <MenuItem value={421}>Slovak Republic (+421)</MenuItem>
                            <MenuItem value={386}>Slovenia (+386)</MenuItem>
                            <MenuItem value={677}>Solomon Islands (+677)</MenuItem>
                            <MenuItem value={252}>Somalia (+252)</MenuItem>
                            <MenuItem value={27}>South Africa (+27)</MenuItem>
                        </Select>
                        <input type="text" 
                        name="mobile"
                        value={udata.mob}
                        className='inputBox h-11 py-1 px-2 ml-3 border-blue-700 border-2 border-solid '
                        onChange={handleChange}
                        placeholder='Mobile number'
                        ></input>
                    <div/>
                    <h5>Email(optional)</h5>
                    <input type="text" className='inputBox h-11 py-1 px-2  border-blue-700 border-2 border-solid'
                    name="email"
                    value={udata.email}
                    onChange={handleChange}/>
                    <h5>Password</h5>
                    <input type="text" 
                    className='inputBox h-11 py-1 px-2  border-blue-700 border-2 border-solid'
                    name="password"
                    value={udata.password}
                    onChange={handleChange}
                    placeholder='At least 6 characters'/>
                    <p>Passwords must be at least 6 characters</p>
                
                    <p className='signup_terms my-6 '>
                        By enrolling your mobile phone number, you consent to
                        receive automated security notifications via text message 
                        from Amazon. Message and data rates may apply.
                    </p>
                    <button id="signUp_btn"  onClick={senddata}>Continue</button>
                    <p>Already have an account? <Link to='/login'>Sign in</Link></p>
                    <p>Buying for Work?<a>create a free business account</a></p>
                    <p className='signup_terms2'>By continuing, you agree to Amazon's<a href="!"> Conditions of Use and Privacy Notice</a>.</p>

                        
                    </div>
                </form>
            </div>
            
        </div>
    )
}
export default Sign_Up