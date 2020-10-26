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

import Accord from '../../components/Accordian/Accordian';
import Footer from 'views/About/Footer.js';



import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function About(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div style={{backgroundColor:'#f7f1be'}}>
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
          <GridContainer />   
        </div>
      </Parallax>
 <div style={{marginTop:20}}>
      <Accord />
      <Footer />
      </div>
    </div>
  );
}
