import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: 'black',
  },
  AccordianContainer:{
      marginTop:10
  },
  boxContainer:{
    paddingLeft:20,
    paddingTop:0,
    paddingRight:20,
    paddingBottom:20,
      width:'100%'
  }
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
        <h3 style={{flexGrow:1,textAlign:'center',fontWeight:'bold',fontSize:40,color:'black'}}>FAQ</h3>
    <Box className={classes.boxContainer}><Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
         
          <Typography className={classes.secondaryHeading}>1: How safe is this process?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          DT Modern Tech guarantees the safety of this process or your money back!!
          All Transactions are SSL Secured. We require all clients to submit either a frozen/locked or unactivated plastic debit|credit card for maximum security during transport. 
          We provide free shipping security envelopes with tracking to all clients within the United States. 
          Lastly we offer a FREE comprehensive warranty; as well as an extended warranty that covers damaged, malfunctioning and or manufacture defects. 
          As a veteran owned business we stand 100% behind our service.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  className={classes.AccordianContainer} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
        
          <Typography className={classes.secondaryHeading}>
          2: How long does this process takes? 
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We wish to get you Metal or 24k Gold card on your hand as soon as possible. 
          In short, we can get back your updated Card within 3 business days. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  className={classes.AccordianContainer} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
         
          <Typography className={classes.secondaryHeading}>
          3: Is my card insured?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          No! We do not protect against lost or theft of your card. However,
           we do offer Card Insurance Policies. You can enroll for one small monthly fee to keep your custom metal card insured. 
          We will replace your card at no cost to you, up to two times in one year.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  className={classes.AccordianContainer} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.secondaryHeading}>4: I want to upgrade my debit card. Will my PIN number still work with the new metal card?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          YES! Your New Metal card will have the same embedded information that is on your plastic card, so nothing changes. 
          You can use it in ATMs and debit machines as usual.  
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  className={classes.AccordianContainer} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography  className={classes.AccordianContainer} className={classes.secondaryHeading}>5: How many upgraded, metal cards can I order?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You may place as many orders as you like for each bank-issued credit or debit card you wish to upgrade. 
          You will submit each original, bank-issued card as an individual order. Orders for multiple bank-issued cards cannot be combined. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Box>  
    </div>
  );
}
