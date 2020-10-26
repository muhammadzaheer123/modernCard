import React,{useState} from "react";
// nodejs library that concatenates classes

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
import  {faTachometerAlt,faBorderNone,faEye} from "@fortawesome/free-solid-svg-icons";
import {  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import Card from 'components/Card/SimpleCard';
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';
import './about.css'
import bestImage from '../../assets/img/best-software-house-in-brentwood.jpg';
import about from '../../assets/img/about.jpg'
import styles from "assets/jss/material-kit-react/views/components.js";
import FooterBackground from './Footer';
const AutoplaySlider = withAutoplay(AwesomeSlider);
const useStyles = makeStyles(styles);

const styling = {
  headerText: {
    fontWeight: 'bold',
    textAlign: 'center',

    flexGrow:1,
 
   

  },
  headerText2: {
    fontWeight: 'bold',
    textAlign: 'center',


    flexGrow:1

  },
  subHeaderText: {
    textAlign: 'center',
    fontSize:20
  },
  li:{
    fontSize:30,
   
},
divContainer:{
  
  width:'100%',
  background:'white',
 
 
},
cool:{
  backgroundColor:'red'
}

}
export default function About(props) {
  const classes = useStyles();
  const [color,setColor]=useState('white');
  const [backColor,setBackColor]=useState('orange');
  const [color1,setColor1]=useState('white');
  const [backColor1,setBackColor1]=useState('orange');
  const [color2,setColor2]=useState('white');
  const [backColor2,setBackColor2]=useState('orange')
  const { ...rest } = props;
  const matches = useMediaQuery('(min-width:300px)');
  console.log(matches)
  return (
    <div style={{backgroundColor:'white'}}>
      <Header

        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/bg4.jpg")}>
        <div className={classes.container}>
        <h2 style={{color:'white',fontWeight:'bold',flexGrow:1,textAlign:'center',fontSize:50}}>About Us</h2>
          {/* <GridContainer> */}
            {/* <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Material Kit React.</h1>
                <h3 className={classes.subtitle}>
                  A Badass Material-UI Kit based on Material Design.
                </h3>
              </div>
            </GridItem> */}
          {/* </GridContainer> */}
        </div>
      </Parallax>
      <section id="strategy" >
    <div className="container" >
     
        <div className="row" style={{paddingTop: 32}}>
          <div className="col-lg-7 col-md-6 case-study">
            <h2 style={{color: '#FF9800', textAlign: 'left', fontSize: '30px !important',paddingLeft:10}}>DT Modern tech</h2>
              <p style={{marginLeft:15,marginRight:15}}>From when DT Modern Tech started to where we are now, We leaded in the market. We are a US based firm and best software house with over 6 years of experience in providing state-of-the-art solutions, cost-effective capabilities and consulting services. We experienced to be professionals which we are right now. We rely on our minds of company and the quality which we are serving till now by hard work.</p>
          </div>
          <div className="col-lg-5 col-md-6">
            <img style={{display: 'block', maxWidth: '100%', height: 'auto'}} src={bestImage} alt="best software house in brentwood" /> 
          </div>
        </div>
    </div>
  </section>
  <section id="about" style={{marginTop:40}}>
  <div className="container aos-init aos-animate" data-aos="fade-up">
  <div class="row about-cols">
  <div className="col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
  <div className="about-col">
  <div className="img">
            <img src={about} alt="" className="img-fluid" />
            <div className="icon" onMouseEnter={()=>{setBackColor('white');setColor('orange')}} onMouseLeave={()=>{setBackColor('orange');setColor('white')}} style={{backgroundColor:backColor}}><i ><FontAwesomeIcon icon={faEye} color={color}  /></i></div>
          </div>
          <h2 className="title"  style={{paddingTop:25,color:'black',flexGrow:1,textAlign:'center'}}><a style={{color:'black',fontSize:20,fontWeight:'bold'}} href="#">Our Mission</a></h2>
          <p>
          We have a very simple and efficient mission to give our clients best securities, prestige, rareness, durability and excellence. We as a strong competitor in the market, also want to be at the top not just by our quantity but due to our quality. 
          </p>
      </div>
      </div>
      <div className="col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
  <div className="about-col">
  <div className="img">
            <img src={about} alt="" className="img-fluid" />
            <div className="icon" onMouseEnter={()=>{setBackColor1('white');setColor1('orange')}} onMouseLeave={()=>{setBackColor1('orange');setColor1('white')}} style={{backgroundColor:backColor1}}><i ><FontAwesomeIcon icon={faBorderNone} color={color1}  /></i></div>
          </div>
          <h2 className="title"  style={{paddingTop:25,color:'black',flexGrow:1,textAlign:'center'}}><a style={{color:'black',fontSize:20,fontWeight:'bold'}} href="#">Features</a></h2>
          <p>
          There are no raised lettering and numbering taken into consideration in DT Modern Card. If you have raising letters, then might have problem with that someone can easily copy this from your card. But using our upgraded Metal or 24k Gold card, it might be riskier attempt for others to copy your information.
          </p>
      </div>
      </div>
      <div className="col-md-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
  <div className="about-col">
  <div className="img">
            <img src={about} alt="" className="img-fluid" />
            <div className="icon" onMouseEnter={()=>{setBackColor2('white');setColor2('orange')}} onMouseLeave={()=>{setBackColor2('orange');setColor2('white')}} style={{backgroundColor:backColor2}}><i ><FontAwesomeIcon icon={faTachometerAlt} color={color2}  /></i></div>
          </div>
          <h2 className="title" style={{paddingTop:25,color:'black',flexGrow:1,textAlign:'center'}}><a href="#" style={{color:'black',fontSize:20,fontWeight:'bold'}}>About Us</a></h2>
          <p>
          DT Modern Card is a company which enhances your personality and value by giving the services of upgrading your Plastic Card to Beautiful Metal and 24k Gold Cards.
          We are online service providers and California based firm.
          </p>
      </div>
      </div>
      </div>
      </div>
    
  </section>
      <section id="strategy" >
    <div className="container" >
     
        <div className="row" style={{paddingTop: 32,marginTop:70}}>
          <div className="col-lg-7 col-md-6 case-study">
              <p style={{marginLeft:15,marginRight:15}}>From when DT Modern Tech started to where we are now, We leaded in the market. We are a US based firm and best software house with over 6 years of experience in providing state-of-the-art solutions, cost-effective capabilities and consulting services. We experienced to be professionals which we are right now. We rely on our minds of company and the quality which we are serving till now by hard work.</p>
          </div>
          <div className="col-lg-5 col-md-6">
            <img style={{display: 'block', maxWidth: '100%', height: 'auto'}} src={bestImage} alt="best software house in brentwood" /> 
          </div>
        </div>
    </div>
  </section>
     
  <div style={{marginTop:50}}>
      <FooterBackground />
      </div>
    </div>
  );
}
