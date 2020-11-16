import React from "react";
// nodejs library that concatenates classNamees

// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import Card from 'components/Card/SimpleCard';
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Footer from 'views/About/Footer.js';
import styles from "assets/jss/material-kit-react/views/components.js";
import { faMapMarker, faEnvelope, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { } from '@fortawesome/free-brands-svg-icons';
import ScrollAnimation from 'react-animate-on-scroll';
import './work.css';
import Buy from '../../assets/img/Buy-CC-Parallux.png';
import Overview from '../Benefits/overview';
import card_black from '../../assets/img/Rose-Metal.png';
import card_white from '../../assets/img/card.png';
import work from '../../assets/img/work.png';

const styler = {
    h1: {
        fontFamily: 'Roboto Condensed, Helvetica, Arial, Lucida, sans-serif',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: '90px',
        letterSpacing: '3px',
        color: 'orange',
        marginBottom:0,
        

        textAlign: 'left'
    },
    h1M: {
        fontFamily: 'Roboto Condensed, Helvetica, Arial, Lucida, sans-serif',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: '20px',
        color: 'white !important',
        letterSpacing: '3px',
        color: 'black',
        textAlign: 'left',
        marginTop: 50,
        marginLeft:50


    },
    p1: {

        color: 'black',
        width: 600,
        color: 'black',
        fontSize: 15,
        textAlign: 'left',
        wordSpacing: 2,
        lineHeight: 1.5,
        marginTop:-65,
        marginLeft:50,

    }
    ,
    p1M: {

        color: 'black',
        width: 300,
        fontSize: 16,
        textAlign: 'left',
        wordSpacing: 5,


    },
    li:{
        fontSize:16,
       
     
    },
    span_li:{
        fontSize:16,
        
      
    },

}

const useStyles = makeStyles(styles);
export default function Contact(props) {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:600px)');
    const matches1 = useMediaQuery('(min-width:960px)');

    const { ...rest } = props;
    return (
        <div style={{ height: '100%' }}>
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
                <div className={classes.container} style={{marginBottom:10,flexGrow:1,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                    <h2 style={{ color: 'white', fontWeight: 'bold', flexGrow: 1, textAlign: 'center', fontSize: 50,fontFamily:'Roboto',wordSpacing:'5px' }}>CARD EGO PROCESS</h2>
                    <p style={{  color: 'white', textAlign: 'center', lineHeight: 1.5, fontSize: 18,marginTop:15,width:'70%',fontFamily:'Roboto' }}>We do our work very carefully and accurately. This whole process take very less time with the help of our expert and trained artists. Let’s talk about that how this work.</p>
          
                </div>
            </Parallax>

            {/* <div
                style={{
                    backgroundImage: `url(${Buy})`,
                    marginTop: 20,
                    backgroundPosition: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',

                    height: '100%'
                }}> */}
{/* 
                <div style={{ backgroundColor: 'white' }}>

                    <div style={{ justifyContent: 'center', alignItems: 'left', display: 'flex', flexDirection: 'column' }}>
                        <h1 style={styler.h1M}>THE CARD EGO PROCESS</h1>
                        <h1 style={styler.h1}>1</h1>
                        <p style={matches ? styler.p1 : styler.p1M}>Make sure you have your own Plastic debit or Credit card. Place your order online with us. We will then send you a prepaid label and a tracking number attached with it. Place your card in that envelop and put label on that envelop.
        </p>
        <div style={{marginTop:-30}}>
        <h1 style={styler.h1}>2</h1>
                        <p style={matches ? styler.p1 : styler.p1M}>Make sure you have your own Plastic debit or Credit card. Place your order online with us. We will then send you a prepaid label and a tracking number attached with it. Place your card in that envelop and put label on that envelop.
        </p>
        </div>
        <div style={{marginTop:-30}}>
                        <h1 style={styler.h1}>3</h1>
                        <p style={matches ? styler.p1 : styler.p1M}>After receiving the card and having your approval for design, we will start the work. We will laser your desired design on the metal card. Remove the EMV chip from your boring plastic card and it will be transplanted on the Metal Card.

        </p>
        </div>
        <div style={{marginTop:-30,marginBottom:30}}>
                        <h1 style={styler.h1}>4</h1>
                        <p style={matches ? styler.p1 : styler.p1M}>Finally, we will transfer the magnetic strip data from plastic card to the Metal Card. This whole process will take one day for us.After completing this, you will receive the photo of your card and the tracking number of your new Metal Card. 
                        It will be shipped out the same day back towards you.
        </p>
        </div>
                    </div>

                </div> */}

            {/* </div> */}
            <div style={{display:'flex',justifyContent:'center',width:'100%'}}>
                <img src={work} style={{objectFit:'contain',width:'60%'}} />
            </div>

            <div className="row" style={{width:'100%',backgroundColor:'#222534',margin:0,marginTop:-1}}>
                  {/* <div  style={{flexGrow:1,width:matches?'33.3%':'100%'}}>
                      <h1 style={{marginLeft:50,marginTop:80}}>CARD EGO</h1>
                        <ul style={{marginLeft:50,
                        fontSize:30,
                        listStyleType:'unset'
                        }}>
                <li style={styler.li}><span style={styler.span_li}>3 DAY TURN AROUND</span></li>
                <li style={styler.li}><span style={styler.span_li}>GET THE VIP TREATMENT</span></li>
                <li style={styler.li}><span style={styler.span_li}>CHANGE PERCEPTIONS</span></li>
                <li style={styler.li}><span style={styler.span_li}>SAFE, SECURE, &amp; TRUSTED</span></li>
                <li style={styler.li}><span style={styler.span_li}>BUY IN STYLE</span></li>
                <li style={styler.li}><span style={styler.span_li}>TRAVEL WITH AUTHORITY</span></li>
                <li style={styler.li}><span style={classes.span_li}>ATTRACT CLASSName AND EXCLUSIVITY</span></li>

                            
                      
                         
                          
                           
                     
                        
                        </ul>

                    </div> */}
               
                 
                    <div  className="et_pb"   style={{textAlign:matches&&matches1?'right':'center',width:matches&&matches1?'50%':'100%',paddingRight:matches&&matches1?20:0}} >
 <div style={{marginLeft:0}}>
                  <Overview height={matches?400:250}  width={matches?500:300}  img={card_white} />
                  </div>
                                {/* <img  src={}  style={{width:'80%',height:'80%',objectFit:'contain'}} alt="" /> */}
                                {/* <div style={{marginTop:-20}}  >
                                <p  style={{fontWeight:'bold'}}>GOLD METAL CARD</p>
                                <p  style={{fontWeight:'bold'}}>$249</p>

                                </div> */}

                        
                            </div>
                            
                     
                        <div  style={{textAlign:matches&&matches1?'left':'center',width:matches&&matches1?'50%':'100%',paddingLeft:matches&&matches1?20:0,marginTop:matches?0:-50}}>
                          <div style={{marginLeft:0}}>
                        <Overview height={matches?400:250}  width={matches?500:300}  img={card_black} />
                        </div>
                                {/* <div style={{marginTop:-20}} >
                                <p style={{fontWeight:'bold'}}>BLACK METAL CARD</p>
                                <p  style={{fontWeight:'bold'}}>$249</p>

                               

                            </div> */}
                        
                        </div>
                  
                
            </div>








            <div style={{ marginTop: -100 }}>
                <Footer />


            </div>

        </div>
    )
}