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
      <Container />
      <Footer />
      </div>

    </div>
  );
}
