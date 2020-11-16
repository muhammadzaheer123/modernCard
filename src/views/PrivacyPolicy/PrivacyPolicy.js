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
import Container from '../../components/Container/Container';
import Footer from 'views/About/Footer.js';

const useStyles = makeStyles(styles);

export default function PrivacyPolicy(props) {
  const classes = useStyles();
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
      <Parallax style={{marginTop:-20}}  image={require("assets/img/network.jpg")}>
      <div style={{marginBottom:50}} className={classes.container} >
          <h1 style={{
               fontSize:'55px',
               color:'white',
               flexGrow:1,
               textAlign:'center',
               wordSPacing:'1px',
               letterSpacing:'5px',
               fontFamily:'Roboto'
          }}>Privacy Policy</h1>
          {/* <p style={{flexGrow:1,textAlign: 'center',color:'white',marginTop:25,wordSpacing:1,fontSize:30}}>Custom Metal Credit Cards</p> */}
       
        </div>
      </Parallax>
      <div style={{marginTop:20,marginBottom:20}}>
      <Container />
      <Footer />
      </div>

    </div>
  );
}
