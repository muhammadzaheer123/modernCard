import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from 'views/About/Footer.js';

import styles from "assets/jss/material-kit-react/views/components.js";
import image1 from 'assets/img/button-material-white.png';
import image3 from 'assets/img/button-material-black.png';
import image2 from 'assets/img/button-material-blue.png';
import card1 from 'assets/img/card.png';
import card2 from 'assets/img/card2.png';
import card3 from 'assets/img/Rose-Metal.png';

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const [imgS,setSImg]=React.useState(card1);

  const { ...rest } = props;
  return (
    <div style={{ backgroundColor:'#000000'}}>
      <Header
        brand="Material adkjhakdjhakjh"
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
          <GridContainer>
            {/* <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Material Kit React.</h1>
                <h3 className={classes.subtitle}>
                  A Badass Material-UI Kit based on Material Design.
                </h3>
              </div>
            </GridItem> */}
          </GridContainer>
        </div>
      </Parallax>
      <div style={{display:'flex',width:'100%',justifyContent:'center',alignItems:'center',backgroundColor:'black'}}>
        <img src={imgS} style={{widt:'100%'}} alt="" />

      </div>
      <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:-20,width:'100%'}}>
        <img style={{objectFit:'contain',width:200,height:50,borderRadius:10,objectFit:'contain'}} src={image1} alt="" onClick={()=>setSImg(card1)} />
        <img style={{objectFit:'contain',width:200,height:50,borderRadius:10,objectFit:'contain'}} src={image2} alt="" onClick={()=>setSImg(card2)} />
        <img style={{objectFit:'contain',width:200,height:50,borderRadius:10,objectFit:'contain'}} src={image3} alt=""  onClick={()=>setSImg(card3)} />

      </div>

 <div style={{marginTop:20}}><Footer />
 </div>

    </div>
  );
}
