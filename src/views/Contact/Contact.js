import React from "react";
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
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import Card from 'components/Card/SimpleCard';
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Footer from 'views/About/Footer.js';
import'./card.css';
import styles from "assets/jss/material-kit-react/views/components.js";
import  {faMapMarker,faEnvelope,faAddressCard} from "@fortawesome/free-solid-svg-icons";
import {  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import global from '../../assets/img/global.jpg';
const useStyles = makeStyles(styles);
export default function Contact(props){
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:600px)');
    console.log(matches)
    const { ...rest } = props;
    return(
        <div style={{backgroundColor:'white',height:'100%'}}>
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
          <h2 style={{color:'white',fontWeight:'bold',flexGrow:1,textAlign:'center',fontSize:50}}>Contact Us</h2>
            {/* <GridContainer>
               <GridItem>
               
              </GridItem> 
            </GridContainer> */}
          </div>
        </Parallax>

        
     
       
       <div style={{ backgroundImage: `url(${global})`,
  marginTop: '0px !important',
  backgroundPosition:'cover',
  backgroundRepeat:'no-repeat',
  backgroundSize:'cover',
  backgroundAttachment: 'fixed',
  // background:'rgba(255,255,255,0.7)'


  }}>
       <div className={classes.brand} style={{textAlign:'center',marginTop:50}}>
                 
                 <div style={{marginTop:50,width:'100%',height:450}}>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.270883769998!2d-121.68583698532265!3d37.924101711328234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808ffe849bbe74eb%3A0x3632e6d59b33e03!2s700%20Harvest%20Park%20Dr%20Suite%20E-1%2C%20Brentwood%2C%20CA%2094513%2C%20USA!5e0!3m2!1sen!2s!4v1603460794112!5m2!1sen!2s" width='100%' height={450} frameBorder={0} allowFullScreen="" aria-hidden="false" tabIndex={0} style={{border:0}} ></iframe>
</div>
               
               </div>

    <section id="contact"  style={{  background:'rgba(255,255,255,0.95)'}}  >
      <div className="container" data-aos="fade-up" >

        {/* <div className="section-header">
          <h3>Contact Us</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
        </div> */}

        <div className="row contact-info" style={{marginTop:50}}>

          <div className="col-md-4">
            <div className="contact-address">
           <i style={{color:'orange'}}><FontAwesomeIcon icon={faMapMarker} style={{width:40,height:40}} /></i> 
              <h3>Address</h3>
              <address>A108 Adam Street, NY 535022, USA</address>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-phone">
            <i style={{color:'orange'}}><FontAwesomeIcon icon={faAddressCard} style={{width:40,height:40}} /></i> 
              <h3>Phone Number</h3>
              <p><a href="tel:+155895548855">+1 5589 55488 55</a></p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-email">
            <i style={{color:'orange'}}><FontAwesomeIcon icon={faEnvelope} style={{width:40,height:40}} /></i> 
              <h3>Email</h3>
              <p><a href="mailto:info@example.com">info@example.com</a></p>
            </div>
          </div>

        </div>

        <div className="form">
          <form action="forms/contact.php" method="post" role="form" className="php-email-form">
            <div className="form-row">
              <div className="form-group col-md-6">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <div className="validate"></div>
              </div>
              <div className="form-group col-md-6">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                <div className="validate"></div>
              </div>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
              <div className="validate"></div>
            </div>
            <div className="form-group">
              <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
              <div className="validate"></div>
            </div>
            <div className="mb-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div className="text-center"><button type="submit">Send Message</button></div>
          </form>
        </div>

      </div>
    </section> 
  
<Footer />

    </div>     


        </div>
    )
}