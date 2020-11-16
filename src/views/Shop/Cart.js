import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// core components
import Header from "components/Header/Header.js";

import GridContainer from "components/Grid/GridContainer.js";
import {connect} from 'react-redux';
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "assets/jss/material-kit-react/views/components.js";

import Footer from 'views/About/Footer.js';
import card_black from '../../assets/img/card2.png';
import card_white from '../../assets/img/card.png';
import rose_metal from '../../assets/img/Rose-Metal.png';
import Buy from '../../assets/img/Buy-CC-Parallux.png';
import Overview from '../Benefits/overview';
import Rating from '@material-ui/lab/Rating';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {useLocation} from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import  {faPlus,faMinus} from "@fortawesome/free-solid-svg-icons";
import {  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import { Label } from "@material-ui/icons";
import {cardCompleteDetail} from '../../Redux/Action/index';
const useStyles = makeStyles(styles);
const styler={

  h1MM:{
  
    fontSize:'41px',
    color:'white',
    flexGrow:1,
    textAlign:'center',
    wordSPacing:'7px',
    letterSpacing:'12px'
  },
  h1M1:{
    marginTop:60,
    fontSize:'41px',
    color:'black',
    flexGrow:1,
    textAlign:'center',
    wordSPacing:'7px',
    letterSpacing:'12px',
    lineHeight:1.5
  },
  h1: {
    fontFamily: 'Roboto Condensed, Helvetica, Arial, Lucida, sans-serif',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: '50px',
    color: 'white !important',
    letterSpacing: '3px',
    color: 'white',

    textAlign: 'center'
},
h1M: {
    fontFamily: 'Roboto Condensed, Helvetica, Arial, Lucida, sans-serif',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: '50px',
    color: 'white !important',
    letterSpacing: '3px',
    color: 'white',
    textAlign: 'center',
    marginTop: 50,
    lineHeight:1.5


},
p1: {

    color: 'white',
    width: 600,
    color: 'white',
    fontSize: 19,
    textAlign: 'center',
    wordSpacing: 9,
    lineHeight: 1.5
}
,
p1M: {

    color: 'white',
    width: 300,
    fontSize: 16,
    textAlign: 'center',
    wordSpacing: 5,


},
checkbox:{
    flexDirection:'row',
    display:'flex',
    marginLeft:-12

},
li:{
    float:'left',
    backgroundColor:'#1e73be',
    color:'white',
    paddingLeft:'10px',
    paddingRight:'10px',
    paddingTop:'5px',
    paddingBottom:'5px',
    marginLeft:'10px',
    borderRadius:'10px'

}
 
}
function Cart(props) {


  var[val,setVal]=React.useState(1);
  const[checkbox1,setCheckBox1]=React.useState(false);
  const[checkbox2,setCheckBox2]=React.useState(false);
  const[checkbox3,setCheckBox3]=React.useState(false);
  const[checkbox4,setCheckBox4]=React.useState(false);
  const[checkbox5,setCheckBox5]=React.useState(false);
  const[checkbox6,setCheckBox6]=React.useState(false);
  const[checkbox7,setCheckBox7]=React.useState(false);
  const[Radiobox1,setRadioBox1]=React.useState(false);
  const[Radiobox2,setRadioBox2]=React.useState(false);
  const[Radiobox3,setRadioBox3]=React.useState(false);
  const[Radiobox4,setRadioBox4]=React.useState(false);
  
  const matches = useMediaQuery('(min-width:600px)');
  const matches3 = useMediaQuery('(min-width:960px)');

  const { ...rest } = props;
  const classes = useStyles();
 
 

  return (
    <div>
         <div style={{marginTop:-75}}>
      <Header
       
        rightLinks={<HeaderLinks />}
        // fixed
        // color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "black"
        }}
        {...rest}
      />
      </div>
      <Parallax style={{marginTop:-20}} image={require("assets/img/network.jpg")}>
        <div className={classes.container}>
          <h1 style={styler.h1MM}>THE SHOP</h1>
          <p style={{flexGrow:1,textAlign: 'center',color:'white',marginTop:50,letterSpacing:3,wordSpacing:5,fontSize:20}}>PURCHASE ANY SINGLE CREDIT CARD FOR $249.00 OR <strong>ANY 3 CARDS</strong> FOR $599.00</p>
       
        </div>
      </Parallax>
  <div className=" row" style={{width:'100%'}} >
      <div  className="col-lg-6 col-md-12 col-xs-12">
          <img src={props.card_t!=undefined?props.card_t:null} style={{width:'100%',marginLeft:matches&&!matches3?15:!matches?15:35}}    alt="" />

      </div>
      <div  className="col-lg-6 col-md-12 col-xs-12" style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'flex-start',paddingLeft:50}}  >
    <h2  style={{marginTop:matches?120:5}}>{props.card_n!=undefined?props.card_n:null}</h2>
    <p style={{marginTop:-10}}>Model Number: mcc-4001</p>
      <div style={{ width:'150px',height:'3px',backgroundColor:'orange',marginTop:-10}} />
      <h2 style={{fontSize:'30px',marginTop:-5}}>{`$${props.card_p}`}</h2>
    <Rating style={{marginTop:-10}} defaultValue={3} precision={1}  />
    
    <p style={{fontWeight:'bold',marginTop:10}}>Which Plastic Card Are You Upgrading to Metal?</p>
    {/* <div style={{marginTop:'8px',width:matches?'500px':'250px',height:'1px',backgroundColor:'#ccc'}} /> */}
    {/* <p style={{marginTop:'10px'}}>Step 1: Debit Or Credit Card?</p> */}
    <div>
    <div style={{   flexDirection:'row',
    display:'flex',
    marginLeft:-12,marginTop:-10}}>
    <Checkbox
    onChange={()=> {setCheckBox1(true);setCheckBox2(false);setCheckBox3(false);setCheckBox4(false)}}
    checked={checkbox1}
    
       
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <p style={{marginTop:10}}>Debit</p>
    </div>
    <div style={styler.checkbox}>
    <Checkbox
      onChange={()=> {setCheckBox1(false);setCheckBox2(true);setCheckBox3(false);setCheckBox4(false)}}
      checked={checkbox2}
       
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <p style={{marginTop:10}}>Credit</p>
    </div>
    <div style={styler.checkbox}>
    <Checkbox
     onChange={()=> {setCheckBox1(false);setCheckBox2(false);setCheckBox3(true);setCheckBox4(false)}}
     checked={checkbox3}
       
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <p style={{marginTop:10}}>Prepaid Card</p>
    </div>
    <div style={styler.checkbox}>
    <Checkbox
      onChange={()=> {setCheckBox1(false);setCheckBox2(false);setCheckBox3(false);setCheckBox4(true)}}
      checked={checkbox4}
       
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <p style={{marginTop:10}}>No not engrave Debit or Credit on my card</p>
    </div>
    </div>
    <div style={{marginTop:20}}>
      <p style={{fontWeight:'bold'}}>Do you want to transplant chip Yes or Not?</p>
      <div style={{display:'flex',flexDirection:'row'}}>
      <FormControlLabel    value="Yes" control={<Radio onChange={()=>{setRadioBox3(true);setRadioBox4(false)}} checked={Radiobox3} />} label={<p style={{marginTop:10,color:'#707070'}}>Yes</p>} />
      <FormControlLabel   value="Not" control={<Radio onChange={()=>{setRadioBox3(false);setRadioBox4(true)}} checked={Radiobox4} />} label={<p style={{marginTop:10,color:'#707070'}}>Not</p>} />
      </div>
    </div>

    {/* <ul style={{listStyle:'none',padding:0}} >
      {tile1?
        <li onClick={()=>{setTile1(true);setTile2(false);setTile3(false)}} style={styler.li}>
        No, Do Not Transplant Chip
        </li> :null}
       {tile2? <li onClick={()=>{setTile1(false);setTile2(true);setTile3(false)}} style={{    float:'left',
    backgroundColor:'#1e73be',
    color:'white',
    paddingLeft:'10px',
    paddingRight:'10px',
    paddingTop:'5px',
    paddingBottom:'5px',
    marginLeft:'10px',
    borderRadius:'10px',
    marginTop:matches?'0px':'5px'}}>Yes, Transplant Chip</li>:null}
    {tile3?
        <li onClick={()=>{setTile1(false);setTile2(false);setTile3(true)}} style={{    float:'left',
    backgroundColor:'#1e73be',
    color:'white',
    paddingLeft:'10px',
    paddingRight:'10px',
    paddingTop:'5px',
    paddingBottom:'5px',
    marginLeft:'10px',
    borderRadius:'10px',
    marginTop:matches?'0px':'5px'}}>My Card Has No Chip</li>:null}
    </ul> */}
    <p style={{marginTop:20,fontWeight:'bold'}}>Extended Protection Plan</p>
    <div>
    <div style={styler.checkbox}>
    <Checkbox
      onChange={()=> {setCheckBox5(true);setCheckBox6(false);setCheckBox7(false)}}
      checked={checkbox5}
       
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <p style={{marginTop:10}}>Yes, extend warranty to one (1) year (+$59.99 per item)</p>
    </div>
    <div style={styler.checkbox}>
    <Checkbox
     onChange={()=> {setCheckBox5(false);setCheckBox6(true);setCheckBox7(false)}}
     checked={checkbox6}
      
       
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <p style={{marginTop:10}}>Yes, extend warranty to Two (2) year (+$99.00 per item)</p>
    </div>
    <div style={styler.checkbox}>
    <Checkbox
     onChange={()=> {setCheckBox5(false);setCheckBox6(false);setCheckBox7(true)}}
     checked={checkbox7}
       
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <p style={{marginTop:10}}>No, I do not want to extend my warranty</p>
    </div>
    </div>
    
    
    <p style={{marginTop:20,fontWeight:'bold'}}>PDP - Personal Data Protection (See Disclaimer Below)</p>
    <div>
    <div style={{flexDirection:'column'}}>
  <FormControlLabel   value="male" control={<Radio onChange={()=>{setRadioBox1(true);setRadioBox2(false)}} checked={Radiobox1} />} label={<p style={{marginTop:10,color:'#707070'}}>Yes, apply Personal Data Protection</p>} />
    </div>
    <div style={{flexDirection:'column'}}>
  <FormControlLabel   value="female" control={<Radio  onChange={()=>{setRadioBox1(false);setRadioBox2(true)}} checked={Radiobox2} />} label={<p style={{marginTop:10,color:'#707070'}}>No, please engrave all my card information"</p>}  />
    </div>  
    </div>

    <div style={{display:'flex',flexDirection:'row',height:50,marginTop:20,marginBottom:10}}>
        {/* <div style={{display:'flex',flexDirection:'row',borderRadius:10}}>
            <button  onClick={()=>{setVal(val=val+1)}} style={{height:'100%',width:'40px',borderRadius:6,backgroundColor:'#1e73be',justifyContent:'center',alignItems:'center',display:'flex',border:'none'}}><FontAwesomeIcon icon={faPlus} style={{width:30}} color="white" /></button>
      <p style={{paddingTop:'10px',width:'50px',textAlign:'center',paddingLeft:'2px',borderTop:'1px solid #dedede',borderBottom:'1px solid #dedede', height:'92%',marginTop:'2px'}}>{val}</p>
            <button onClick={()=>{if(val>1){setVal(val=val-1)}}} style={{height:'100%',width:'40px',borderRadius:6,backgroundColor:'#1e73be',justifyContent:'center',alignItems:'center',display:'flex',border:'none'}} ><FontAwesomeIcon icon={faMinus} color="white" style={{width:30}} /></button>

        </div> */}
        <div style={{height:'100%'}}>
            <button style={{backgroundColor:'orange',display:'flex',justifyContent:'center',
            alignItems:'center',height:'100%',borderRadius:8,color:'white',fontSize:15,width:'100%',border:'none'}}>
              <Link onClick={()=>{if(setCheckBox5){props.cardCompleteDetail(60,val)
            
            }else if(setCheckBox6){props.cardCompleteDetail(100,val)}else{
              props.cardCompleteDetail(0,val)
            }}} style={{color:'white',textDecoration:'none'}} to="/CartDetails" >Add To Cart</Link></button>
        </div>


    </div> 
    
    

      </div>

      </div>   
      <div style={{marginTop:20}}>
  
      <Footer />
      </div>

    </div>
  );
}
const mapStateToProps=state=>{
  const cartReducer =state.reducer;
  return cartReducer;

}
export default connect(mapStateToProps,{cardCompleteDetail})(Cart);