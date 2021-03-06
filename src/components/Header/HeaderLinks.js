/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import { connect } from 'react-redux';
import Badge from '@material-ui/core/Badge';
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";


import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

 function HeaderLinks(props) {

  const classes = useStyles();
  return (
    <List className={classes.list} style={{background:'red'}}>
      <ListItem className={classes.listItem}>
        {/* <CustomDropdown
          noLiPadding
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              All components
            </Link>,
            <a
              href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>
          ]} */}
        {/* /> */}
        <Button
         component={Link} 
         to="/"
       
          color="transparent"
         
          className={classes.navLink}
        >
          {/* <CloudDownload className={classes.icons} /> Download */}
        Home
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
           component={Link} 
           to="/About"
          
        
          color="transparent"

          
          className={classes.navLink}
        >
          {/* <CloudDownload className={classes.icons} /> Download */}
          About Us
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          // href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
          color="transparent"
          // target="_blank"
          className={classes.navLink}
          to="/Work"
          component={Link}
        >
           How this works
        </Button>
      </ListItem>
      {/* <ListItem className={classes.listItem}>
       <Button color="transparent" className={classes.navLink} component={Link} to="/Benefits">Benefits</Button>
      </ListItem> */}
      <ListItem className={classes.listItem}>
       <Button color="transparent" className={classes.navLink} component={Link} to="/Gallery">Gallery</Button>
      </ListItem>
      <ListItem className={classes.listItem}>
       <Button color="transparent" className={classes.navLink} component={Link} to="/Shop">Shop</Button>
      </ListItem>
      <ListItem className={classes.listItem}>
       <Button color="transparent" className={classes.navLink} component={Link} to="/FAQs">Faqs</Button>
      </ListItem>
      <ListItem className={classes.listItem}>
       <Button color="transparent" className={classes.navLink} to="/Contact" component={Link}  >Contact</Button>
      </ListItem>
      <ListItem className={classes.listItem}>
       <Button color="transparent"  to="/Privacy" component={Link} className={classes.navLink}>Privacy Policy</Button>
      </ListItem>
      {props.items.length>=1?
      <ListItem className={classes.listItem}>
       <Button color="transparent"  to="/CartDetails" component={Link} className={classes.navLink}><Badge color="secondary" variant="dot" >
          <ShoppingCartIcon />
        </Badge></Button>
      </ListItem>
      :null}

      {/* <ListItem className={classes.listItem}> */}
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        {/* <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/CreativeTim?ref=creativetim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip> */}
      {/* </ListItem> */}
    </List>
  );
}

const mapStateToProps = state => {
  const cartReducer = state.reducer;
  console.log('header',cartReducer)
  return cartReducer; 
};



export default connect(mapStateToProps,null)(HeaderLinks);