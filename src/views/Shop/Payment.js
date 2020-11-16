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
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";

import useMediaQuery from '@material-ui/core/useMediaQuery';
import Footer from 'views/About/Footer.js';
import styles from "assets/jss/material-kit-react/views/components.js";
import { faMapMarker, faEnvelope, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { } from '@fortawesome/free-brands-svg-icons';
import stripe from 'assets/img/stripe.png';
import { PayPalButton } from "react-paypal-button-v2";





const useStyles = makeStyles(styles);
export default function Contact(props) {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:600px)');

    const { ...rest } = props;
    return (
        <div style={{ backgroundColor: 'white', height: '100%' }}>
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
                <div className={classes.container} onClick={()=>alert('ok')}>
                    <h2 style={{ color: 'white', fontWeight: 'bold', flexGrow: 1, textAlign: 'center', fontSize: 50, marginTop: 50,fontFamily:'serif' }}>PAY WITH STRIPE</h2>
                   
                    {/* <GridContainer>
               <GridItem>
               
              </GridItem> 
            </GridContainer> */}
                </div>
            </Parallax>
            <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',marginTop:20,flexDirection:'column'}}>
            <img src={stripe} alt="" style={{width:'150px',height:'150px',objectFit:'contain'}} />
            <h4 style={{marginLeft:50}}>Enter your credentials below to confirm your order</h4>
            </div>
            <div  style={{marginTop:-50,width:'100%',heght:'1000px'}}>
            <iframe src="https://card.dtmoderntech.com/stripe_gateway/index.php" width="100%" height="1000px" frameBorder={0} allowFullScreen="" aria-hidden="false" tabIndex={0} style={{border:0}} ></iframe>
            </div>
            <div style={{display:'flex',justifyContent:'center',alignItems:'flex-start',width:'100%',marginTop:-300}}>
            <PayPalButton
      amount = {200}
      currency = {'USD'}
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={(details, data) => {
          console.log('details',details,'data',data)
          alert("Transaction completed by " + details.payer.name.given_name);
 
          // OPTIONAL: Call your server to save the transaction
          return fetch('https://www.paypal.com/sdk/js?client-id=AciljUJIetLqw4xS4n0kUPufO0QJv0nqhGR_3FD_Q9Yo7C1JK7fCOwOA8bbKp72HJxSTubGMERR-wGSy', {
            method: "post",
            body: JSON.stringify({
              orderID: data.orderID
            })
          });
        }}
      />
      </div>
            </div>
    )}