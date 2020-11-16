import React,{useState} from "react";
// nodejs library that concatenates classes
import * as Colors from 'material-ui/styles/colors';
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

// import '../Home/home.css'

import ScrollableAnchor from 'react-scrollable-anchor';

import bestImage from '../../assets/img/best-software-house-in-brentwood.jpg';
import about from '../../assets/img/about.jpg'
import styles from "assets/jss/material-kit-react/views/components.js";
import FooterBackground from './Footer';
import right_arrow from '../../assets/img/right_arrow.png';
import left_arrow from '../../assets/img/left_arrow.png';
import redLine from 'assets/img/pink_line_big.png';
import cardLine from 'assets/img/Card-Lineup.png';
import Overview from '../Benefits/overview';
import './about.css';
import "animate.css/animate.min.css";
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
},
imgS:{
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  width:'100%',
  marginTop:60
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
  const matches = useMediaQuery('(min-width:600px)');
  const matches3 = useMediaQuery('(min-width:960px)');
  const matches2 = useMediaQuery('(min-width:1280px)');
  const matches4 = useMediaQuery('(min-width:1080px)');
  console.log('600',matches)
  console.log('1280',matches2)
  console.log('960',matches3)
  console.log('1024',matches4)
  return (
    <div style={{backgroundColor:'white'}}>
      <div style={{marginTop:-75}}>
      <Header
      
        rightLinks={<HeaderLinks />}
     
        
        changeColorOnScroll={{
          height: 400,
          color: "black"
        }}
        {...rest}
      />
      </div>
      <Parallax  style={{marginTop:-20}} image={require("assets/img/bg4.jpg")}>
      <div   style={{paddingLeft:matches?'5%':0,textAlign:matches&&matches3?'left':'center',width:matches?'50%':'100%',marginTop:matches?30:-50}}>
                                  <ScrollableAnchor id={'install'}>
          <Overview height={matches?450:300} width={matches?450:250} img={cardLine} />
        </ScrollableAnchor>
     

                            </div>
      </Parallax>
              
      <section id="strategy" >
    <div className="container" >
     
        <div className="row" style={{paddingTop: 100,paddingBottom:60}}>
        <section
       
 className="col-lg-6 col-md-12 col-xs-12 elementor-section elementor-top-section elementor-element elementor-element-9a1d3d9 elementor-reverse-tablet elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default"
data-id="9a1d3d9" data-element_type="section">
<div className="elementor-container elementor-column-gap-wider">

<div style={{width:'100%'}} className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-cbe325b"
data-id="cbe325b" data-element_type="column">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-791e47d elementor-widget elementor-widget-heading"
data-id="791e47d" data-element_type="widget"
data-widget_type="heading.default">
<div className="elementor-widget-container">
<div style={{fontSize:matches?'33px':'25px' ,fontWeight:700,lineHeight:matches&&matches2?0:'40px',color:'black'}} className="elementor-heading-title elementor-size-default">
Your reliable business partner</div>
</div>
</div>
<div className="elementor-element elementor-element-ac1fd5c elementor-widget elementor-widget-heading"
data-id="ac1fd5c" data-element_type="widget"
data-widget_type="heading.default">
<div className="elementor-widget-container">
<h4  style={{fontSize: '20px',lineHeight: '34px',marginBottom:'20px',marginTop:'10px'}} className="elementor-heading-title elementor-size-default">Feel the value of you with us!</h4>
</div>
</div>

<p style={{color:'black',flexGrow:1,fontSize:'17px'}}>DT Modern Card is a company which enhances your personality and value by giving the services of upgrading your Plastic Card to Beautiful Metal and 24k Gold Cards.</p>
<section
className="elementor-section elementor-inner-section elementor-element elementor-element-3943498 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
data-id="3943498" data-element_type="section">
<div className="elementor-container elementor-column-gap-no">
<div className="elementor-row">
<div style={{marginTop:'20px'}} className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-6575969"
data-id="6575969" data-element_type="column">
<div
className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-1dd5008 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
data-id="1dd5008"
data-element_type="widget"
data-widget_type="icon-list.default">
<div className="elementor-widget-container">
    <ul style={{fontWeight:'bold'}}
        className="elementor-icon-list-items">
        <li
            className="elementor-icon-list-item">
            <span
                className="elementor-icon-list-icon">
                <i aria-hidden="true"
                    className="fas fa-check"></i>
            </span> <span
                className="elementor-icon-list-text">Rearness</span></li>
        <li
            className="elementor-icon-list-item">
            <span
                className="elementor-icon-list-icon">
                <i aria-hidden="true"
                    className="fas fa-check"></i>
            </span> <span
                className="elementor-icon-list-text">Permanence</span></li>
        <li
            className="elementor-icon-list-item">
            <span
                className="elementor-icon-list-icon">
                <i aria-hidden="true"
                    className="fas fa-check"></i>
            </span> <span
                className="elementor-icon-list-text">Brilliant
                implementation</span>
        </li>
    </ul>
</div>
</div>
</div>
</div>
</div>
<div style={{marginTop:'20px'}} className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-051cd2f"
data-id="051cd2f" data-element_type="column">
<div
className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-08124a2 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
data-id="08124a2"
data-element_type="widget"
data-widget_type="icon-list.default">
<div className="elementor-widget-container">
    <ul style={{fontWeight:'bold'}}
        className="elementor-icon-list-items">
        <li
            className="elementor-icon-list-item">
            <span
                className="elementor-icon-list-icon">
                <i aria-hidden="true"
                    className="fas fa-check"></i>
            </span> <span
                className="elementor-icon-list-text">Money
                back guarantee</span>
        </li>
        <li
            className="elementor-icon-list-item">
            <span
                className="elementor-icon-list-icon">
                <i aria-hidden="true"
                    className="fas fa-check"></i>
            </span> <span
                className="elementor-icon-list-text">Customer
                support</span></li>
        <li
            className="elementor-icon-list-item">
            <span
                className="elementor-icon-list-icon">
                <i aria-hidden="true"
                    className="fas fa-check"></i>
            </span> <span
                className="elementor-icon-list-text">Individual
                solutions</span></li>
    </ul>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</div>

</div>
</section>
          <div className="col-lg-6 col-md-12 xs-12">
            <img style={{display: 'block', maxWidth: '100%', height: 'auto'}} src={bestImage} alt="best software house in brentwood" /> 
          </div>
        </div>
    </div>
  </section>
<div style={{position:'relative',marginTop:50,backgroundColor:'#1f2732'}}>
  <div style={{backgroundColor:'#1f2732',paddingLeft:matches?80:0,paddingRight:matches?80:0,width:'100%'}}  className={matches?" row d-flex justify-content-between align-items-center":"row justify-content-center"}>
    <div className=" col-lg-4 col-md-12 col-xs-12" style={{paddingBottom:(matches&&matches3)?0:(matches&&!matches3)?70:15}} >
      <h1 style={{fontSize:matches?220:100,color:'#ff497c',marginLeft:matches?0:20}}>01</h1>
     {matches&&!matches2&&matches3?
     <h2 style={{color:'black',fontSize:matches?50:25,fontWeight:'bold',color:'white',position:'absolute',top:matches?100:0,left:matches?700:40,width:250}}>About Us</h2>
     :<h2 style={{color:'black',fontSize:matches?50:25,fontWeight:'bold',color:'white',position:'absolute',top:matches?100:!matches?40:0,right:matches?10:40}}>About Us</h2>}
      </div>
      <div style={(matches&&!matches2)?styling.imgS:null}>
      <img style={{ maxWidth: 300, height: 300,borderRadius:'50%',padding:0,border:'10px solid black'}} src={bestImage} alt="best software house in brentwood" className="col-lg-4 col-md-12col-xs-12" />
      </div>
      <div style={{width:matches&&matches3?'20%':'80%'}} className="col-lg-4 col-md-12 col-xs-12">
        <p style={{textAlign:'center',color:'#a4a9b9'}}>
        We are online service providers and California based firm.
         We do our business in the way which gives you unique benefits and also to us. 
         We are not linked with bank which requires you to fill many criteria to meet your needs.
          We are a private company and engrave your value with metal and Gold card. 
           
       </p></div> 

  </div>
 {(matches&&matches2)?<img src={right_arrow} style={{width:34,height:134,zIndex:4,position:'absolute',left:'60%',display:'block',top:'20%'}} />:null}
  <div style={{backgroundColor:'#1f2732',paddingLeft:matches?80:0,paddingRight:matches?80:0,paddingTop:matches?40:0,width:'100%',}}  className={matches?" row d-flex justify-content-between align-items-center":"row justify-content-center"}>
  {matches&&matches4?<div style={{width:matches&&matches3?'20%':'80%',paddingBottom:(matches&&matches3)?0:(matches&&!matches3)?70:15}} className="col-lg-4 col-md-12 col-xs-12">
        <p style={{textAlign:'center',color:'#a4a9b9'}}>
        We have a very simple and efficient mission to give our clients best securities, prestige, rareness, durability and excellence. We as a strong competitor in the market, also want to be at the top not just by our quantity but due to our quality. 
       </p></div>:<div className=" col-lg-4 col-md-12 col-xs-12" style={{paddingBottom:(matches&&matches3)?0:(matches&&!matches3)?70:15}} >
    {matches&&!matches2&&matches3?<h1 style={{fontSize:matches?220:100,color:'#A0CE4E',marginLeft:matches?600:20,flexGrow:1,textAlign:'right'}}>02</h1>:<h1 style={{fontSize:matches?220:100,color:'#A0CE4E',marginLeft:matches?0:20,flexGrow:1,textAlign:'right'}}>02</h1>}
     {matches&&matches2?<h1 style={{fontSize:matches?220:100,color:'#A0CE4E',flexGrow:1,textAlign:'right'}}>02</h1>:
     <h2 style={{color:'black',fontSize:matches?50:25,fontWeight:'bold',color:'white',position:'absolute',top:matches?100:40,left:matches?-20:40}}>Mission</h2>}
      </div>}
      <div style={(matches&&!matches2)?styling.imgS:null}><img style={{ maxWidth: 300, height: 300,borderRadius:'50%',border: '10px solid black',padding:0}} src={bestImage} alt="best software house in brentwood" className="col-lg-4 col-md-12col-xs-12" /></div>
     
      {matches&&matches2?<div className=" col-lg-4 col-md-12 col-xs-12"  style={{paddingBottom:(matches&&matches3)?0:(matches&&!matches3)?70:15}}  >
      <h1 style={{fontSize:matches?220:100,color:'#A0CE4E',marginLeft:matches?0:20}}>02</h1>
      <h2 style={{color:'black',fontSize:matches?50:25,fontWeight:'bold',color:'white',position:'absolute',top:matches?100:40,right:matches?-20:20}}>Mission</h2>
      </div> : <div style={{width:matches&&matches3?'20%':'80%'}} className="col-lg-4 col-md-12 col-xs-12">
        <p style={{textAlign:'center',color:'#a4a9b9'}}>
        We define your competition and target audience. Discover what is working in your online industry, the real potential for gains, the estimated time of growth, then design your website and plan the marketing accordingly
       </p></div>}

  </div>
 {(matches&&matches2)?<img src={left_arrow} style={{width:34,height:134,zIndex:4,position:'absolute',left:'38%',display:'block',top:'46%'}} />:null}
  <div style={{backgroundColor:'#1f2732',paddingLeft:matches?80:0,paddingRight:matches?80:0,paddingTop:matches?40:0,width:'100%'}}  className={matches?" row d-flex justify-content-between align-items-center":"row justify-content-center"}>
    <div className=" col-lg-4 col-md-12 col-xs-12" style={{paddingBottom:(matches&&matches3)?0:(matches&&!matches3)?70:15}}  >
      <h1 style={{fontSize:matches?220:100,color:'#00BEA3',marginLeft:matches?0:20}}>03</h1>
      {matches&&!matches2&&matches3?
     <h2 style={{color:'black',fontSize:matches?50:25,fontWeight:'bold',color:'white',position:'absolute',top:matches?100:0,left:matches?700:40,width:250}}>Features</h2>
     :<h2 style={{color:'black',fontSize:matches?50:25,fontWeight:'bold',color:'white',position:'absolute',top:matches?100:!matches?40:0,right:matches?10:40}}>Features</h2>}
      </div>
      <div style={(matches&&!matches2)?styling.imgS:null}><img style={{ maxWidth: 300, height: 300,borderRadius:'50%',border: '10px solid black',padding:0}} src={bestImage} alt="best software house in brentwood" className="col-lg-4 col-md-12col-xs-12" /></div>
      <div style={{width:matches&&matches3?'20%':'80%'}} className="col-lg-4 col-md-12 col-xs-12">
        <p style={{textAlign:'center',color:'#a4a9b9',marginTop:'20px',flexGrow:1}}>
        There are no raised lettering and numbering taken into consideration in DT Modern Card. If you have raising letters, then might have problem with that someone can easily copy this from your card. But using our upgraded Metal or 24k Gold card, it might be riskier attempt for others to copy your information.
       </p></div> 

  </div>
{(matches&&matches2)?<img src={right_arrow} style={{width:34,height:134,zIndex:4,position:'absolute',left:'60%',display:'block',top:'71%'}} />:null}
<div style={{backgroundColor:'#1f2732',paddingLeft:matches?80:0,paddingRight:matches?80:0,paddingTop:matches?40:0,width:'100%',}}  className={matches?" row d-flex justify-content-between align-items-center":"row justify-content-center"}>
  {matches&&matches4?<div style={{width:matches&&matches3?'20%':'80%',paddingBottom:(matches&&matches3)?0:(matches&&!matches3)?70:15}} className="col-lg-4 col-md-12 col-xs-12">
        <p style={{textAlign:'center',color:'#a4a9b9'}}>
        We have a very simple and efficient mission to give our clients best securities, prestige, rareness, durability and excellence. We as a strong competitor in the market, also want to be at the top not just by our quantity but due to our quality. 
       </p></div>:<div className=" col-lg-4 col-md-12 col-xs-12" style={{paddingBottom:(matches&&matches3)?0:(matches&&!matches3)?70:15}} >
    {matches&&!matches2&&matches3?<h1 style={{fontSize:matches?220:100,color:'#F1894C',marginLeft:matches?600:20,flexGrow:1,textAlign:'right'}}>04</h1>:<h1 style={{fontSize:matches?220:100,color:'#F1894C',marginLeft:matches?0:20,flexGrow:1,textAlign:'right'}}>04</h1>}
     {matches&&matches2?<h1 style={{fontSize:matches?220:100,color:'#F1894C',flexGrow:1,textAlign:'right'}}>04</h1>:
     <h2 style={{color:'black',fontSize:matches?50:25,fontWeight:'bold',color:'white',position:'absolute',top:matches?100:40,left:matches?-20:40}}>Security</h2>}
      </div>}
      <div style={(matches&&!matches2)?styling.imgS:null}><img style={{ maxWidth: 300, height: 300,borderRadius:'50%',border: '10px solid black',padding:0}} src={bestImage} alt="best software house in brentwood" className="col-lg-4 col-md-12col-xs-12" /></div>
     
      {matches&&matches2?<div className=" col-lg-4 col-md-12 col-xs-12"  style={{paddingBottom:(matches&&matches3)?0:(matches&&!matches3)?70:15}}  >
      <h1 style={{fontSize:matches?220:100,color:'#F1894C',marginLeft:matches?0:20}}>04</h1>
      <h2 style={{color:'black',fontSize:matches?50:25,fontWeight:'bold',color:'white',position:'absolute',top:matches?100:40,right:matches?-20:20}}>Security</h2>
      </div> : <div style={{width:matches&&matches3?'20%':'80%'}} className="col-lg-4 col-md-12 col-xs-12">
        <p style={{textAlign:'center',color:'#a4a9b9'}}>
        We define your competition and target audience. Discover what is working in your online industry, the real potential for gains, the estimated time of growth, then design your website and plan the marketing accordingly
       </p></div>}
       
  </div>
  </div>
      <section id="strategy" >
    <div className="container" >
      <div className=" col-lg-12 col-md-12 col-xs-12"  style={{display:'flex',justifyContent:'center',marginTop:'20px'}}>
            <img style={{display: 'block', maxWidth: '100%', height: 'auto'}} src={redLine} alt="best software house in brentwood" /> 
          </div>
      
          <div  style={{display:'flex',justifyContent:'center',alignItems:'center',marginBottom:'10px',textAlign:'center',marginTop:'20px'}}>
              <p style={{marginLeft:15,marginRight:15,width:'80%',fontSize:'17px'}}>
              DT Modern Card is a company which enhances your personality and value by giving the services of upgrading your Plastic Card to Beautiful Metal and 24k Gold Cards. 
We are online service providers and California based firm. We do our business in the way which gives you unique benefits and also to us. We are not linked with bank which requires you to fill many criteria to meet your needs. We are a private company and engrave your value with metal and Gold card. There is no need to move far but to have our services. 
</p>
          </div>

    
        <div className=" col-lg-12 col-md-12 col-xs-12"  style={{display:'flex',justifyContent:'center',marginBottom:'-20px'}}>
            <img style={{display: 'block', maxWidth: '100%', height: 'auto'}} src={redLine} alt="best software house in brentwood" /> 
          </div>
    </div>
  </section>
     
  <div style={{marginTop:50}}>
      <FooterBackground />
      </div>
    </div>
  );
}
