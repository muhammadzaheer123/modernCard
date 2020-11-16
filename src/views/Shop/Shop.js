import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// core components
import Header from "components/Header/Header.js";

import GridContainer from "components/Grid/GridContainer.js";

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
import {Link} from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { connect } from 'react-redux';
import {cardMiniDetail} from '../../Redux/Action/index';
const useStyles = makeStyles(styles);
const styler={

  h1MM:{
  
    fontSize:'55px',
    color:'white',
    flexGrow:1,
    textAlign:'center',
    wordSPacing:'1px',
    letterSpacing:'5px',
    fontFamily:'Roboto'
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


}
 
}
 function Shop(props) {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:600px)');
  const matches1 = useMediaQuery('(min-width:1280px)');
  console.log(matches,matches1)
  const { ...rest } = props;
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
        <div style={{marginBottom:50}} className={classes.container}>
          <h1 style={styler.h1MM}>SHOP</h1>
          {/* <p style={{flexGrow:1,textAlign: 'center',color:'white',marginTop:25,wordSpacing:1,fontSize:18}}>Purchase any single credit card for $249.00 or <strong>any 3 cards</strong> for $599.00</p> */}
       
        </div>
      </Parallax>
      <div className="row " style={{width:'100%'}}>
      <div    style={{textAlign:'center',width:matches&&matches1?'33.3%':'100%'}} >
 <div   style={{marginLeft:matches&&matches1?60:30}}>
 <Overview height={matches?400:250}  width={matches?400:300}  img={card_white} />
 </div>   
               {/* <img  src={}  style={{width:'80%',height:'80%',objectFit:'contain'}} alt="" /> */}
               <div style={{marginTop:-50}}  >
               <p  style={{fontWeight:'bold',fontSize:18,color:'black',wordSpacing:5}}>GOLD METAL CARD</p>
               <p  style={{fontWeight:'bold',fontSize:16,color:'black'}}>$249</p>
               <button type="button" class="btn btn-outline-secondary" style={{background:'orange',border:'none',borderRadius:5}}><Link onClick={()=>props.cardMiniDetail(card_white,'Brown Metal Card',249)} to="/Cart" style={{textDecoration:'none',color:'white'}} >SHOP NOW</Link></button>
               </div>

       
           </div>
           <div style={{textAlign:'center',width:matches&&matches1?'33.3%':'100%'}} >
           <div style={{marginLeft:matches&&matches1?40:30}}>
 <Overview height={matches?400:250}  width={matches?400:300}   img={card_black} />
       </div>
               {/* <img  src={}  style={{width:'80%',height:'80%',objectFit:'contain'}} alt="" /> */}
               <div style={{marginTop:-50}}  >
               <p  style={{fontWeight:'bold',fontSize:18,color:'black',wordSpacing:5}}>BLACK METAL CARD</p>
               <p  style={{fontWeight:'bold',fontSize:16,color:'black'}}>$249</p>
               <button type="button" class="btn btn-outline-secondary" style={{background:'orange',border:'none',borderRadius:5}}><Link onClick={()=>props.cardMiniDetail(card_black,'Black Metal Card',249)} to="/Cart" style={{textDecoration:'none',color:'white'}}>SHOP NOW</Link></button>

               </div>

       
           </div>
           <div  style={{textAlign:'center',width:matches&&matches1?'33.3%':'100%'}} >
           <div style={{marginLeft:matches?0:30}}>
 <Overview height={matches?400:250}  width={matches?400:300}  img={rose_metal} />
     </div>  
               {/* <img  src={}  style={{width:'80%',height:'80%',objectFit:'contain'}} alt="" /> */}
               <div style={{marginTop:-50}}  >
               <p  style={{fontWeight:'bold',fontSize:18,color:'black',wordSpacing:5}}>ROSE  METAL  CARD</p>
               <p  style={{fontWeight:'bold',fontSize:16,color:'black'}}>$249</p>
               <button type="button" class="btn btn-outline-secondary" style={{background:'orange',border:'none',borderRadius:5}} ><Link onClick={()=>props.cardMiniDetail(rose_metal,'Rose Metal Card',249)} to="/Cart"  style={{textDecoration:'none',color:'white'}}>SHOP NOW</Link></button>

               </div>

       
           </div>

      </div>
      {/* <div style={{background:'#F3F3F3',paddingTop:50,paddingBottom:50,marginTop:50}}>
        <h1 style={styler.h1M1}>THE DEAL</h1>
          <p style={{flexGrow:1,textAlign: 'center',marginTop:50,letterSpacing:3,wordSpacing:5,fontSize:20}}><strong>GO ALL IN WITH THE COMBO OF ANY THREE CARDS. YOU’LL BE GLAD YOU DID!</strong></p>
          <hr style={{flexGrow:1,  borderTop: '1px dashed black'}}></hr>
          <div style={{marginTop:200}}>
          <h1 style={styler.h1M1}>THE INSURANCE</h1>
          <p style={{flexGrow:1,textAlign: 'center',marginTop:50,letterSpacing:3,wordSpacing:5,fontSize:20}}><strong>PROTECT YOU AND YOUR CARD YEAR ROUND FROM LOSS OR THEFT.</strong></p>
          <hr style={{flexGrow:1,  borderTop: '1px dashed black'}}></hr>
          </div>
          </div>
          <div
                style={{
                    backgroundImage: `url(${Buy})`,
                    marginTop: 20,
                    backgroundPosition: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',

                    height: '100%'
                }}>

                <div style={{ backgroundColor: 'rgba(0,0,0,0.75' }}>

                    <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                        <h1 style={styler.h1M}>THE CARD EGO PROCESS</h1>
                        <h1 style={styler.h1}>1</h1>
                        <p style={matches ? styler.p1 : styler.p1M}>Make sure you have your own Plastic debit or Credit card.Place your order online with us.We will then send you a prepaid label and a tracking number attached with it.Place your card in that envelop and put label on that envelop.
        </p>
                        <h1 style={styler.h1}>2</h1>
                        <p style={matches ? styler.p1 : styler.p1M}>Mail out that with USPS.When we will receive the card, then a mockup design of your card will be sent to you for your approval.There is a time of 2-3 business days till your card is shipped to us.
        </p>
                        <h1 style={styler.h1}>3</h1>
                        <p style={matches ? styler.p1 : styler.p1M}>After receiving the card and having your approval for design, we will start the work.We will laser your desired design on the metal card.Remove the EMV chip from your boring plastic card and it will be transplanted on the Metal Card.

        </p>
                        <h1 style={styler.h1}>4</h1>
                        <p style={matches ? styler.p1 : styler.p1M}>Finally, we will transfer the magnetic strip data from plastic card to the Metal Card.This whole process will take one day for us.After completing this, you will receive the photo of your card and the tracking number of your new Metal Card. It will be shipped out the same day back towards you.
        </p>
                    </div>

                </div>

            </div> */}
      <div style={{marginTop:20}}>
  
      <Footer />
      </div>

    </div>
  );
}
const mapStateToProps = state => {
  const cartReducer = state.reducer;
  return cartReducer; 
};



export default connect(mapStateToProps,{cardMiniDetail})(Shop)