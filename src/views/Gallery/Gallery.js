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

import Footer from 'views/About/Footer.js';
import img1 from '../../assets/img/Gallery/img1.jpg';
import img2 from '../../assets/img/Gallery/img2.jpg';
import img3 from '../../assets/img/Gallery/img3.jpg';
import img4 from '../../assets/img/Gallery/img4.jpg';
import img5 from '../../assets/img/Gallery/img5.jpg';
import img6 from '../../assets/img/Gallery/img6.jpg';
import img7 from '../../assets/img/Gallery/img7.jpg';
import img8 from '../../assets/img/Gallery/img8.jpg';
import img9 from '../../assets/img/Gallery/img9.jpg';
import img10 from '../../assets/img/Gallery/img10.jpg';
import img11 from '../../assets/img/Gallery/img11.jpg';
import img12 from '../../assets/img/Gallery/img12.jpg';
import img13 from '../../assets/img/Gallery/img13.jpg';
import img14 from '../../assets/img/Gallery/img14.jpg';
import img15 from '../../assets/img/Gallery/img15.jpg';
import img16 from '../../assets/img/Gallery/img16.jpg';
import img17 from '../../assets/img/Gallery/img17.jpg';
import img18 from '../../assets/img/Gallery/img18.jpg';
import Buy from '../../assets/img/Buy-CC-Parallux.png';
import Overview from '../Benefits/overview';
import useMediaQuery from '@material-ui/core/useMediaQuery';
const useStyles = makeStyles(styles);

const imagesList=[
  {
    img:img1
  },
  {
    img:img2
  },
  {
    img:img3
  },
  {
    img:img4
  },
  {
    img:img5
  },
  {
    img:img6
  },
  {
    img:img7
  },
  {
    img:img8
  },
  {
    img:img9
  },
  {
    img:img10
  }, {
    img:img11
  },
  {
    img:img12
  },
  {
    img:img13
  },
  {
    img:img14
  },
  {
    img:img15
  },
  {
    img:img16
  },
  {
    img:img17
  }
  ,
  {
    img:img18
  }
]
const styler={

  h1MM:{
  
    fontSize:'55px',
    color:'white',
    flexGrow:1,
    textAlign:'center',
    wordSPacing:'1px',
    letterSpacing:'5px',
    fontFamily:'Roboto'
  }
}
 

export default function PrivacyPolicy(props) {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:600px)');
  const { ...rest } = props;

  return (
    <div>
         <div style={{marginTop:-75}}><Header
       
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
          <h1 style={styler.h1MM}>Photo Gallery</h1>
          {/* <p style={{flexGrow:1,textAlign: 'center',color:'white',marginTop:25,wordSpacing:1,fontSize:30}}>Custom Metal Credit Cards</p> */}
       
        </div>
      </Parallax>
      <div className="row" style={{width:'100%',paddingLeft:30}}>
        {imagesList.map((item,index)=>{
          console.log(item)
          return(
            <img className="col-lg-2 col-md-3 col-xs-6" src={item.img} key={index} style={{marginTop:20}}/>
          )
        })}
      </div>
     <div style={{flexGrow:1,textAlign:'center',marginTop:40}}>
     <button type="button" class="btn btn-info btn-lg" style={{background:'orange',borderColor:'orange'}}>Order Now</button>

     </div>
        
      <div style={{marginTop:40}}>
  
      <Footer />
      </div>

    </div>
  );
}