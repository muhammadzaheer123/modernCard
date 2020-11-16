import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    li:{
        fontSize:16,
       
     
    },
    span_li:{
        fontSize:16,
        lineHeight:2.2
      
    },
    mainHeader:{
        fontWeight:'bold',
        flexDirection:'row',
        textAlign:'center',
  

    },
    headerText:{
       
        fontWeight:'bold',
        padding:20,
        fontSize:19

    }

  }));
export default function SimpleContainer() {
    const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container style={{marginTop:10,padding:10,backgroundColor:'white',paddingBottom:'20px'}}>
          {/* <h2 className={classes.mainHeader}>Privacy Policy</h2> */}
         <h3 className={classes.headerText}>It is very important for us to maintain your privacy with us and take it into consideration that there will be no chance that your private information can be violated.</h3>
    <div style={{width:'100%',paddingLeft:'20px',paddingRight:'20px'}}>
     <ul style={{fontSize:10,
        listStyleType:'unset',paddingLeft:30}}>
         <li className={classes.li}><span className={classes.span_li}>We collect the information from you at first step which is your name, address and email address.</span></li>
         <li className={classes.li}><span className={classes.span_li}>When you visit our store then we also collect you IP (Internet Protocol) address so that we can gather information to learn your browser and operating system.</span></li>
         <li className={classes.li}><span className={classes.span_li}>We will do email marketing by just your permissions that if you allow then we will send you email about our stores, new products and updates.</span></li>
         <li className={classes.li}><span className={classes.span_li}>When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for a delivery or return a purchase, we imply that you consent to our collecting it and using it for that specific reason only.</span></li>
         <li className={classes.li}><span className={classes.span_li}>If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no.</span></li>
         <li className={classes.li}><span className={classes.span_li}>If you violate our terms and conditions, then we have the authority to disclose your personal information according to law.</span></li>
         <li className={classes.li}><span className={classes.span_li}>In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us.</span></li>
         <li className={classes.li}><span className={classes.span_li}>For third party providers, we suggest you to read carefully their terms of services so you can know that in which manners they work.</span></li>
         <li className={classes.li}><span className={classes.span_li}>Obviously, we are responsible for your personal information. We take reasonable precautions and follow best practices so that your information should not be altered, disclosed or destroyed.</span></li>
         <li className={classes.li}><span className={classes.span_li}>By using this site, you represent that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.</span></li>
         <li className={classes.li}><span className={classes.span_li}>If you leave website of our store or if you are directed to some third party website or application, then you will not be linked with our Policy or terms and conditions.</span></li>
     </ul>
     </div>

        

        
      </Container>
    </React.Fragment>
  );
}
