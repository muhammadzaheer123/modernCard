import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ScrollableAnchor from 'react-scrollable-anchor';

// @material-ui/icons
// core components
import Header from "components/Header/Header.js";

import GridContainer from "components/Grid/GridContainer.js";
import ScrollAnimation from 'react-animate-on-scroll';

import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from 'views/About/Footer';
import './benefits.css';
import "animate.css/animate.min.css";
import handCard from '../../assets/img/hand_card.png';
import Talk from '../../assets/img/view.jpeg';
import Accord from '../../components/Accordian/Accordian';
import Overview from './overview';
import useMediaQuery from '@material-ui/core/useMediaQuery';




import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);


export default function About(props) {
  const classes = useStyles();
const matches = useMediaQuery('(min-width:600px)');
const matches2 = useMediaQuery('(min-width:1280px)');
const matches3 = useMediaQuery('(min-width:760px)');
const matches4 = useMediaQuery('(min-width:1080px)');
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
      <Parallax style={{marginTop:-20}} image={require("assets/img/bg4.jpg")}>
        <div className={classes.container}>
          <GridContainer />   
        </div>
      </Parallax>




<div
                style={{
                    backgroundImage: `url(${Talk})`,
                    marginTop: 20,
                    backgroundPosition: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: '1253px',
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    flexDirection:'column'
                }}>
                    <div style={{width:matches&&matches4&&matches3?'40%':matches&&(!matches4||!matches3)?'60%':'95%',height:'50%',backgroundColor:'rgba(255,255,255,0.8',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                    <h1 style={{textAlign: 'center',fontWeight:'bold',marginTop:30}} className="h1">YOUR PERCEPTION<br />IS YOUR REALITY</h1>
                        <p style={{paddingLeft:matches?80:10,paddingRight:matches?80:10,paddingTop:50,paddingBottom:10,fontSize:20,lineHeight:1.8,textAlign:'center'}}>
                        Whether it is a Metal, Gold or Plastic Card, the basic aim of these is same. 
                        What we have provided here gives way more than just purchases.
                         Here DT Modern Cards is giving you some extra advantages in the form of Metal and 24k Gold cards. 
                         One must see these advantages before moving further for a Metal or Gold Card
                        </p>


                    </div>
</div>
<div style={{height:matches?'400px':'500px',width:'100%',backgroundColor:'#222534',marginTop:20}} className="row">

                  <div  style={{flexGrow:1,width:matches?'50%':'100%',display:'flex',alignItems:'center',flexDirection:'column',paddingTop:matches?100:50}}>
                      <h1 style={{color:'white',marginRight:100}}>CARD EGO</h1>
                        <ul style={{color:'white'}}>
                            <li>3 DAY TURN AROUND</li>
                            <li>GET THE VIP TREATMENT</li>
                            <li>CHANGE PERCEPTIONS</li>
                            <li>SAFE, SECURE, &amp; TRUSTED</li>
                            <li>BUY IN STYLE</li>
                            <li>TRAVEL WITH AUTHORITY</li>
                            <li>ATTRACT CLASSName AND EXCLUSIVITY</li>
                        </ul>

                    </div>
               
                 
                      
                            <div   style={{textAlign:'center',width:matches?'50%':'100%',marginTop:matches?50:-50}}>
                                  <ScrollableAnchor id={'install'}>
          <Overview img={handCard} />
        </ScrollableAnchor>
     

                            </div>
                     
                   
                
            
</div>



 <div style={{marginTop:20}}>
   
      <Footer />
      </div>
    </div>
  );
}