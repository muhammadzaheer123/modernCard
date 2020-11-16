import React from "react";
// nodejs library that concatenates classNamees
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "assets/jss/material-kit-react/views/components.js";
import { connect } from 'react-redux';
import './cart.css';

import { useLocation } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { } from '@fortawesome/free-brands-svg-icons';

import { Link } from 'react-router-dom';
import Cancel from '@material-ui/icons/Cancel';
import { removeCard, changeQuantityValue } from '../../Redux/Action/index';

const useStyles = makeStyles(styles);
const styler={
    display:'flex',
    justifyContent:'center'
}


function CartDetails(props) {

    var [val, setVal] = React.useState(props.card_quantity);
    var [total, setTotal] = React.useState(props.no_of_cards * 90);
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:600px)');
    const matches1 = useMediaQuery('(min-width:960px)');
    const { ...rest } = props;
    const routerParams = useLocation();


    return (
        <div>
            <div style={{ marginTop: -75 }}>
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
            <Parallax style={{ marginTop: -20 }} image={require("assets/img/network.jpg")}>
            </Parallax>




            <div className="row">



               
                    <table className={(matches&&matches1)?"ec_cart col-lg-7 col-md-6 col-xs-12":''} style={{width:(matches&&matches1)?0:'100%'}} >
                  {matches&&matches1?<thead>
                            <tr>
                                <th className="ec_cartitem_head_name" >Product</th>
                                <th className="ec_cartitem_head_price">Price</th>
                                <th className="ec_cartitem_head_quantity">Quantity</th>
                                {/* <th className="ec_cartitem_head_total">Total</th> */}
                            </tr>
                  </thead> :null}
                        {props.items != [] ? props.items.map(item => (
                         
                         matches&&matches1? <tbody>
                                <tr className="ec_cartitem_row">                   
                                    <td>
                                        
                                            <Cancel  style={{ color: 'red' }} onClick={() => props.removeCard(item.card_name)} />
                                    <div  >
                                        <img     style={{ top: -20,width:400,height:500,objectFit:'contain' }} src={item.card_type} alt=" " /></div>
                                        <div ><h4 style={{ marginTop: -40, marginLeft: -50 }}>{item.card_name}</h4></div>
                                    </td>
                              
                                    <td  >{`$${item.card_price}`}</td>
                                    <td  >
                                        <div className="ec_cartitem_updating" id="ec_cartitem_updating_1750"></div>
                                        <table className="ec_cartitem_quantity_table">
                                            <tbody>
                                                <tr>
                                                    <td className="ec_minus_column">
                                                        <input type="button" value="-" className="ec_plus" onClick={() => props.changeQuantityValue(item.card_name, 'minus')} /></td>
                                                    <td className="ec_quantity_column"><input value={item.card_quantity} className="ec_quantity" style={{ height: 25 }} /></td>
                                                    <td className="ec_plus_column"><input type="button" value="+" className="ec_plus" onClick={() => props.changeQuantityValue(item.card_name, 'plus')} /></td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </td>

                                </tr>

                            </tbody> :<div style={{display:'flex',flexDirection:'column',width:'100%',justifyContent:'center',alignItems:'center'}}>
                            <Cancel  style={{ color: 'red',marginTop:20,marginBottom:-30 }} onClick={() => props.removeCard(item.card_name)} />
                            <img     style={{ width:300,height:300,objectFit:'contain' }} src={item.card_type} alt=" " />
                            <h4 style={{ marginTop: -35, marginLeft: -50 }}>{item.card_name}</h4>
                            <h4 style={{  marginLeft: -50 }}>{`$${item.card_price}`}</h4>
                            <table className="ec_cartitem_quantity_table">
                                            <tbody>
                                                <div style={{ display:'flex',flexDirection:'row',width:'100%'}}>
                                                    <div style={{width:!matches1?'7%':'15%',background:'orange',marginLeft:!matches1&&matches?245:80,borderRadius:'5%',marginRight:10}}>
                                                        <input style={{width:'100%',color:'white',background:'orange',textAlign:'center'}} type="button" value="-" onClick={() => props.changeQuantityValue(item.card_name, 'minus')} /></div>
                                                    <div style={{width:!matches1&&matches?'25%':'50%',border:'1px solid black'}} ><input value={item.card_quantity} style={{ height: 25,border:'none',textAlign:'center',borderRadius:'10%' }} /></div>
                                                    <div style={{width:!matches1?'7%':'15%',marginLeft:10,background:'orange',borderRadius:'5%'}}><input style={{background:'orange',color:'white',textAlign:'center',width:'100%'}} type="button" value="+"  onClick={() => props.changeQuantityValue(item.card_name, 'plus')} /></div>
                                                </div>
 
                                            </tbody>
                                        </table>
                            </div>

                        )) : null}
                    </table>


             
                <div className={!matches1?'col-lg-12':'col-lg-5 col-md-6 col-xs-12'}   >

                    <div  style={{paddingLeft:5,marginTop:!matches?20:0}} className="ec_cart_header ec_top">
                        Cart Totals        </div>

                    <div>
                        <div  style={{paddingRight:5,paddingLeft:5}}className="ec_cart_price_row ec_cart_price_row_subtotal">
                            <div className="ec_cart_price_row_label">Cart Subtotal</div>
                            <div className="ec_cart_price_row_total" id="ec_cart_subtotal">{props.card_gt}</div>
                        </div>
                        <div style={{paddingRight:5,paddingLeft:5}} className="ec_cart_price_row ec_cart_price_row_tax_total" style={{ display: 'none' }}>
                            <div className="ec_cart_price_row_label">Tax</div>
                            <div className="ec_cart_price_row_total" id="ec_cart_tax">$0.00</div>
                        </div>
                        <div   className="ec_cart_price_row ec_cart_price_row_shipping_total" id="ec_cart_shipping_row" style={{ display: 'none' }}>
                            <div className="ec_cart_price_row_label">Shipping</div>
                            <div className="ec_cart_price_row_total" id="ec_cart_shipping">$0.00</div>
                        </div>
                        <div className="ec_cart_price_row ec_cart_price_row_discount_total ec_no_discount">
                            <div className="ec_cart_price_row_label">Discounts</div>
                            <div className="ec_cart_price_row_total" id="ec_cart_discount">$0.00</div>
                        </div>
                        <div style={{paddingRight:5,paddingLeft:5}} className="ec_cart_price_row ec_order_total">
                            <div className="ec_cart_price_row_label">Grand Total</div>
                            <div className="ec_cart_price_row_total" id="ec_cart_total">{`$${total}`}</div>
                        </div>
                        <input type="hidden" name="ec_cart_weight" id="ec_cart_weight" value="0" />



                        <div className="ec_cart_button_row" style={{}}>
                            <Link className="ec_cart_button" to="/Payment" style={{width:'100%'}}><a className="ec_cart_button" >Continue</a></Link>
                        </div>
                        <div className="ec_cart_button_row">
                            <a className="ec_cart_button" >RETURN TO STORE</a>
                        </div>
                        <div style={{paddingLeft:10}} className="ec_cart_header">
                            Coupon        </div>
                        {/* <div className="ec_cart_error_message" id="ec_coupon_error"></div>
    <div className="ec_cart_success_message" id="ec_coupon_success"></div> */}
                        <div>
                            <input style={{ width: '100%' }} type="text" placeholder="Enter Coupon Code" />
                        </div>
                        <div className="ec_cart_button_row">
                            <div className="ec_cart_button" id="ec_apply_coupon" onclick="ec_apply_coupon( );">Apply Coupon</div>

                        </div>
                        <div style={{paddingLeft:10}} className="ec_cart_header">
                            Gift Card        </div>
                        <div className="ec_cart_error_message" id="ec_gift_card_error"></div>
                        <div className="ec_cart_input_row">
                            <input style={{ width: '100%' }} type="text" name="ec_gift_card" id="ec_gift_card" placeholder="Enter Gift Card" />
                        </div>
                        <div style={{ marginBottom: 50 }} className="ec_cart_button_row">
                            <div className="ec_cart_button" id="ec_apply_gift_card" onclick="ec_apply_gift_card( );">Redeem Gift Card</div>

                        </div>

                    </div>


                </div>



            </div>




        </div>



    )
}
const mapStateToProps = state => {
    const cartReducer = state.reducer;
    return cartReducer;
};



export default connect(mapStateToProps, { removeCard, changeQuantityValue })(CartDetails)