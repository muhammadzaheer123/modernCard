import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import home1 from 'assets/img/hom1.jpg';
import home2 from 'assets/img/hom2.jpg';
import Boby from 'assets/img/bobyTrain.jpeg';
import { Link } from "react-router-dom";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";

import GridContainer from "components/Grid/GridContainer.js";

import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "assets/jss/material-kit-react/views/components.js";

import Footer from 'views/About/Footer.js';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { connect } from 'react-redux';
import { cardMiniDetail } from '../../Redux/Action/index';

import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./slider-animations.css";
import "./styles.css";
import "./home.css";
const useStyles = makeStyles(styles);
const content = [{
        title: "Vulputate Mollis Ultricies Fermentum Parturient",
        description: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
        button: "Read More",
        image: "https://i.imgur.com/ZXBtVw7.jpg",
        user: "Luan Gjokaj",
        userProfile: "https://i.imgur.com/JSW6mEk.png"
    },
    {
        title: "Tortor Dapibus Commodo Aenean Quam",
        description: "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
        button: "Discover",
        image: "https://i.imgur.com/DCdBXcq.jpg",
        user: "Erich Behrens",
        userProfile: "https://i.imgur.com/0Clfnu7.png"
    },
    {
        title: "Phasellus volutpat metus",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
        button: "Buy now",
        image: "https://i.imgur.com/DvmN8Hx.jpg",
        user: "Bruno Vizovskyy",
        userProfile: "https://i.imgur.com/4KeKvtH.png"
    }
];
export default function Home(props) {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:600px)');
    const {...rest } = props;
    return ( <div>
        <div style={{marginTop:-75}}>
        <Header

        rightLinks = { < HeaderLinks / > }
     
        changeColorOnScroll = {
            {
                height: 400,
                color: "black",

            }
        } {...rest }
        />
        </div>





        <Slider className = "slider-wrapper-c"
        autoplay = { 3000 } >

        {
            content.map((item, index) => ( 
            <div key = { index }
                className = "slider-content-c"
                style = {
                    { background: `url('${item.image}') no-repeat center center` } } >

                <div className = "inner" >
                <h1 > { item.title } </h1>
                <p > { item.description }</p><button >{ item.button }</button>
                </div> 
                <section >
                <img src = { item.userProfile }
                alt = { item.user }
                /> <span >Posted by < strong > { item.user } </strong>
                </span></section></div>
            ))
        }</Slider>
        <div id="main" className="sidebar-none sidebar-divider-off">
<div className="main-gradient"></div>
<div className="wf-wrap">
<div className="wf-container-main">
<div id="content" className="content" role="main">
<div data-elementor-type="wp-page" data-elementor-id="14" className="elementor elementor-14"
data-elementor-settings="[]">
<div className="elementor-inner">
<div className="elementor-section-wrap">
<section
className="elementor-section elementor-top-section elementor-element elementor-element-248bc82 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
data-id="248bc82" data-element_type="section" id="about">
<div className="elementor-container elementor-column-gap-wider">
<div className="elementor-row">
<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-9e388b5"
data-id="9e388b5" data-element_type="column">
<div className=" col-lg-6 col-md-12 col-xs-12 elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-d43e96d elementor-widget elementor-widget-heading"
data-id="d43e96d" data-element_type="widget"
data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">
About Us</h2>
</div>
</div>
<div className="elementor-element elementor-element-69e0e44 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
data-id="69e0e44" data-element_type="widget"
data-widget_type="divider.default">
<div className="elementor-widget-container">
<div className="elementor-divider"> <span
className="elementor-divider-separator"> </span></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section
className="elementor-section elementor-top-section elementor-element elementor-element-9a1d3d9 elementor-reverse-tablet elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default"
data-id="9a1d3d9" data-element_type="section">
<div className="elementor-container elementor-column-gap-wider">
<div className="elementor-row">
<div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-cbe325b"
data-id="cbe325b" data-element_type="column">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-791e47d elementor-widget elementor-widget-heading"
data-id="791e47d" data-element_type="widget"
data-widget_type="heading.default">
<div className="elementor-widget-container">
<div className="elementor-heading-title elementor-size-default">
Your reliable business partner</div>
</div>
</div>
<div className="elementor-element elementor-element-ac1fd5c elementor-widget elementor-widget-heading"
data-id="ac1fd5c" data-element_type="widget"
data-widget_type="heading.default">
<div className="elementor-widget-container">
<h4 className="elementor-heading-title elementor-size-default">Feel the value of you with us!</h4>
</div>
</div>
<div className="elementor-element elementor-element-eaf58be elementor-widget elementor-widget-text-editor"
data-id="eaf58be" data-element_type="widget"
data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<div className="elementor-text-editor elementor-clearfix">
<p style={{color:'black'}}>DT Modern Card is a company which enhances your personality and value by giving the services of upgrading your Plastic Card to Beautiful Metal and 24k Gold Cards.</p>
</div>
</div>
</div>
<section
className="elementor-section elementor-inner-section elementor-element elementor-element-3943498 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
data-id="3943498" data-element_type="section">
<div className="elementor-container elementor-column-gap-no">
<div className="elementor-row">
<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-6575969"
data-id="6575969" data-element_type="column">
<div
className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-1dd5008 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
data-id="1dd5008"
data-element_type="widget"
data-widget_type="icon-list.default">
<div className="elementor-widget-container">
    <ul
        className="elementor-icon-list-items">
        <li
            className="elementor-icon-list-item">
            <span
                className="elementor-icon-list-icon">
                <i aria-hidden="true"
                    className="fas fa-check"></i>
            </span> <span
                className="elementor-icon-list-text">Rearness</span></li>
        <li
            className="elementor-icon-list-item">
            <span
                className="elementor-icon-list-icon">
                <i aria-hidden="true"
                    className="fas fa-check"></i>
            </span> <span
                className="elementor-icon-list-text">Permanence</span></li>
        <li
            className="elementor-icon-list-item">
            <span
                className="elementor-icon-list-icon">
                <i aria-hidden="true"
                    className="fas fa-check"></i>
            </span> <span
                className="elementor-icon-list-text">Brilliant
                implementation</span>
        </li>
    </ul>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-051cd2f"
data-id="051cd2f" data-element_type="column">
<div
className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-08124a2 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
data-id="08124a2"
data-element_type="widget"
data-widget_type="icon-list.default">
<div className="elementor-widget-container">
    <ul
        className="elementor-icon-list-items">
        <li
            className="elementor-icon-list-item">
            <span
                className="elementor-icon-list-icon">
                <i aria-hidden="true"
                    className="fas fa-check"></i>
            </span> <span
                className="elementor-icon-list-text">Money
                back guarantee</span>
        </li>
        <li
            className="elementor-icon-list-item">
            <span
                className="elementor-icon-list-icon">
                <i aria-hidden="true"
                    className="fas fa-check"></i>
            </span> <span
                className="elementor-icon-list-text">Customer
                support</span></li>
        <li
            className="elementor-icon-list-item">
            <span
                className="elementor-icon-list-icon">
                <i aria-hidden="true"
                    className="fas fa-check"></i>
            </span> <span
                className="elementor-icon-list-text">Individual
                solutions</span></li>
    </ul>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<div className="elementor-element elementor-element-0600ade elementor-align-justify elementor-mobile-align-justify elementor-widget__width-auto elementor-widget-mobile__width-inherit elementor-widget elementor-widget-button"
data-id="0600ade" data-element_type="widget"
data-widget_type="button.default">
<div className="elementor-widget-container">
<div   className="elementor-button-wrapper"> <a
href="/About"
component={Link} 
className="elementor-button-link elementor-button elementor-size-xs"
role="button"> <span
className="elementor-button-content-wrapper"> <span
className="elementor-button-icon elementor-align-icon-left">
<i aria-hidden="true"
className="fas fa-comment-dots"></i> </span>
<span className="elementor-button-text">Acknowledge More</span> </span> </a></div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-861a13a"
data-id="861a13a" data-element_type="column"
data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-1a4d0af elementor-aspect-ratio-169 elementor-widget elementor-widget-video"
data-id="1a4d0af" data-element_type="widget"
data-settings="{&quot;lightbox&quot;:&quot;yes&quot;,&quot;aspect_ratio&quot;:&quot;169&quot;}"
data-widget_type="video.default">
<div className="elementor-widget-container">
<div className="elementor-wrapper elementor-open-lightbox">
<div className="elementor-custom-embed-image-overlay"
data-elementor-open-lightbox="yes"
data-elementor-lightbox="{&quot;type&quot;:&quot;video&quot;,&quot;videoType&quot;:&quot;youtube&quot;,&quot;url&quot;:&quot;https:\/\/www.youtube.com\/embed\/XHOmBV4js_E?feature=oembed&amp;start&amp;end&amp;wmode=opaque&amp;loop=0&amp;controls=1&amp;mute=0&amp;rel=0&amp;modestbranding=0&quot;,&quot;modalOptions&quot;:{&quot;id&quot;:&quot;elementor-lightbox-1a4d0af&quot;,&quot;entranceAnimation&quot;:&quot;&quot;,&quot;entranceAnimation_tablet&quot;:&quot;&quot;,&quot;entranceAnimation_mobile&quot;:&quot;&quot;,&quot;videoAspectRatio&quot;:&quot;169&quot;}}">
<img loading="lazy" width="900" height="580"
className="lazy-load is-loaded"
src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/elementor/thumbs/img001-9-1-oog1s1e3ty7vfjqv6y6i64n8giuymwyjc0u89s538o.jpg"
title="img001-9" alt="img001-9"
style={{willChange: 'auto'}} />
<div className="elementor-custom-embed-play"
role="button"> <i className="eicon-play"
aria-hidden="true"></i> <span
className="elementor-screen-only">Play
Video</span></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section
className="elementor-section elementor-top-section elementor-element elementor-element-fc9638a elementor-section-boxed elementor-section-height-default elementor-section-height-default"
data-id="fc9638a" data-element_type="section">
<div className="elementor-container elementor-column-gap-wider">
<div className="elementor-row">
<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-107c475"
data-id="107c475" data-element_type="column">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-e68afe1 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
data-id="e68afe1" data-element_type="widget"
data-widget_type="divider.default">
<div className="elementor-widget-container">
<div className="elementor-divider"> <span
className="elementor-divider-separator"> </span></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
 {/* <section
className="elementor-section elementor-top-section elementor-element elementor-element-a40d662 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
data-id="a40d662" data-element_type="section" id="services">
<div className="elementor-container elementor-column-gap-wider">
<div className="elementor-row">
<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ef358dd"
data-id="ef358dd" data-element_type="column">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-a23829d elementor-widget elementor-widget-heading"
data-id="a23829d" data-element_type="widget"
data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">
Our services</h2>
</div>
</div>
<div className="elementor-element elementor-element-5204b03 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
data-id="5204b03" data-element_type="widget"
data-widget_type="divider.default">
<div className="elementor-widget-container">
<div className="elementor-divider"> <span
className="elementor-divider-separator"> </span></div>
</div>
</div>
<div className="elementor-element elementor-element-73adfe5 elementor-widget__width-initial elementor-widget elementor-widget-text-editor"
data-id="73adfe5" data-element_type="widget"
data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<div className="elementor-text-editor elementor-clearfix">
<h4 style={{textAlign: 'center'}}><strong>Whatever the
mind of man can conceive and believe, it can
achieve. Thoughts are things! And powerful
things at that, when mixed with definiteness of
purpose, and burning desire, can be translated
into riches.</strong></h4>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>  */}
 {/* <section
className="elementor-section elementor-top-section elementor-element elementor-element-60d1156 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
data-id="60d1156" data-element_type="section">
<div className="elementor-container elementor-column-gap-wider">
<div className="elementor-row">
<div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-2d0d8b0"
data-id="2d0d8b0" data-element_type="column">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-048cac9 elementor-widget elementor-widget-image"
data-id="048cac9" data-element_type="widget"
data-widget_type="image.default">
<div className="elementor-widget-container">
<div className="elementor-image"> <a
href="/elementor-business-one-page/service/%20">
<img src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/elementor/thumbs/img001-25-1-oog1s7yuadcypwc3cbc300a1p65gkm5kgwn0ikucug.jpg"
title="img001-25" alt="img001-25" /> </a></div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-c7da45d"
data-id="c7da45d" data-element_type="column">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-28c6d7d elementor-widget elementor-widget-heading"
data-id="28c6d7d" data-element_type="widget"
data-widget_type="heading.default">
<div className="elementor-widget-container">
<h4 className="elementor-heading-title elementor-size-default">
B2B services</h4>
</div>
</div>
<div className="elementor-element elementor-element-6dd4f50 elementor-widget elementor-widget-text-editor"
data-id="6dd4f50" data-element_type="widget"
data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<div className="elementor-text-editor elementor-clearfix">
<p>Ut sit amet semper arcu – dolor proin eget ex
convallis eu viverra lorem pretium. Morbi dapibus a
tellus at euismod. Morbi tellus at euismod lorem
ipsum dolor.</p>
</div>
</div>
</div>
<div className="elementor-element elementor-element-e979415 elementor-align-left elementor-mobile-align-center elementor-widget elementor-widget-button"
data-id="e979415" data-element_type="widget"
data-widget_type="button.default">
<div className="elementor-widget-container">
<div className="elementor-button-wrapper"> <a
href="/elementor-business-one-page/service01/%20"
className="elementor-button-link elementor-button elementor-size-xs"
role="button"> <span
className="elementor-button-content-wrapper"> <span
className="elementor-button-icon elementor-align-icon-right">
<i aria-hidden="true"
className=" icomoon-the7-font-the7-arrow-09"></i>
</span> <span
className="elementor-button-text">Details</span>
</span> </a></div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-7c8703f"
data-id="7c8703f" data-element_type="column">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-f6ab0ec elementor-widget elementor-widget-image"
data-id="f6ab0ec" data-element_type="widget"
data-widget_type="image.default">
<div className="elementor-widget-container">
<div className="elementor-image"> <a
href="/elementor-business-one-page/service04/%20">
<img src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/elementor/thumbs/img001-8-1-oog1rr1qvcpswx0o340sr4jr08guq2aeekw9vljfyg.jpg"
title="img001-8" alt="img001-8" /> </a></div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-61065dd"
data-id="61065dd" data-element_type="column">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-413eb7a elementor-widget elementor-widget-heading"
data-id="413eb7a" data-element_type="widget"
data-widget_type="heading.default">
<div className="elementor-widget-container">
<h4 className="elementor-heading-title elementor-size-default">
Networks &amp; communication</h4>
</div>
</div>
<div className="elementor-element elementor-element-d56ecbe elementor-widget elementor-widget-text-editor"
data-id="d56ecbe" data-element_type="widget"
data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<div className="elementor-text-editor elementor-clearfix">Ut sit
amet semper arcu. Proin eget ex convallis eu viverra
lorem pretium. Morbi dapibus a tellus at euismod. Ut sit
amet semper!</div>
</div>
</div>
<div className="elementor-element elementor-element-51c6b06 elementor-align-left elementor-mobile-align-center elementor-widget elementor-widget-button"
data-id="51c6b06" data-element_type="widget"
data-widget_type="button.default">
<div className="elementor-widget-container">
<div className="elementor-button-wrapper"> <a
href="/elementor-business-one-page/service04/%20"
className="elementor-button-link elementor-button elementor-size-xs"
role="button"> <span
className="elementor-button-content-wrapper"> <span
className="elementor-button-icon elementor-align-icon-right">
<i aria-hidden="true"
className=" icomoon-the7-font-the7-arrow-09"></i>
</span> <span
className="elementor-button-text">Details</span>
</span> </a></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section> */}
{/* <section
className="elementor-section elementor-top-section elementor-element elementor-element-e55eac9 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
data-id="e55eac9" data-element_type="section">
<div className="elementor-container elementor-column-gap-no">
<div className="elementor-row">
<div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-970c593"
data-id="970c593" data-element_type="column">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-b20a7f8 elementor-widget elementor-widget-image"
data-id="b20a7f8" data-element_type="widget"
data-widget_type="image.default">
<div className="elementor-widget-container">
<div className="elementor-image"> <a
href="/elementor-business-one-page/service02/%20">
<img src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/elementor/thumbs/img001-6-1-oog1ro88aulxy34rjksx1n9d82ur2yz7e6xtfrnmh4.jpg"
title="img001-6" alt="img001-6" /> </a></div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-63d4888"
data-id="63d4888" data-element_type="column">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-7aff261 elementor-widget elementor-widget-heading"
data-id="7aff261" data-element_type="widget"
data-widget_type="heading.default">
<div className="elementor-widget-container">
<h4 className="elementor-heading-title elementor-size-default">
Project management</h4>
</div>
</div>
<div className="elementor-element elementor-element-841929a elementor-widget elementor-widget-text-editor"
data-id="841929a" data-element_type="widget"
data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<div className="elementor-text-editor elementor-clearfix">Proin
eget ex convallis eu viverra lorem pretium. Morbi
dapibus a tellus at euismod. Ut sit amet semper arcu.
Proin eget ex convallis eu viverra lorem dapibus a
tellus at euismod.</div>
</div>
</div>
<div className="elementor-element elementor-element-9cf286b elementor-align-left elementor-mobile-align-center elementor-widget elementor-widget-button"
data-id="9cf286b" data-element_type="widget"
data-widget_type="button.default">
<div className="elementor-widget-container">
<div className="elementor-button-wrapper"> <a
href="/elementor-business-one-page/service02/%20"
className="elementor-button-link elementor-button elementor-size-xs"
role="button"> <span
className="elementor-button-content-wrapper"> <span
className="elementor-button-icon elementor-align-icon-right">
<i aria-hidden="true"
className=" icomoon-the7-font-the7-arrow-09"></i>
</span> <span
className="elementor-button-text">Details</span>
</span> </a></div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-890a63f"
data-id="890a63f" data-element_type="column">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-5903637 elementor-widget elementor-widget-image"
data-id="5903637" data-element_type="widget"
data-widget_type="image.default">
<div className="elementor-widget-container">
<div className="elementor-image"> <a
href="/elementor-business-one-page/service03/%20">
<img src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/elementor/thumbs/img001-1-1-oog1rcy60u6i2rl5dfxe7q3u3gecilqfcn3zog4cjs.jpg"
title="img001-1" alt="img001-1" /> </a></div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-06a6c9a"
data-id="06a6c9a" data-element_type="column">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-bfb9987 elementor-widget elementor-widget-heading"
data-id="bfb9987" data-element_type="widget"
data-widget_type="heading.default">
<div className="elementor-widget-container">
<h4 className="elementor-heading-title elementor-size-default">
Business consulting</h4>
</div>
</div>
<div className="elementor-element elementor-element-772c932 elementor-widget elementor-widget-text-editor"
data-id="772c932" data-element_type="widget"
data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<div className="elementor-text-editor elementor-clearfix">
<p>Tristique eget malesuada sed, viverra at sapien.
Maecenas gravida lacus nec dolor apibus a tellus at
euismod. Ut sit amet semper arcu. Proin eget ex
convallis eu viverra.</p>
</div>
</div>
</div>
<div className="elementor-element elementor-element-ddaebf3 elementor-align-left elementor-mobile-align-center elementor-widget elementor-widget-button"
data-id="ddaebf3" data-element_type="widget"
data-widget_type="button.default">
<div className="elementor-widget-container">
<div className="elementor-button-wrapper"> <a
href="/elementor-business-one-page/service03/%20"
className="elementor-button-link elementor-button elementor-size-xs"
role="button"> <span
className="elementor-button-content-wrapper"> <span
className="elementor-button-icon elementor-align-icon-right">
<i aria-hidden="true"
className=" icomoon-the7-font-the7-arrow-09"></i>
</span> <span
className="elementor-button-text">Details</span>
</span> </a></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section> */}
<section

className=" elementor-section elementor-top-section elementor-element elementor-element-bcdaf43 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
data-id="bcdaf43" data-element_type="section"
data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}"
style={{width: matches?'1349px':'1000px', left: matches?'-24.5px':'-350px'}}>
<div className="elementor-background-overlay"></div>
<div className="elementor-container elementor-column-gap-wider">
<div className="elementor-row">
<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6bc2fa8"
data-id="6bc2fa8" data-element_type="column"
data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<section
className="elementor-section elementor-inner-section elementor-element elementor-element-326c43c elementor-reverse-mobile elementor-reverse-tablet elementor-section-boxed elementor-section-height-default elementor-section-height-default"
data-id="326c43c" data-element_type="section"
data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div className="elementor-container elementor-column-gap-wider">
<div className="elementor-row">
<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-33c23ad"
data-id="33c23ad" data-element_type="column"
data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div
className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-2230464 elementor-widget elementor-widget-heading"
data-id="2230464"
data-element_type="widget"
data-widget_type="heading.default">
<div className="elementor-widget-container">
    <h2
        className="elementor-heading-title elementor-size-default">
        How This Works</h2>
</div>
</div>
<div className="elementor-element elementor-element-6e7ff4f elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
data-id="6e7ff4f"
data-element_type="widget"
data-widget_type="divider.default">
<div className="elementor-widget-container">
    <div className="elementor-divider">
        <span
            className="elementor-divider-separator">
        </span></div>
</div>
</div>
<div className="elementor-element elementor-element-401bf41 elementor-widget elementor-widget-text-editor"
data-id="401bf41"
data-element_type="widget"
data-widget_type="text-editor.default">
<div className="elementor-widget-container">
    <div
        className="elementor-text-editor elementor-clearfix">
        
        <p style={{color:'black',fontSize:16}}>We do our work very carefully and accurately. This whole process take very less time with the help of our expert and trained artists. Let’s talk about that how this work.In short, we will transfer your all basic card information to the Metal cards by laser engrave. When this all process is undertaken then new/updated Metal Card and the previous one will be sent back to the you. </p>
     
    </div>
</div>
</div>
<div className="elementor-element elementor-element-3a23382 elementor-align-justify elementor-widget__width-auto elementor-widget-mobile__width-inherit elementor-widget elementor-widget-button"
data-id="3a23382"
data-element_type="widget"
data-widget_type="button.default">
<div className="elementor-widget-container">
    <div
        className="elementor-button-wrapper">
        <a href="/Work"
component={Link} 
            className="elementor-button-link elementor-button elementor-size-xs"
            role="button"> <span
                className="elementor-button-content-wrapper">
                <span
                    className="elementor-button-icon elementor-align-icon-left">
                    <i aria-hidden="true"
                        className="fas fa-clone"></i>
                </span> <span
                    className="elementor-button-text">In Detail</span>
            </span> </a></div>
</div>
</div>
<div className="elementor-element elementor-element-8bf611e elementor-align-justify elementor-mobile-align-justify elementor-widget__width-auto elementor-widget-mobile__width-inherit elementor-widget elementor-widget-button"
data-id="8bf611e"
data-element_type="widget"
data-widget_type="button.default">
<div className="elementor-widget-container">
    {/* <div
        className="elementor-button-wrapper">
        <a href="#team"
            className="elementor-button-link elementor-button elementor-size-xs"
            role="button"> <span
                className="elementor-button-content-wrapper">
                <span
                    className="elementor-button-icon elementor-align-icon-left">
                    <i aria-hidden="true"
                        className="fas fa-user-friends"></i>
                </span> <span
                    className="elementor-button-text">Specialists</span>
            </span> </a></div> */}
</div>
</div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-d2a97cc"
data-id="d2a97cc" data-element_type="column"
data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div
className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-059eecb elementor-widget elementor-widget-spacer"
data-id="059eecb"
data-element_type="widget"
data-widget_type="spacer.default">
<div className="elementor-widget-container">
    <div className="elementor-spacer">
        <div
            className="elementor-spacer-inner">
        </div>
    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</div>
</div>
</div>
</section>
<section
className="elementor-section elementor-top-section elementor-element elementor-element-4bc78c9 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
data-id="4bc78c9" data-element_type="section">
<div className="elementor-container elementor-column-gap-wider">
<div className="elementor-row">
<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4909a12"
data-id="4909a12" data-element_type="column">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-585484b elementor-widget elementor-widget-heading"
data-id="585484b" data-element_type="widget"
data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">
Principles of our work</h2>
</div>
</div>
<div className="elementor-element elementor-element-26cfe66 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
data-id="26cfe66" data-element_type="widget"
data-widget_type="divider.default">
<div className="elementor-widget-container">
<div className="elementor-divider"> <span
className="elementor-divider-separator"> </span></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section> 
 <section
className="elementor-section elementor-top-section elementor-element elementor-element-8b38a8b elementor-section-boxed elementor-section-height-default elementor-section-height-default"
data-id="8b38a8b" data-element_type="section" id="benefits">
<div className="elementor-container elementor-column-gap-wider">
<div className="elementor-row">
<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6e6f94f"
data-id="6e6f94f" data-element_type="column">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-75fee26 elementor-widget elementor-widget-heading"
data-id="75fee26" data-element_type="widget"
data-widget_type="heading.default">
<div className="elementor-widget-container">
<h3 className="elementor-heading-title elementor-size-default">
01.</h3>
</div>
</div>
<div className="elementor-element elementor-element-4d9950a elementor-widget elementor-widget-heading"
data-id="4d9950a" data-element_type="widget"
data-widget_type="heading.default">
<div className="elementor-widget-container">
<h4 className="elementor-heading-title elementor-size-default">
Permanence</h4>
</div>
</div>
<div className="elementor-element elementor-element-bdece70 elementor-widget elementor-widget-text-editor"
data-id="bdece70" data-element_type="widget"
data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<div className="elementor-text-editor elementor-clearfix">
<p style={{color:'black'}}>Upgraded Plastic Card known has a main feature of being long-lasting. Like Plastic Cards, these cannot be torn into pieces. </p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-50bc288"
data-id="50bc288" data-element_type="column">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-214b811 elementor-widget elementor-widget-heading"
data-id="214b811" data-element_type="widget"
data-widget_type="heading.default">
<div className="elementor-widget-container">
<h3 className="elementor-heading-title elementor-size-default">
02.</h3>
</div>
</div>
<div className="elementor-element elementor-element-3c36849 elementor-widget elementor-widget-heading"
data-id="3c36849" data-element_type="widget"
data-widget_type="heading.default">
<div className="elementor-widget-container">
<h4 className="elementor-heading-title elementor-size-default">
Rearness</h4>
</div>
</div>
<div className="elementor-element elementor-element-cded3a9 elementor-widget elementor-widget-text-editor"
data-id="cded3a9" data-element_type="widget"
data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<div className="elementor-text-editor elementor-clearfix">
    <p style={{color:'black'}}>
By availing DT Modern Card, you will have customized Metal and 24k Gold card which have your own personal flare. This makes it unique.</p></div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f83f7d3"
data-id="f83f7d3" data-element_type="column">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-c44a2c3 elementor-widget elementor-widget-heading"
data-id="c44a2c3" data-element_type="widget"
data-widget_type="heading.default">
<div className="elementor-widget-container">
<h3 className="elementor-heading-title elementor-size-default">
03.</h3>
</div>
</div>
<div className="elementor-element elementor-element-6b0e957 elementor-widget elementor-widget-heading"
data-id="6b0e957" data-element_type="widget"
data-widget_type="heading.default">
<div className="elementor-widget-container">
<h4 className="elementor-heading-title elementor-size-default">
Security</h4>
</div>
</div>
<div className="elementor-element elementor-element-d3597cb elementor-widget elementor-widget-text-editor"
data-id="d3597cb" data-element_type="widget"
data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<div className="elementor-text-editor elementor-clearfix">
<p style={{color:'black'}}>Clients will be able to omit card number information from their new custom upgraded card. We actually omit some information from the cards which is visible.</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-42d3b46"
data-id="42d3b46" data-element_type="column">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-44de0df elementor-widget elementor-widget-heading"
data-id="44de0df" data-element_type="widget"
data-widget_type="heading.default">
<div className="elementor-widget-container">
<h3 className="elementor-heading-title elementor-size-default">
04.</h3>
</div>
</div>
<div className="elementor-element elementor-element-7f4834f elementor-widget elementor-widget-heading"
data-id="7f4834f" data-element_type="widget"
data-widget_type="heading.default">
<div className="elementor-widget-container">
<h4 className="elementor-heading-title elementor-size-default">
Attractive design</h4>
</div>
</div>
<div className="elementor-element elementor-element-10e3ba2 elementor-widget elementor-widget-text-editor"
data-id="10e3ba2" data-element_type="widget"
data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<div className="elementor-text-editor elementor-clearfix">
<p style={{color:'black'}}>Have the value which will be attractive to others and eye catching. Our cards gives these facility to enhance your personality with our design.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section> 
<section
className="elementor-section elementor-top-section elementor-element elementor-element-75ca8ab elementor-section-boxed elementor-section-height-default elementor-section-height-default"
data-id="75ca8ab" data-element_type="section">
<div className="elementor-container elementor-column-gap-wider">
<div className="elementor-row">
<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e22cc61"
data-id="e22cc61" data-element_type="column">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-503bf7f elementor-widget elementor-widget-gallery"
data-id="503bf7f" data-element_type="widget"
data-settings="{&quot;columns&quot;:6,&quot;columns_tablet&quot;:3,&quot;columns_mobile&quot;:2,&quot;gap&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:30,&quot;sizes&quot;:[]},&quot;gap_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:30,&quot;sizes&quot;:[]},&quot;gap_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:30,&quot;sizes&quot;:[]},&quot;aspect_ratio&quot;:&quot;21:9&quot;,&quot;lazyload&quot;:&quot;yes&quot;,&quot;gallery_layout&quot;:&quot;grid&quot;,&quot;content_hover_animation&quot;:&quot;fade-in&quot;}"
data-widget_type="gallery.default">
<div className="elementor-widget-container">
<div className="elementor-gallery__container e-gallery-container e-gallery-grid e-gallery--ltr e-gallery--lazyload"
// style={{hgap:'30px', vgap:'30px', animationDuration:'350ms', columns:6, rows:1,aspectRatio:'42.8571%', containerAspectRatio:'6.24697%'}}
>
<div className="e-gallery-item elementor-gallery-item elementor-animated-content"
style={{column:0, row:0}}>
<div className="e-gallery-image elementor-gallery-item__image e-gallery-image-loaded"
data-thumbnail="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/logos-03-1-300x225.png"
data-width="300" data-height="225" alt=""
style={{backgroundImage: `url(https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/logos-03-1-300x225.png)`}}>
</div>
</div>
<div className="e-gallery-item elementor-gallery-item elementor-animated-content"
style={{column:1, row:0}}>
<div className="e-gallery-image elementor-gallery-item__image e-gallery-image-loaded"
data-thumbnail="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/logos-05-1-300x225.png"
data-width="300" data-height="225" alt=""
style={{backgroundImage: `url(&quot;https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/logos-05-1-300x225.png&quot)`}}>
</div>
</div>
<div className="e-gallery-item elementor-gallery-item elementor-animated-content"
style={{column:2, row:0}}>
<div className="e-gallery-image elementor-gallery-item__image e-gallery-image-loaded"
data-thumbnail="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/logos-01-1-300x225.png"
data-width="300" data-height="225" alt=""
style={{backgroundImage: `url(&quot;https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/logos-01-1-300x225.png&quot)`}}>
</div>
</div>
<div className="e-gallery-item elementor-gallery-item elementor-animated-content"
style={{column:3,row:0}}>
<div className="e-gallery-image elementor-gallery-item__image e-gallery-image-loaded"
data-thumbnail="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/logos-02-1-300x225.png"
data-width="300" data-height="225" alt=""
style={{backgroundImage: `url(&quot;https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/logos-02-1-300x225.png&quot)`}}>
</div>
</div>
<div className="e-gallery-item elementor-gallery-item elementor-animated-content"
style={{column:4, row:0}}>
<div className="e-gallery-image elementor-gallery-item__image e-gallery-image-loaded"
data-thumbnail="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/logos-04-1-300x225.png"
data-width="300" data-height="225" alt=""
style={{backgroundImage: `url(&quot;https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/logos-04-1-300x225.png&quot)`}}>
</div>
</div>
<div className="e-gallery-item elementor-gallery-item elementor-animated-content"
style={{column:5, row:0}}>
<div className="e-gallery-image elementor-gallery-item__image e-gallery-image-loaded"
data-thumbnail="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/logos-06-1-300x225.png"
data-width="300" data-height="225" alt=""
style={{backgroundImage: `url(&quot;https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/logos-06-1-300x225.png&quot)`}}>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section
className="elementor-section elementor-top-section elementor-element elementor-element-8657e36 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
data-id="8657e36" data-element_type="section">
<div className="elementor-container elementor-column-gap-wider">
<div className="elementor-row">
<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ffc63b8"
data-id="ffc63b8" data-element_type="column">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-868065f elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
data-id="868065f" data-element_type="widget"
data-widget_type="divider.default">
<div className="elementor-widget-container">
<div className="elementor-divider"> <span
className="elementor-divider-separator"> </span></div>
</div>
</div>
</div>
</div>
</div>                 
</div>
</div>
</section>
<section
style={{marginTop:-250}}
className="elementor-section elementor-top-section elementor-element elementor-element-e15c597 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
data-id="e15c597" data-element_type="section" id="showcase">
<div className="elementor-container elementor-column-gap-wider">
<div className="elementor-row">
<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b97ed58"
data-id="b97ed58" data-element_type="column">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-aed33de elementor-widget elementor-widget-heading"
data-id="aed33de" data-element_type="widget"
data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">
Services</h2>
</div>
</div>
<div className="elementor-element elementor-element-51d70a8 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
data-id="51d70a8" data-element_type="widget"
data-widget_type="divider.default">
<div className="elementor-widget-container">
<div className="elementor-divider"> <span
className="elementor-divider-separator"> </span></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section
className="elementor-section elementor-top-section elementor-element elementor-element-0f56e3b elementor-section-stretched elementor-section-full_width elementor-section-height-default elementor-section-height-default"
data-id="0f56e3b" data-element_type="section" id="projects"
data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}"
style={{width: '1349px', left: '-24.5px'}}>
<div className="elementor-container elementor-column-gap-no">
<div className="elementor-row">
<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c8c86f6"
data-id="c8c86f6" data-element_type="column">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-5ea48d8 elementor-widget elementor-widget-the7_elements_carousel"
data-id="5ea48d8" data-element_type="widget"
data-widget_type="the7_elements_carousel.default">
<div className="elementor-widget-container">
<div className="owl-carousel portfolio-carousel-shortcode elementor-owl-carousel-call portfolio-shortcode the7-elementor-widget the7_elements_carousel-5ea48d8 content-bg-on content-align-center dt-icon-bg-on dt-icon-hover-bg-on disable-icon-hover-bg meta-info-off bottom-overlap-layout-list description-under-image  no-changes arrows-bg-off arrows-hover-bg-off disable-arrows-hover-bg owl-loaded owl-drag refreshed"
data-scroll-mode="1" data-col-num="3"
data-wide-col-num="3" data-laptop-col="2"
data-h-tablet-columns-num="2"
data-v-tablet-columns-num="2" data-phone-columns-num="1"
data-auto-height="false" data-col-gap="0"
data-stage-padding="60" data-speed="600"
data-autoplay="false" data-autoplay_speed=""
data-arrows="true" data-bullet="false"
// data-next-icon=" icomoon-the7-font-the7-arrow-29"
// data-prev-icon=" icomoon-the7-font-the7-arrow-28"
data-img-shadow-size="" data-img-shadow-spread="">
<div className="owl-stage-outer">
<div className="owl-stage"
style={{transform: `translate3d('-1229px', '0%', '0px')`, transition: 'all 0s ease 0s', width: '5037px', paddingLeft: '60px',paddingRight: '60px'}}>
<div className="dt-owl-item cloned"
style={{width: '409.667px'}}>
<article
className="post visible post-591 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry description-off">
<div
    className="post-thumbnail-wrap rollover-active this-ready">
    <div className="post-thumbnail">
        <a
            href="https://the7.io/elementor-business-one-page/project/morbi-dapibus/"
            className="post-thumbnail-rollover"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                className="col-lg-4 col-md-12 col-xs-12"
                // className="preload-me lazy-load is-loaded"
                src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-41-1-768x576.jpg"
                alt="" title="img001-41"
                width="768" height="576"
                srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-41-1-768x576.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-41-1-1152x864.jpg 1152w"
                style={{willChange: 'auto'}} /></a>
        <div
            className="project-links-container">
            <a href="https://the7.io/elementor-business-one-page/project/morbi-dapibus/"
                className="project-details icon-without-border icon-without-hover-border"
                aria-label="Details link"><span
                    aria-hidden="true"
                    className=" icomoon-the7-font-the7-more-01"></span></a>
        </div>
    </div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/project/morbi-dapibus/"
            title="Morbi dapibus"
            rel="bookmark">Metal Cards </a></h3>
    <div className="entry-excerpt">
        <p style={{color:'black'}}>If you want to have reliability, rareness and permanence of your card then Metal Cards will be the best solution for you that reflects your personality. .</p>
    </div>
</div>
</article>
</div>
<div className="dt-owl-item cloned"
style={{width: '409.667px'}}>
<article
className="post visible post-596 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry description-off">
<div
    className="post-thumbnail-wrap rollover-active this-ready">
    <div className="post-thumbnail"><a
            href="https://the7.io/elementor-business-one-page/project/morbi-dapibus/"
            className="post-thumbnail-rollover"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                className="col-lg-4 col-md-12 col-xs-12"
                src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-41-1-768x576.jpg"
                alt="" title="img001-41"
                width="768" height="576"
                srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-41-1-768x576.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-41-1-1152x864.jpg 1152w"
                style={{willChange: 'auto'}} /></a>
        <div
            className="project-links-container">
            <a href="https://the7.io/elementor-business-one-page/project/morbi-dapibus/"
                className="project-details icon-without-border icon-without-hover-border"
                aria-label="Details link"><span
                    aria-hidden="true"
                    className=" icomoon-the7-font-the7-more-01"></span></a>
        </div>
    </div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/project/class-aptent-taciti/"
            title="Class aptent taciti"
            rel="bookmark">24k Gold</a></h3>
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Desire of being luxury will be fulfilled by the service of 24k Gold cards by DT Modern Cards. No matter who you are but this Card will make you luxury. .</p>
    </div>
</div>
</article>
</div>
<div className="dt-owl-item cloned"
style={{width: '409.667px'}}>
<article
className="post visible post-583 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry description-off">
<div
    className="post-thumbnail-wrap rollover-active this-ready">
    <div className="post-thumbnail"><a
            href="https://the7.io/elementor-business-one-page/project/lorem-ipsum-dolor/"
            className="post-thumbnail-rollover"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                // className="preload-me lazy-load owl-thumb-lazy-load-show is-loaded"
                src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-3-1-768x576.jpg"
                alt="" title="img001-3"
                width="768" height="576"
                sizes="768px"
                srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-3-1-768x576.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-3-1-1152x864.jpg 1152w"
                style={{willChange: 'auto'}} /></a>
        <div
            className="project-links-container">
            <a href="https://the7.io/elementor-business-one-page/project/lorem-ipsum-dolor/"
                className="project-details icon-without-border icon-without-hover-border"
                aria-label="Details link"><span
                    aria-hidden="true"
                    className=" icomoon-the7-font-the7-more-01"></span></a>
        </div>
    </div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/project/lorem-ipsum-dolor/"
            title="Lorem ipsum dolor"
            rel="bookmark">Get your desired design </a></h3>
    <div className="entry-excerpt">
        <p style={{color:'black'}}>We have many a designs for you to choose but if you have design in your own thoughts then share that with us so we can make it possible for you in the shape of cards. </p>
    </div>
</div>
</article>
</div>
<div className="dt-owl-item active"
style={{width: '409.667px'}}>
<article
className="post visible post-585 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry description-off">
<div
    className="post-thumbnail-wrap rollover-active this-ready">
    <div className="post-thumbnail"><a
            href="https://the7.io/elementor-business-one-page/project/amet-from-ipsum/"
            className="post-thumbnail-rollover"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                className="preload-me lazy-load owl-thumb-lazy-load-show is-loaded"
                src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-46-1-768x576.jpg"
                alt="" title="img001-46"
                width="768" height="576"
                sizes="768px"
                srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-46-1-768x576.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-46-1-1152x864.jpg 1152w"
                style={{willChange: 'auto'}} /></a>
        <div
            className="project-links-container">
            <a href="https://the7.io/elementor-business-one-page/project/amet-from-ipsum/"
                className="project-details icon-without-border icon-without-hover-border"
                aria-label="Details link"><span
                    aria-hidden="true"
                    className=" icomoon-the7-font-the7-more-01"></span></a>
        </div>
    </div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/project/amet-from-ipsum/"
            title="Amet from ipsum"
            rel="bookmark">Amet from
            ipsum</a></h3>
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Morbi dapibus a tellus at
            euismod lorem ipsum dolor.
        </p>
    </div>
</div>
</article>
</div>
<div className="dt-owl-item active"
style={{width: '409.667px'}}>
<article
className="post visible post-589 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry description-off">
<div
    className="post-thumbnail-wrap rollover-active this-ready">
    <div className="post-thumbnail"><a
            href="https://the7.io/elementor-business-one-page/project/ipsum-from-dolor-amet/"
            className="post-thumbnail-rollover"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                className="preload-me lazy-load owl-thumb-lazy-load-show is-loaded"
                src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/img001-8-1-768x576.jpg"
                alt="" title="img001-8"
                width="768" height="576"
                sizes="768px"
                srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/img001-8-1-768x576.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/img001-8-1-1152x864.jpg 1152w"
                style={{willChange: 'auto'}} /></a>
        <div
            className="project-links-container">
            <a href="https://the7.io/elementor-business-one-page/project/ipsum-from-dolor-amet/"
                className="project-details icon-without-border icon-without-hover-border"
                aria-label="Details link"><span
                    aria-hidden="true"
                    className=" icomoon-the7-font-the7-more-01"></span></a>
        </div>
    </div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/project/ipsum-from-dolor-amet/"
            title="Ipsum from dolor amet"
            rel="bookmark">Ipsum from
            dolor amet</a></h3>
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Dolor proin eget ex convallis
            eu viverra lorem pretium.
        </p>
    </div>
</div>
</article>
</div>
<div className="dt-owl-item active"
style={{width: '409.667px'}}>
<article
className="post visible post-587 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry description-off">
<div
    className="post-thumbnail-wrap rollover-active this-ready">
    <div className="post-thumbnail"><a
            href="https://the7.io/elementor-business-one-page/project/nulla-glavrida/"
            className="post-thumbnail-rollover"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                className="preload-me lazy-load owl-thumb-lazy-load-show is-loaded"
                src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-1-1-768x576.jpg"
                alt="" title="img001-1"
                width="768" height="576"
                sizes="768px"
                srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-1-1-768x576.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-1-1-1152x864.jpg 1152w"
                style={{willChange: 'auto'}} /></a>
        <div
            className="project-links-container">
            <a href="https://the7.io/elementor-business-one-page/project/nulla-glavrida/"
                className="project-details icon-without-border icon-without-hover-border"
                aria-label="Details link"><span
                    aria-hidden="true"
                    className=" icomoon-the7-font-the7-more-01"></span></a>
        </div>
    </div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/project/nulla-glavrida/"
            title="Nulla glavrida"
            rel="bookmark">Nulla
            glavrida</a></h3>
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Ex convallis eu viverra lorem
            pretium tellus dolor amet at
            euismod.</p>
    </div>
</div>
</article>
</div>
<div className="dt-owl-item"
style={{width: '409.667px'}}>
<article
className="post visible post-591 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry description-off">
<div
    className="post-thumbnail-wrap rollover-active this-ready">
    <div className="post-thumbnail"><a
            href="https://the7.io/elementor-business-one-page/project/morbi-dapibus/"
            className="post-thumbnail-rollover"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                className="preload-me lazy-load owl-thumb-lazy-load-show is-loaded"
                src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-41-1-768x576.jpg"
                alt="" title="img001-41"
                width="768" height="576"
                sizes="768px"
                srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-41-1-768x576.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-41-1-1152x864.jpg 1152w"
                style={{willChange: 'auto'}} /></a>
        <div
            className="project-links-container">
            <a href="https://the7.io/elementor-business-one-page/project/morbi-dapibus/"
                className="project-details icon-without-border icon-without-hover-border"
                aria-label="Details link"><span
                    aria-hidden="true"
                    className=" icomoon-the7-font-the7-more-01"></span></a>
        </div>
    </div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/project/morbi-dapibus/"
            title="Morbi dapibus"
            rel="bookmark">Morbi
            dapibus</a></h3>
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Convallis eu viverra lorem
            pretium. Morbi dapibus a
            tellus at euismod.</p>
    </div>
</div>
</article>
</div>
<div className="dt-owl-item"
style={{width: '409.667px'}}>
<article
className="post visible post-596 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry description-off">
<div
    className="post-thumbnail-wrap rollover-active this-ready">
    <div className="post-thumbnail"><a
            href="https://the7.io/elementor-business-one-page/project/class-aptent-taciti/"
            className="post-thumbnail-rollover layzr-bg"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                className="preload-me lazy-load"
                src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-45-1-768x576.jpg"
                alt="" title="img001-45"
                width="768" height="576"
                srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-45-1-768x576.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-45-1-1152x864.jpg 1152w"
                style={{willChange: 'opacity'}} /></a>
        <div
            className="project-links-container">
            <a href="https://the7.io/elementor-business-one-page/project/class-aptent-taciti/"
                className="project-details icon-without-border icon-without-hover-border"
                aria-label="Details link"><span
                    aria-hidden="true"
                    className=" icomoon-the7-font-the7-more-01"></span></a>
        </div>
    </div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/project/class-aptent-taciti/"
            title="Class aptent taciti"
            rel="bookmark">Class aptent
            taciti</a></h3>
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Class aptent taciti sociosqu
            ad litora torquent per
            conus.</p>
    </div>
</div>
</article>
</div>
<div className="dt-owl-item"
style={{width: '409.667px'}}>
<article
className="post visible post-583 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry description-off">
<div
    className="post-thumbnail-wrap rollover-active this-ready">
    <div className="post-thumbnail"><a
            href="https://the7.io/elementor-business-one-page/project/lorem-ipsum-dolor/"
            className="post-thumbnail-rollover"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                className="preload-me lazy-load is-loaded"
                src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-3-1-768x576.jpg"
                alt="" title="img001-3"
                width="768" height="576"
                srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-3-1-768x576.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-3-1-1152x864.jpg 1152w"
                style={{willChange: 'auto'}} /></a>
        <div
            className="project-links-container">
            <a href="https://the7.io/elementor-business-one-page/project/lorem-ipsum-dolor/"
                className="project-details icon-without-border icon-without-hover-border"
                aria-label="Details link"><span
                    aria-hidden="true"
                    className=" icomoon-the7-font-the7-more-01"></span></a>
        </div>
    </div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/project/lorem-ipsum-dolor/"
            title="Lorem ipsum dolor"
            rel="bookmark">Lorem ipsum
            dolor</a></h3>
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Ut sit amet semper arcu –
            dolor proin eget ex
            convallis eu…</p>
    </div>
</div>
</article>
</div>
<div className="dt-owl-item cloned"
style={{width: '409.667px'}}>
<article
className="post visible post-585 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry description-off">
<div
    className="post-thumbnail-wrap rollover-active this-ready">
    <div className="post-thumbnail"><a
            href="https://the7.io/elementor-business-one-page/project/amet-from-ipsum/"
            className="post-thumbnail-rollover"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                className="preload-me lazy-load is-loaded"
                src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-46-1-768x576.jpg"
                alt="" title="img001-46"
                width="768" height="576"
                srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-46-1-768x576.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-46-1-1152x864.jpg 1152w"
                style={{willChange: 'auto'}} /></a>
        <div
            className="project-links-container">
            <a href="https://the7.io/elementor-business-one-page/project/amet-from-ipsum/"
                className="project-details icon-without-border icon-without-hover-border"
                aria-label="Details link"><span
                    aria-hidden="true"
                    className=" icomoon-the7-font-the7-more-01"></span></a>
        </div>
    </div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/project/amet-from-ipsum/"
            title="Amet from ipsum"
            rel="bookmark">Amet from
            ipsum</a></h3>
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Morbi dapibus a tellus at
            euismod lorem ipsum dolor.
        </p>
    </div>
</div>
</article>
</div>
<div className="dt-owl-item cloned"
style={{width: '409.667px'}}>
<article
className="post visible post-589 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry description-off">
<div
    className="post-thumbnail-wrap rollover-active this-ready">
    <div className="post-thumbnail"><a
            href="https://the7.io/elementor-business-one-page/project/ipsum-from-dolor-amet/"
            className="post-thumbnail-rollover"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                className="preload-me lazy-load is-loaded"
                src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/img001-8-1-768x576.jpg"
                alt="" title="img001-8"
                width="768" height="576"
                srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/img001-8-1-768x576.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/img001-8-1-1152x864.jpg 1152w"
                style={{willChange: 'auto'}} /></a>
        <div
            className="project-links-container">
            <a href="https://the7.io/elementor-business-one-page/project/ipsum-from-dolor-amet/"
                className="project-details icon-without-border icon-without-hover-border"
                aria-label="Details link"><span
                    aria-hidden="true"
                    className=" icomoon-the7-font-the7-more-01"></span></a>
        </div>
    </div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/project/ipsum-from-dolor-amet/"
            title="Ipsum from dolor amet"
            rel="bookmark">Ipsum from
            dolor amet</a></h3>
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Dolor proin eget ex convallis
            eu viverra lorem pretium.
        </p>
    </div>
</div>
</article>
</div>
<div className="dt-owl-item cloned"
style={{width: '409.667px'}}>
<article
className="post visible post-587 dt_portfolio type-dt_portfolio status-publish has-post-thumbnail hentry description-off">
<div
    className="post-thumbnail-wrap rollover-active this-ready">
    <div className="post-thumbnail"><a
            href="https://the7.io/elementor-business-one-page/project/nulla-glavrida/"
            className="post-thumbnail-rollover"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                className="preload-me lazy-load is-loaded"
                src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-1-1-768x576.jpg"
                alt="" title="img001-1"
                width="768" height="576"
                srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-1-1-768x576.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-1-1-1152x864.jpg 1152w"
                style={{willChange: 'auto'}} /></a>
        <div
            className="project-links-container">
            <a href="https://the7.io/elementor-business-one-page/project/nulla-glavrida/"
                className="project-details icon-without-border icon-without-hover-border"
                aria-label="Details link"><span
                    aria-hidden="true"
                    className=" icomoon-the7-font-the7-more-01"></span></a>
        </div>
    </div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/project/nulla-glavrida/"
            title="Nulla glavrida"
            rel="bookmark">Nulla
            glavrida</a></h3>
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Ex convallis eu viverra lorem
            pretium tellus dolor amet at
            euismod.</p>
    </div>
</div>
</article>
</div>
</div>
</div>
{/* <div className="owl-nav"><a className="owl-prev"><i
className=" icomoon-the7-font-the7-arrow-28"></i></a><a
className="owl-next"><i
className=" icomoon-the7-font-the7-arrow-29"></i></a>
</div> */}
<div className="owl-dots disabled"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section
className="elementor-section elementor-top-section elementor-element elementor-element-1dd3dc1 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
data-id="1dd3dc1" data-element_type="section" id="consultation"
data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}"
style={{width: '1349px', left: '-24.5px'}}>
<div className="elementor-background-overlay"></div>
<div className="elementor-container elementor-column-gap-wider">
<div className="elementor-row">
<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d9d4d79"
data-id="d9d4d79" data-element_type="column"
data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<section
className="elementor-section elementor-inner-section elementor-element elementor-element-af3218d elementor-reverse-mobile elementor-reverse-tablet elementor-section-boxed elementor-section-height-default elementor-section-height-default"
data-id="af3218d" data-element_type="section"
data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div className="elementor-container elementor-column-gap-wider">
<div className="elementor-row">
<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-8cfa33f"
data-id="8cfa33f" data-element_type="column"
data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div
className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-e7ba07a elementor-widget elementor-widget-heading"
data-id="e7ba07a"
data-element_type="widget"
data-widget_type="heading.default">
<div className="elementor-widget-container">
    <h2
        className="elementor-heading-title elementor-size-default">
        Free consultation</h2>
</div>
</div>
<div className="elementor-element elementor-element-eddcf5c elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
data-id="eddcf5c"
data-element_type="widget"
data-widget_type="divider.default">
<div className="elementor-widget-container">
    <div className="elementor-divider">
        <span
            className="elementor-divider-separator">
        </span></div>
</div>
</div>
<div className="elementor-element elementor-element-b9a44bd elementor-widget elementor-widget-text-editor"
data-id="b9a44bd"
data-element_type="widget"
data-widget_type="text-editor.default">
<div className="elementor-widget-container">
    <div
        className="elementor-text-editor elementor-clearfix">
        <h4>Experience you can trust,
            service you can count on.
            Seven Company – your
            partners in profit!</h4>
        Etiam sit amet convallis erat.
        Class aptent taciti sociosqu ad
        litora torquent per conubia!
        Maecenas gravida lacus.
    </div>
</div>
</div>
<div className="elementor-element elementor-element-54bfe2c elementor-widget elementor-widget-shortcode"
data-id="54bfe2c"
data-element_type="widget"
data-widget_type="shortcode.default">
<div className="elementor-widget-container">
    <div className="elementor-shortcode">
        <div role="form" className="wpcf7"
            id="wpcf7-f88-p14-o1"
            lang="en-US" dir="ltr">
            <div className="screen-reader-response"
                role="alert"
                aria-live="polite">
            </div>
            <form
                action="/elementor-business-one-page/#wpcf7-f88-p14-o1"
                method="post"
                className="wpcf7-form init"
                novalidate="novalidate">
                <div
                    style={{display: 'none'}}>
                    <input type="hidden"
                        name="_wpcf7"
                        value="88" />
                    <input type="hidden"
                        name="_wpcf7_version"
                        value="5.2.2" />
                    <input type="hidden"
                        name="_wpcf7_locale"
                        value="en_US" />
                    <input type="hidden"
                        name="_wpcf7_unit_tag"
                        value="wpcf7-f88-p14-o1" />
                    <input type="hidden"
                        name="_wpcf7_container_post"
                        value="14" />
                    <input type="hidden"
                        name="_wpcf7_posted_data_hash"
                        value="" /></div>
                <p style={{color:'black'}}><label> Your name
                        *<br /> <span
                            className="wpcf7-form-control-wrap your-name"><input
                                type="text"
                                name="your-name"
                                value=""
                                size="40"
                                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                aria-required="true"
                                aria-invalid="false" /></span>
                    </label><br /> <label>
                        Your email *<br />
                        <span
                            className="wpcf7-form-control-wrap your-email"><input
                                type="email"
                                name="your-email"
                                value=""
                                size="40"
                                className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                aria-required="true"
                                aria-invalid="false" /></span>
                    </label><br /> <label>
                        Phone number
                        *<br /> <span
                            className="wpcf7-form-control-wrap your-tel"><input
                                type="tel"
                                name="your-tel"
                                value=""
                                size="40"
                                className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel"
                                aria-required="true"
                                aria-invalid="false" /></span>
                    </label></p>
                <p style={{color:'black'}}><input type="submit"
                        value="I want free consultation!"
                        className="wpcf7-form-control wpcf7-submit" /><span
                        className="ajax-loader"></span>
                </p>
                <div className="wpcf7-response-output"
                    role="alert"
                    aria-hidden="true">
                </div>
            </form>
        </div>
    </div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-f3a3530"
data-id="f3a3530" data-element_type="column"
data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div
className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-febf27f elementor-widget elementor-widget-spacer"
data-id="febf27f"
data-element_type="widget"
data-widget_type="spacer.default">
<div className="elementor-widget-container">
    <div className="elementor-spacer">
        <div
            className="elementor-spacer-inner">
        </div>
    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</div>
</div>
</div>
</section>
<section
className="elementor-section elementor-top-section elementor-element elementor-element-23a5e14 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
data-id="23a5e14" data-element_type="section">
<div className="elementor-container elementor-column-gap-wider">
<div className="elementor-row">
<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e620ca3"
data-id="e620ca3" data-element_type="column">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-1f5137b elementor-widget elementor-widget-heading"
data-id="1f5137b" data-element_type="widget"
data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">
Why Choose DT Modern Cards</h2>
</div>
</div>
<div className="elementor-element elementor-element-cc13b06 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
data-id="cc13b06" data-element_type="widget"
data-widget_type="divider.default">
<div className="elementor-widget-container">
<div className="elementor-divider"> <span
className="elementor-divider-separator"> </span></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section
className="elementor-section elementor-top-section elementor-element elementor-element-c85f88e elementor-section-boxed elementor-section-height-default elementor-section-height-default"
data-id="c85f88e" data-element_type="section">
<div className="elementor-container elementor-column-gap-wider">
<div className="elementor-row">
<div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-79b290f"
data-id="79b290f" data-element_type="column">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-62e22cf elementor-view-stacked elementor-shape-square elementor-position-left elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
data-id="62e22cf" data-element_type="widget"
data-widget_type="icon-box.default">
<div className="elementor-widget-container">
<div className="elementor-icon-box-wrapper">
<div className="elementor-icon-box-icon"> <span
className="elementor-icon elementor-animation-"> <i
aria-hidden="true" className="fas fa-fire"></i>
</span></div>
<div className="elementor-icon-box-content">
<h4 className="elementor-icon-box-title"> <span>
Reliability & Durability </span></h4>
<p className="elementor-icon-box-description">The most obvious advantage is that Metal cards are more durable and reliable than the Plastic ones.</p>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-7a1b3bd elementor-view-stacked elementor-shape-square elementor-position-left elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
data-id="7a1b3bd" data-element_type="widget"
data-widget_type="icon-box.default">
<div className="elementor-widget-container">
<div className="elementor-icon-box-wrapper">
<div className="elementor-icon-box-icon"> <span
className="elementor-icon elementor-animation-"> <i
aria-hidden="true"
className="fas fa-user-tie"></i> </span></div>
<div className="elementor-icon-box-content">
<h4 className="elementor-icon-box-title">
<span>Accidents Survival</span></h4>
<p className="elementor-icon-box-description">The chances that a metal credit card will survive an accidental run are more than that of a plastic card.</p>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-43c3259 elementor-view-stacked elementor-shape-square elementor-position-left elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
data-id="43c3259" data-element_type="widget"
data-widget_type="icon-box.default">
<div className="elementor-widget-container">
<div className="elementor-icon-box-wrapper">
<div className="elementor-icon-box-icon"> <span
className="elementor-icon elementor-animation-"> <i
aria-hidden="true" className="fas fa-award"></i>
</span></div>
<div className="elementor-icon-box-content">
<h4 className="elementor-icon-box-title"> <span>A bit heavier</span></h4>
<p className="elementor-icon-box-description">Metal Cards are much bit heavier and it’s hard to bend or break them. Assume it to be beneficial. </p>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-badd798 elementor-view-stacked elementor-shape-square elementor-position-left elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
data-id="badd798" data-element_type="widget"
data-widget_type="icon-box.default">
<div className="elementor-widget-container">
<div className="elementor-icon-box-wrapper">
<div className="elementor-icon-box-icon"> <span
className="elementor-icon elementor-animation-"> <i
aria-hidden="true"
className="fas fa-comment-dots"></i> </span>
</div>
<div className="elementor-icon-box-content">
<h4 className="elementor-icon-box-title"> <span>More Upscale</span></h4>
<p className="elementor-icon-box-description">
They are usually considered more upscale since most metal cards are focused on higher-end cardholder.
</p>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-0c4253d elementor-view-stacked elementor-shape-square elementor-position-left elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
data-id="0c4253d" data-element_type="widget"
data-widget_type="icon-box.default">
<div className="elementor-widget-container">
<div className="elementor-icon-box-wrapper">
<div className="elementor-icon-box-icon"> <span
className="elementor-icon elementor-animation-"> <i
aria-hidden="true"
className="fab fa-buffer"></i> </span></div>
<div className="elementor-icon-box-content">
<h4 className="elementor-icon-box-title"> <span>Secure</span></h4>
<p className="elementor-icon-box-description">No record will be kept by our side of your Card of information for your safety and satisfaction. </p>
</div>
</div>
</div>
</div>
<div className="elementor-element elementor-element-7ddaa23 elementor-view-stacked elementor-shape-square elementor-position-left elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
data-id="7ddaa23" data-element_type="widget"
data-widget_type="icon-box.default">
<div className="elementor-widget-container">
<div className="elementor-icon-box-wrapper">
<div className="elementor-icon-box-icon"> <span
className="elementor-icon elementor-animation-"> <i
aria-hidden="true"
className="fas fa-dollar-sign"></i> </span>
</div>
<div className="elementor-icon-box-content">
<h4 className="elementor-icon-box-title">
<span>Desired Design </span></h4>
<p className="elementor-icon-box-description">You can bring your desired design into existence with us. We give what you want. </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-0a335d5"
data-id="0a335d5" data-element_type="column"
data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<section
className="elementor-section elementor-inner-section elementor-element elementor-element-a727cda elementor-section-boxed elementor-section-height-default elementor-section-height-default"
data-id="a727cda" data-element_type="section"
data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div className="elementor-container elementor-column-gap-wide">
<div className="elementor-row">
<div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-3ae0f52"
data-id="3ae0f52" data-element_type="column"
data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div
className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-b478ca5 elementor-widget elementor-widget-image"
data-id="b478ca5"
data-element_type="widget"
data-widget_type="image.default">
<div className="elementor-widget-container">
    <div className="elementor-image"> <a
            href="/elementor-business-one-page/alexandra/">
            <img src={Boby}
                title="3 (2)"
                alt="3 (2)" /></a></div>
</div>
</div>
<div className="elementor-element elementor-element-34d7e97 elementor-widget elementor-widget-text-editor"
data-id="34d7e97"
data-element_type="widget"
data-widget_type="text-editor.default">
<div className="elementor-widget-container">
    <div
        className="elementor-text-editor elementor-clearfix">
        <p style={{color:'black'}}>“Thoughts are things! And
            powerful things at that,
            when mixed with definiteness
            of purpose, and burning
            desire, can be translated
            into riches.”</p>
    </div>
</div>
</div>
<div className="elementor-element elementor-element-a9466c5 elementor-widget elementor-widget-heading"
data-id="a9466c5"
data-element_type="widget"
data-widget_type="heading.default">
<div className="elementor-widget-container">
    <h4
        className="elementor-heading-title elementor-size-default">
        Boby Train</h4>
</div>
</div>
<div className="elementor-element elementor-element-0575a56 elementor-widget elementor-widget-heading"
data-id="0575a56"
data-element_type="widget"
data-widget_type="heading.default">
<div className="elementor-widget-container">
    <div
        className="elementor-heading-title elementor-size-default">
        Co-founder, CEO</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</div>
</div>
</div>
</section>
{/* <section
className="elementor-section elementor-top-section elementor-element elementor-element-35fa854 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
data-id="35fa854" data-element_type="section">
<div className="elementor-container elementor-column-gap-wider">
<div className="elementor-row">
<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-cc54df1"
data-id="cc54df1" data-element_type="column">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-91292ed elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
data-id="91292ed" data-element_type="widget"
data-widget_type="divider.default">
<div className="elementor-widget-container">
<div className="elementor-divider"> <span
className="elementor-divider-separator"> </span></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section
className="elementor-section elementor-top-section elementor-element elementor-element-e057826 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
data-id="e057826" data-element_type="section" id="team">
<div className="elementor-container elementor-column-gap-wider">
<div className="elementor-row">
<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-981eb94"
data-id="981eb94" data-element_type="column">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-175c28d elementor-widget elementor-widget-heading"
data-id="175c28d" data-element_type="widget"
data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">
Work together for success</h2>
</div>
</div>
<div className="elementor-element elementor-element-03828f1 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
data-id="03828f1" data-element_type="widget"
data-widget_type="divider.default">
<div className="elementor-widget-container">
<div className="elementor-divider"> <span
className="elementor-divider-separator"> </span></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section
className="elementor-section elementor-top-section elementor-element elementor-element-3f5b9c0 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
data-id="3f5b9c0" data-element_type="section">
<div className="elementor-container elementor-column-gap-wider">
<div className="elementor-row">
<div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-a2d76df"
data-id="a2d76df" data-element_type="column">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-0a98921 elementor-widget elementor-widget-image"
data-id="0a98921" data-element_type="widget"
data-widget_type="image.default">
<div className="elementor-widget-container">
<div className="elementor-image"> <a
href="/elementor-business-one-page/alexandra/"> <img
src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/elementor/thumbs/3-2-1-oog1pthotm2l1rtpd9yemm3n1pzowgm9h0mcd4ekqw.jpg"
title="3 (2)" alt="3 (2)" /></a></div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-23037d5"
data-id="23037d5" data-element_type="column">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-ba1c3dc elementor-widget elementor-widget-heading"
data-id="ba1c3dc" data-element_type="widget"
data-widget_type="heading.default">
<div className="elementor-widget-container">
<h4 className="elementor-heading-title elementor-size-default">
Alexandra Blackfire</h4>
</div>
</div>
<div className="elementor-element elementor-element-80bcdad elementor-widget elementor-widget-heading"
data-id="80bcdad" data-element_type="widget"
data-widget_type="heading.default">
<div className="elementor-widget-container">
<div className="elementor-heading-title elementor-size-default">
Co-founder, CEO</div>
</div>
</div>
<div className="elementor-element elementor-element-7a49a88 elementor-widget elementor-widget-text-editor"
data-id="7a49a88" data-element_type="widget"
data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<div className="elementor-text-editor elementor-clearfix">Proin
eget ex convallis eu viverra lorem pretium. Morbi
dapibus a tellus at euismod. Ut sit amet semper arcu.
Proin eget ex convallis eu viverra lorem dapibus a
tellus at euismod.</div>
</div>
</div>
<div className="elementor-element elementor-element-0b42dcf elementor-align-left elementor-mobile-align-center elementor-widget elementor-widget-button"
data-id="0b42dcf" data-element_type="widget"
data-widget_type="button.default">
<div className="elementor-widget-container">
<div className="elementor-button-wrapper"> <a
href="/elementor-business-one-page/alexandra/"
className="elementor-button-link elementor-button elementor-size-xs"
role="button"> <span
className="elementor-button-content-wrapper"> <span
className="elementor-button-icon elementor-align-icon-right">
<i aria-hidden="true"
className=" icomoon-the7-font-the7-arrow-09"></i>
</span> <span
className="elementor-button-text">Details</span>
</span> </a></div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-4ed2422"
data-id="4ed2422" data-element_type="column">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-a4ca685 elementor-widget elementor-widget-image"
data-id="a4ca685" data-element_type="widget"
data-widget_type="image.default">
<div className="elementor-widget-container">
<div className="elementor-image"> <a
href="/elementor-business-one-page/jacob/"> <img
src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/elementor/thumbs/1-4-1-oog1pnunoluv441wa7in7nivherhm9zvg8pfhgmxs8.jpg"
title="1 (4)" alt="1 (4)" /></a></div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-02f97b5"
data-id="02f97b5" data-element_type="column">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-7b00e28 elementor-widget elementor-widget-heading"
data-id="7b00e28" data-element_type="widget"
data-widget_type="heading.default">
<div className="elementor-widget-container">
<h4 className="elementor-heading-title elementor-size-default">
Jacob Remmington</h4>
</div>
</div>
<div className="elementor-element elementor-element-bb91d4b elementor-widget elementor-widget-heading"
data-id="bb91d4b" data-element_type="widget"
data-widget_type="heading.default">
<div className="elementor-widget-container">
<div className="elementor-heading-title elementor-size-default">
Co-founder, Creative director</div>
</div>
</div>
<div className="elementor-element elementor-element-279429c elementor-widget elementor-widget-text-editor"
data-id="279429c" data-element_type="widget"
data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<div className="elementor-text-editor elementor-clearfix">
<p>Tristique eget malesuada sed, viverra at sapien.
Maecenas gravida lacus nec dolor apibus a tellus at
euismod. Ut sit amet semper arcu. Proin eget ex
convallis eu viverra.</p>
</div>
</div>
</div>
<div className="elementor-element elementor-element-c229bd2 elementor-align-left elementor-mobile-align-center elementor-widget elementor-widget-button"
data-id="c229bd2" data-element_type="widget"
data-widget_type="button.default">
<div className="elementor-widget-container">
<div className="elementor-button-wrapper"> <a
href="/elementor-business-one-page/jacob/"
className="elementor-button-link elementor-button elementor-size-xs"
role="button"> <span
className="elementor-button-content-wrapper"> <span
className="elementor-button-icon elementor-align-icon-right">
<i aria-hidden="true"
className=" icomoon-the7-font-the7-arrow-09"></i>
</span> <span
className="elementor-button-text">Details</span>
</span> </a></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section
className="elementor-section elementor-top-section elementor-element elementor-element-b6ba120 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
data-id="b6ba120" data-element_type="section">
<div className="elementor-container elementor-column-gap-no">
<div className="elementor-row">
<div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-1076651"
data-id="1076651" data-element_type="column">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-dce480f elementor-widget elementor-widget-image"
data-id="dce480f" data-element_type="widget"
data-widget_type="image.default">
<div className="elementor-widget-container">
<div className="elementor-image"> <a
href="/elementor-business-one-page/miriam/"><img
src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/elementor/thumbs/4-1-oog1q1y8j4e5y9hezvm1r1yse6tztqjui6hpom216w.jpg"
title="4" alt="4" /></a></div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-3a8707e"
data-id="3a8707e" data-element_type="column">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-e099c8b elementor-widget elementor-widget-heading"
data-id="e099c8b" data-element_type="widget"
data-widget_type="heading.default">
<div className="elementor-widget-container">
<h4 className="elementor-heading-title elementor-size-default">
Miriam Richmond</h4>
</div>
</div>
<div className="elementor-element elementor-element-c6f9de7 elementor-widget elementor-widget-heading"
data-id="c6f9de7" data-element_type="widget"
data-widget_type="heading.default">
<div className="elementor-widget-container">
<div className="elementor-heading-title elementor-size-default">
Marketing director</div>
</div>
</div>
<div className="elementor-element elementor-element-a611853 elementor-widget elementor-widget-text-editor"
data-id="a611853" data-element_type="widget"
data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<div className="elementor-text-editor elementor-clearfix">
Maecenas at euismod. Ut sit amet semper arcu gravida
lacus nec dolor apibus a tellus at euismod. Ut sit amet
semper arcu. Proin eget ex convallis eu viverra lorem
from dolor.</div>
</div>
</div>
<div className="elementor-element elementor-element-9298455 elementor-align-left elementor-mobile-align-center elementor-widget elementor-widget-button"
data-id="9298455" data-element_type="widget"
data-widget_type="button.default">
<div className="elementor-widget-container">
<div className="elementor-button-wrapper"> <a
href="/elementor-business-one-page/miriam"
className="elementor-button-link elementor-button elementor-size-xs"
role="button"> <span
className="elementor-button-content-wrapper"> <span
className="elementor-button-icon elementor-align-icon-right">
<i aria-hidden="true"
className=" icomoon-the7-font-the7-arrow-09"></i>
</span> <span
className="elementor-button-text">Details</span>
</span> </a></div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-eebd2d4"
data-id="eebd2d4" data-element_type="column">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-ba85421 elementor-widget elementor-widget-image"
data-id="ba85421" data-element_type="widget"
data-widget_type="image.default">
<div className="elementor-widget-container">
<div className="elementor-image"> <a
href="/elementor-business-one-page/dt_team/leonardo-black/">
<img src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/elementor/thumbs/2-6-1-oog1poshvfw5fq0j4px9s5ac2smutz3lsdcwyqljm0.jpg"
title="2 (6)" alt="2 (6)" /></a></div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-4fdcb83"
data-id="4fdcb83" data-element_type="column">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-7e86d2f elementor-widget elementor-widget-heading"
data-id="7e86d2f" data-element_type="widget"
data-widget_type="heading.default">
<div className="elementor-widget-container">
<h4 className="elementor-heading-title elementor-size-default">
Leonardo Black</h4>
</div>
</div>
<div className="elementor-element elementor-element-4066129 elementor-widget elementor-widget-heading"
data-id="4066129" data-element_type="widget"
data-widget_type="heading.default">
<div className="elementor-widget-container">
<div className="elementor-heading-title elementor-size-default">
Financial director</div>
</div>
</div>
<div className="elementor-element elementor-element-1007f19 elementor-widget elementor-widget-text-editor"
data-id="1007f19" data-element_type="widget"
data-widget_type="text-editor.default">
<div className="elementor-widget-container">
<div className="elementor-text-editor elementor-clearfix">
<p>Convallis eu viverra lorem pretium. Morbi dapibus a
tellus – dolor amet glavridaat euismod. Ut sit amet
semper eget ex convallis eu viverra lorem dapibus a
tellus at euismod lorem.</p>
</div>
</div>
</div>
<div className="elementor-element elementor-element-3407a44 elementor-align-left elementor-mobile-align-center elementor-widget elementor-widget-button"
data-id="3407a44" data-element_type="widget"
data-widget_type="button.default">
<div className="elementor-widget-container">
<div className="elementor-button-wrapper"> <a
href="/elementor-business-one-page/leonardo-black"
className="elementor-button-link elementor-button elementor-size-xs"
role="button"> <span
className="elementor-button-content-wrapper"> <span
className="elementor-button-icon elementor-align-icon-right">
<i aria-hidden="true"
className=" icomoon-the7-font-the7-arrow-09"></i>
</span> <span
className="elementor-button-text">Details</span>
</span> </a></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section> */}
{/* <section
className="elementor-section elementor-top-section elementor-element elementor-element-71a6bf2 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
data-id="71a6bf2" data-element_type="section">
<div className="elementor-container elementor-column-gap-wider">
<div className="elementor-row">
<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-8cc8c07"
data-id="8cc8c07" data-element_type="column"
data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-16ecfbd elementor-widget elementor-widget-the7_elements_carousel"
data-id="16ecfbd" data-element_type="widget"
data-widget_type="the7_elements_carousel.default">
<div className="elementor-widget-container">
<div className="owl-carousel portfolio-carousel-shortcode elementor-owl-carousel-call portfolio-shortcode the7-elementor-widget the7_elements_carousel-16ecfbd content-align-center dt-icon-bg-off dt-icon-hover-bg-off disable-icon-hover-bg meta-info-off enable-bg-rollover classic-layout-list description-under-image  no-changes arrows-bg-off arrows-hover-bg-off disable-arrows-hover-bg owl-loaded owl-drag refreshed"
data-scroll-mode="1" data-col-num="5"
data-wide-col-num="5" data-laptop-col="4"
data-h-tablet-columns-num="4"
data-v-tablet-columns-num="3" data-phone-columns-num="1"
data-auto-height="false" data-col-gap="20"
data-stage-padding="0" data-speed="600"
data-autoplay="false" data-autoplay_speed=""
data-arrows="true" data-bullet="false"
data-next-icon=" icomoon-the7-font-the7-arrow-29"
data-prev-icon=" icomoon-the7-font-the7-arrow-28"
data-img-shadow-size="" data-img-shadow-spread="">
<div className="owl-stage-outer">
<div className="owl-stage"
style={{transform: `translate3d(-1200px, 0%, 0px)`, transition: 'all 0s ease 0s', width: '4800px'}}>
<div className="dt-owl-item cloned"
style={{width: '220px', marginRight: '20px'}}>
<article
className="post visible post-112 dt_team type-dt_team status-publish has-post-thumbnail hentry dt_team_category-staff dt_team_category-20 description-off">
<div className="post-thumbnail-wrap ">
    <div className="post-thumbnail"><a
            href="https://the7.io/elementor-business-one-page/dt_team/jacob-remmington/"
            className="post-thumbnail-rollover"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                className="preload-me lazy-load"
                src="data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20768%20768'%2F%3E"
                data-src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1_8-1-768x768.jpg"
                data-srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1_8-1-768x768.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1_8-1-900x900.jpg 900w"
                alt="" title="1_8"
                width="768"
                height="768" /></a></div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/dt_team/jacob-remmington/"
            title="Jacob Remmington"
            rel="bookmark">Jacob
            Remmington</a></h3>
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Creative director</p>
    </div>
</div>
</article>
</div>
<div className="dt-owl-item cloned"
style={{width: '220px', marginRight: '20px'}}>
<article
className="post visible post-107 dt_team type-dt_team status-publish has-post-thumbnail hentry dt_team_category-staff dt_team_category-20 description-off">
<div className="post-thumbnail-wrap ">
    <div className="post-thumbnail"><a
            href="https://the7.io/elementor-business-one-page/dt_team/anna-whitebird/"
            className="post-thumbnail-rollover"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                className="preload-me lazy-load"
                src="data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20768%20768'%2F%3E"
                data-src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1_1-1-768x768.jpg"
                data-srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1_1-1-768x768.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1_1-1-900x900.jpg 900w"
                alt="" title="1_1"
                width="768"
                height="768" /></a></div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/dt_team/anna-whitebird/"
            title="Anna Whitebird"
            rel="bookmark">Anna
            Whitebird</a></h3>
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Marketing director</p>
    </div>
</div>
</article>
</div>
<div className="dt-owl-item cloned"
style={{width: '220px', marginRight: '20px'}}>
<article
className="post visible post-105 dt_team type-dt_team status-publish has-post-thumbnail hentry dt_team_category-staff dt_team_category-20 description-off">
<div className="post-thumbnail-wrap ">
    <div className="post-thumbnail"><a
            href="https://the7.io/elementor-business-one-page/dt_team/tiffany-blackwood/"
            className="post-thumbnail-rollover"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                className="preload-me lazy-load"
                src="data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20768%20768'%2F%3E"
                data-src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1_3-1-768x768.jpg"
                data-srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1_3-1-768x768.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1_3-1-900x900.jpg 900w"
                alt="" title="1_3"
                width="768"
                height="768" /></a></div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/dt_team/tiffany-blackwood/"
            title="Tiffany Blackwood"
            rel="bookmark">Tiffany
            Blackwood</a></h3>
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Digital artist</p>
    </div>
</div>
</article>
</div>
<div className="dt-owl-item cloned"
style={{width: '220px', marginRight: '20px'}}>
<article
className="post visible post-103 dt_team type-dt_team status-publish has-post-thumbnail hentry dt_team_category-staff dt_team_category-20 description-off">
<div className="post-thumbnail-wrap ">
    <div className="post-thumbnail"><a
            href="https://the7.io/elementor-business-one-page/dt_team/alex-greenfield/"
            className="post-thumbnail-rollover"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                className="preload-me lazy-load"
                src="data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20768%20768'%2F%3E"
                data-src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1_4-1-768x768.jpg"
                data-srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1_4-1-768x768.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1_4-1-900x900.jpg 900w"
                alt="" title="1_4"
                width="768"
                height="768" /></a></div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/dt_team/alex-greenfield/"
            title="Alex Greenfield"
            rel="bookmark">Alex
            Greenfield</a></h3>
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Programmer</p>
    </div>
</div>
</article>
</div>
<div className="dt-owl-item cloned"
style={{width: '220px', marginRight: '20px'}}>
<article
className="post visible post-97 dt_team type-dt_team status-publish has-post-thumbnail hentry dt_team_category-staff dt_team_category-20 description-off">
<div className="post-thumbnail-wrap ">
    <div className="post-thumbnail"><a
            href="https://the7.io/elementor-business-one-page/dt_team/jeffrey-brown/"
            className="post-thumbnail-rollover"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                className="preload-me lazy-load owl-thumb-lazy-load-show"
                src="data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20768%20768'%2F%3E"
                data-src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1_2-1-768x768.jpg"
                data-srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1_2-1-768x768.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1_2-1-900x900.jpg 900w"
                alt="" title="1_2"
                width="768"
                height="768" /></a></div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/dt_team/jeffrey-brown/"
            title="Jeffrey Brown"
            rel="bookmark">Jeffrey
            Brown</a></h3>
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Accountant</p>
    </div>
</div>
</article>
</div>
<div className="dt-owl-item active"
style={{width: '220px', marginRight: '20px'}}>
<article
className="post visible post-976 dt_team type-dt_team status-publish has-post-thumbnail hentry dt_team_category-managers dt_team_category-19 description-off">
<div className="post-thumbnail-wrap ">
    <div className="post-thumbnail"><a
            href="https://the7.io/elementor-business-one-page/dt_team/leonardo-black/"
            className="post-thumbnail-rollover layzr-bg"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                className="preload-me lazy-load owl-thumb-lazy-load-show"
                src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/2-6-1-768x768.jpg"
                data-src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/2-6-1-768x768.jpg"
                data-srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/2-6-1-768x768.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/2-6-1-900x900.jpg 900w"
                alt="" title="2 (6)"
                width="768"
                height="768" /></a></div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/dt_team/leonardo-black/"
            title="Leonardo Black"
            rel="bookmark">Leonardo
            Black</a></h3>
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Financial director</p>
    </div>
</div>
</article>
</div>
<div className="dt-owl-item active"
style={{width: '220px', marginRight: '20px'}}>
<article
className="post visible post-973 dt_team type-dt_team status-publish has-post-thumbnail hentry dt_team_category-managers dt_team_category-19 description-off">
<div className="post-thumbnail-wrap ">
    <div className="post-thumbnail"><a
            href="https://the7.io/elementor-business-one-page/dt_team/jacob/"
            className="post-thumbnail-rollover layzr-bg"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                className="preload-me lazy-load owl-thumb-lazy-load-show"
                src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1-4-1-768x768.jpg"
                data-src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1-4-1-768x768.jpg"
                data-srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1-4-1-768x768.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1-4-1-900x900.jpg 900w"
                alt="" title="1 (4)"
                width="768"
                height="768" /></a></div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/dt_team/jacob/"
            title="Jacob Martin"
            rel="bookmark">Jacob
            Martin</a></h3>
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Co-founder, Creative director
        </p>
    </div>
</div>
</article>
</div>
<div className="dt-owl-item active"
style={{width: '220px', marginRight: '20px'}}>
<article
className="post visible post-970 dt_team type-dt_team status-publish has-post-thumbnail hentry dt_team_category-managers dt_team_category-19 description-off">
<div className="post-thumbnail-wrap ">
    <div className="post-thumbnail"><a
            href="https://the7.io/elementor-business-one-page/dt_team/alexandra/"
            className="post-thumbnail-rollover layzr-bg"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                className="preload-me lazy-load owl-thumb-lazy-load-show"
                src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/3-2-1-768x768.jpg"
                data-src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/3-2-1-768x768.jpg"
                data-srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/3-2-1-768x768.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/3-2-1-900x900.jpg 900w"
                alt="" title="3 (2)"
                width="768"
                height="768" /></a></div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/dt_team/alexandra/"
            title="Alexandra Blackfire"
            rel="bookmark">Alexandra
            Blackfire</a></h3>
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Co-founder, CEO</p>
    </div>
</div>
</article>
</div>
<div className="dt-owl-item active"
style={{width: '220px', marginRight: '20px'}}>
<article
className="post visible post-967 dt_team type-dt_team status-publish has-post-thumbnail hentry dt_team_category-managers dt_team_category-19 description-off">
<div className="post-thumbnail-wrap ">
    <div className="post-thumbnail"><a
            href="https://the7.io/elementor-business-one-page/dt_team/miriam/"
            className="post-thumbnail-rollover layzr-bg"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                className="preload-me lazy-load owl-thumb-lazy-load-show"
                src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/4-1-768x768.jpg"
                data-src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/4-1-768x768.jpg"
                data-srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/4-1-768x768.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/4-1-900x900.jpg 900w"
                alt="" title="4"
                width="768"
                height="768" /></a></div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/dt_team/miriam/"
            title="Miriam Richmond"
            rel="bookmark">Miriam
            Richmond</a></h3>
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Marketing director</p>
    </div>
</div>
</article>
</div>
<div className="dt-owl-item active"
style={{width: '220px', marginRight: '20px'}}>
<article
className="post visible post-114 dt_team type-dt_team status-publish has-post-thumbnail hentry dt_team_category-staff dt_team_category-20 description-off">
<div className="post-thumbnail-wrap ">
    <div className="post-thumbnail"><a
            href="https://the7.io/elementor-business-one-page/dt_team/diana-richards/"
            className="post-thumbnail-rollover layzr-bg"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                className="preload-me lazy-load owl-thumb-lazy-load-show"
                src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1_7-1-768x768.jpg"
                data-src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1_7-1-768x768.jpg"
                data-srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1_7-1-768x768.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1_7-1-900x900.jpg 900w"
                alt="" title="1_7"
                width="768"
                height="768" /></a></div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/dt_team/diana-richards/"
            title="Diana Richards"
            rel="bookmark">Diana
            Richards</a></h3>
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Photographer</p>
    </div>
</div>
</article>
</div>
<div className="dt-owl-item"
style={{width: '220px', marginRight: '20px'}}>
<article
className="post visible post-112 dt_team type-dt_team status-publish has-post-thumbnail hentry dt_team_category-staff dt_team_category-20 description-off">
<div className="post-thumbnail-wrap ">
    <div className="post-thumbnail"><a
            href="https://the7.io/elementor-business-one-page/dt_team/jacob-remmington/"
            className="post-thumbnail-rollover layzr-bg"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                className="preload-me lazy-load owl-thumb-lazy-load-show"
                src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1_8-1-768x768.jpg"
                data-src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1_8-1-768x768.jpg"
                data-srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1_8-1-768x768.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1_8-1-900x900.jpg 900w"
                alt="" title="1_8"
                width="768"
                height="768" /></a></div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/dt_team/jacob-remmington/"
            title="Jacob Remmington"
            rel="bookmark">Jacob
            Remmington</a></h3>
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Creative director</p>
    </div>
</div>
</article>
</div>
<div className="dt-owl-item"
style={{width: '220px', marginRight: '20px'}}>
<article
className="post visible post-107 dt_team type-dt_team status-publish has-post-thumbnail hentry dt_team_category-staff dt_team_category-20 description-off">
<div className="post-thumbnail-wrap ">
    <div className="post-thumbnail"><a
            href="https://the7.io/elementor-business-one-page/dt_team/anna-whitebird/"
            className="post-thumbnail-rollover layzr-bg"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                className="preload-me lazy-load"
                src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1_1-1-768x768.jpg"
                data-src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1_1-1-768x768.jpg"
                data-srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1_1-1-768x768.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1_1-1-900x900.jpg 900w"
                alt="" title="1_1"
                width="768"
                height="768" /></a></div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/dt_team/anna-whitebird/"
            title="Anna Whitebird"
            rel="bookmark">Anna
            Whitebird</a></h3>
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Marketing director</p>
    </div>
</div>
</article>
</div>
<div className="dt-owl-item"
style={{width: '220px', marginRight: '20px'}}>
<article
className="post visible post-105 dt_team type-dt_team status-publish has-post-thumbnail hentry dt_team_category-staff dt_team_category-20 description-off">
<div className="post-thumbnail-wrap ">
    <div className="post-thumbnail"><a
            href="https://the7.io/elementor-business-one-page/dt_team/tiffany-blackwood/"
            className="post-thumbnail-rollover layzr-bg"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                className="preload-me lazy-load"
                src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1_3-1-768x768.jpg"
                data-src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1_3-1-768x768.jpg"
                data-srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1_3-1-768x768.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1_3-1-900x900.jpg 900w"
                alt="" title="1_3"
                width="768"
                height="768" /></a></div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/dt_team/tiffany-blackwood/"
            title="Tiffany Blackwood"
            rel="bookmark">Tiffany
            Blackwood</a></h3>
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Digital artist</p>
    </div>
</div>
</article>
</div>
<div className="dt-owl-item"
style={{width: '220px', marginRight: '20px'}}>
<article
className="post visible post-103 dt_team type-dt_team status-publish has-post-thumbnail hentry dt_team_category-staff dt_team_category-20 description-off">
<div className="post-thumbnail-wrap ">
    <div className="post-thumbnail"><a
            href="https://the7.io/elementor-business-one-page/dt_team/alex-greenfield/"
            className="post-thumbnail-rollover layzr-bg"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                className="preload-me lazy-load"
                src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1_4-1-768x768.jpg"
                data-src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1_4-1-768x768.jpg"
                data-srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1_4-1-768x768.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1_4-1-900x900.jpg 900w"
                alt="" title="1_4"
                width="768"
                height="768" /></a></div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/dt_team/alex-greenfield/"
            title="Alex Greenfield"
            rel="bookmark">Alex
            Greenfield</a></h3>
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Programmer</p>
    </div>
</div>
</article>
</div>
<div className="dt-owl-item"
style={{width: '220px', marginright: '20px'}}>
<article
className="post visible post-97 dt_team type-dt_team status-publish has-post-thumbnail hentry dt_team_category-staff dt_team_category-20 description-off">
<div className="post-thumbnail-wrap ">
    <div className="post-thumbnail"><a
            href="https://the7.io/elementor-business-one-page/dt_team/jeffrey-brown/"
            className="post-thumbnail-rollover layzr-bg"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                className="preload-me lazy-load"
                src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1_2-1-768x768.jpg"
                data-src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1_2-1-768x768.jpg"
                data-srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1_2-1-768x768.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1_2-1-900x900.jpg 900w"
                alt="" title="1_2"
                width="768"
                height="768" /></a></div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/dt_team/jeffrey-brown/"
            title="Jeffrey Brown"
            rel="bookmark">Jeffrey
            Brown</a></h3>
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Accountant</p>
    </div>
</div>
</article>
</div>
<div className="dt-owl-item cloned"
style={{width: '220px', marginRight: '20px'}}>
<article
className="post visible post-976 dt_team type-dt_team status-publish has-post-thumbnail hentry dt_team_category-managers dt_team_category-19 description-off">
<div className="post-thumbnail-wrap ">
    <div className="post-thumbnail"><a
            href="https://the7.io/elementor-business-one-page/dt_team/leonardo-black/"
            className="post-thumbnail-rollover"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                className="preload-me lazy-load"
                src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/2-6-1-768x768.jpg"
                data-src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/2-6-1-768x768.jpg"
                data-srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/2-6-1-768x768.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/2-6-1-900x900.jpg 900w"
                alt="" title="2 (6)"
                width="768"
                height="768" /></a></div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/dt_team/leonardo-black/"
            title="Leonardo Black"
            rel="bookmark">Leonardo
            Black</a></h3>
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Financial director</p>
    </div>
</div>
</article>
</div>
<div className="dt-owl-item cloned"
style={{width: '220px', marginRight: '20px'}}>
<article
className="post visible post-973 dt_team type-dt_team status-publish has-post-thumbnail hentry dt_team_category-managers dt_team_category-19 description-off">
<div className="post-thumbnail-wrap ">
    <div className="post-thumbnail"><a
            href="https://the7.io/elementor-business-one-page/dt_team/jacob/"
            className="post-thumbnail-rollover"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                className="preload-me lazy-load"
                src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1-4-1-768x768.jpg"
                data-src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1-4-1-768x768.jpg"
                data-srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1-4-1-768x768.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1-4-1-900x900.jpg 900w"
                alt="" title="1 (4)"
                width="768"
                height="768" /></a></div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/dt_team/jacob/"
            title="Jacob Martin"
            rel="bookmark">Jacob
            Martin</a></h3>
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Co-founder, Creative director
        </p>
    </div>
</div>
</article>
</div>
<div className="dt-owl-item cloned"
style={{width: '220px', marginRight: '20px'}}>
<article
className="post visible post-970 dt_team type-dt_team status-publish has-post-thumbnail hentry dt_team_category-managers dt_team_category-19 description-off">
<div className="post-thumbnail-wrap ">
    <div className="post-thumbnail"><a
            href="https://the7.io/elementor-business-one-page/dt_team/alexandra/"
            className="post-thumbnail-rollover"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                className="preload-me lazy-load"
                src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/3-2-1-768x768.jpg"
                data-src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/3-2-1-768x768.jpg"
                data-srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/3-2-1-768x768.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/3-2-1-900x900.jpg 900w"
                alt="" title="3 (2)"
                width="768"
                height="768" /></a></div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/dt_team/alexandra/"
            title="Alexandra Blackfire"
            rel="bookmark">Alexandra
            Blackfire</a></h3>
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Co-founder, CEO</p>
    </div>
</div>
</article>
</div>
<div className="dt-owl-item cloned"
style={{width: '220px', marginRight: '20px'}}>
<article
className="post visible post-967 dt_team type-dt_team status-publish has-post-thumbnail hentry dt_team_category-managers dt_team_category-19 description-off">
<div className="post-thumbnail-wrap ">
    <div className="post-thumbnail"><a
            href="https://the7.io/elementor-business-one-page/dt_team/miriam/"
            className="post-thumbnail-rollover"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                className="preload-me lazy-load"
                src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/4-1-768x768.jpg"
                data-src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/4-1-768x768.jpg"
                data-srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/4-1-768x768.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/4-1-900x900.jpg 900w"
                alt="" title="4"
                width="768"
                height="768" /></a></div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/dt_team/miriam/"
            title="Miriam Richmond"
            rel="bookmark">Miriam
            Richmond</a></h3>
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Marketing director</p>
    </div>
</div>
</article>
</div>
<div className="dt-owl-item cloned"
style={{width: '220px', marginRight: '20px'}}>
<article
className="post visible post-114 dt_team type-dt_team status-publish has-post-thumbnail hentry dt_team_category-staff dt_team_category-20 description-off">
<div className="post-thumbnail-wrap ">
    <div className="post-thumbnail"><a
            href="https://the7.io/elementor-business-one-page/dt_team/diana-richards/"
            className="post-thumbnail-rollover"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                className="preload-me lazy-load"
                src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1_7-1-768x768.jpg"
                data-src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1_7-1-768x768.jpg"
                data-srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1_7-1-768x768.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/1_7-1-900x900.jpg 900w"
                alt="" title="1_7"
                width="768"
                height="768" /></a></div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/dt_team/diana-richards/"
            title="Diana Richards"
            rel="bookmark">Diana
            Richards</a></h3>
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Photographer</p>
    </div>
</div>
</article>
</div>
</div>
</div>
<div className="owl-nav"><a className="owl-prev"><i
className=" icomoon-the7-font-the7-arrow-28"></i></a><a
className="owl-next"><i
className=" icomoon-the7-font-the7-arrow-29"></i></a>
</div>
<div className="owl-dots disabled"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section> */}
{/* <section
className="elementor-section elementor-top-section elementor-element elementor-element-d1b44bc elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
data-id="d1b44bc" data-element_type="section"
data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}"
style={{width: '1349px', left: '-24.5px'}}>
<div className="elementor-background-overlay"></div>
<div className="elementor-container elementor-column-gap-wider">
<div className="elementor-row">
<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-cba5f23"
data-id="cba5f23" data-element_type="column"
data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<section
className="elementor-section elementor-inner-section elementor-element elementor-element-67640b2 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
data-id="67640b2" data-element_type="section"
data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div className="elementor-container elementor-column-gap-no">
<div className="elementor-row">
<div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-609cdfc"
data-id="609cdfc" data-element_type="column"
data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div
className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-95e4432 elementor-widget elementor-widget-heading"
data-id="95e4432"
data-element_type="widget"
data-widget_type="heading.default">
<div className="elementor-widget-container">
    <h2
        className="elementor-heading-title elementor-size-default">
        Seven Company in numbers</h2>
</div>
</div>
<div className="elementor-element elementor-element-18d2e7d elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
data-id="18d2e7d"
data-element_type="widget"
data-widget_type="divider.default">
<div className="elementor-widget-container">
    <div className="elementor-divider">
        <span
            className="elementor-divider-separator">
        </span></div>
</div>
</div>
<div className="elementor-element elementor-element-4662f39 elementor-widget elementor-widget-text-editor"
data-id="4662f39"
data-element_type="widget"
data-widget_type="text-editor.default">
<div className="elementor-widget-container">
    <div
        className="elementor-text-editor elementor-clearfix">
        <h4>The ones who are crazy
            enough to think they can
            change the world, are the
            ones that do.</h4> Etiam sit
        amet convallis erat. Class
        aptent taciti sociosqu ad litora
        torquent per conubia! Maecenas
        gravida lacus.
    </div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-4182343"
data-id="4182343" data-element_type="column">
<div
className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-1efd8e3 elementor-view-stacked elementor-shape-square elementor-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
data-id="1efd8e3"
data-element_type="widget"
data-widget_type="icon-box.default">
<div className="elementor-widget-container">
    <div
        className="elementor-icon-box-wrapper">
        <div
            className="elementor-icon-box-icon">
            <span
                className="elementor-icon elementor-animation-">
                <i aria-hidden="true"
                    className="far fa-calendar-check"></i>
            </span></div>
        <div
            className="elementor-icon-box-content">
            <h3
                className="elementor-icon-box-title">
                <span></span></h3>
        </div>
    </div>
</div>
</div>
<div className="elementor-element elementor-element-435b4c3 elementor-widget elementor-widget-counter"
data-id="435b4c3"
data-element_type="widget"
data-widget_type="counter.default">
<div className="elementor-widget-container">
    <div className="elementor-counter">
        <div
            className="elementor-counter-number-wrapper">
            <span
                className="elementor-counter-number-prefix"></span>
            <span
                className="elementor-counter-number"
                data-duration="2000"
                data-to-value="20"
                data-from-value="0"
                data-delimiter=",">0</span>
            <span
                className="elementor-counter-number-suffix">+</span>
        </div>
        <div
            className="elementor-counter-title">
            Years in business</div>
    </div>
</div>
</div>
<div className="elementor-element elementor-element-3bf2e4c elementor-widget elementor-widget-spacer"
data-id="3bf2e4c"
data-element_type="widget"
data-widget_type="spacer.default">
<div className="elementor-widget-container">
    <div className="elementor-spacer">
        <div
            className="elementor-spacer-inner">
        </div>
    </div>
</div>
</div>
<div className="elementor-element elementor-element-7d6db20 elementor-view-stacked elementor-shape-square elementor-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
data-id="7d6db20"
data-element_type="widget"
data-widget_type="icon-box.default">
<div className="elementor-widget-container">
    <div
        className="elementor-icon-box-wrapper">
        <div
            className="elementor-icon-box-icon">
            <span
                className="elementor-icon elementor-animation-">
                <i aria-hidden="true"
                    className="fas fa-handshake"></i>
            </span></div>
        <div
            className="elementor-icon-box-content">
            <h3
                className="elementor-icon-box-title">
                <span></span></h3>
        </div>
    </div>
</div>
</div>
<div className="elementor-element elementor-element-05ea088 elementor-widget elementor-widget-counter"
data-id="05ea088"
data-element_type="widget"
data-widget_type="counter.default">
<div className="elementor-widget-container">
    <div className="elementor-counter">
        <div
            className="elementor-counter-number-wrapper">
            <span
                className="elementor-counter-number-prefix"></span>
            <span
                className="elementor-counter-number"
                data-duration="2000"
                data-to-value="100"
                data-from-value="0"
                data-delimiter=",">0</span>
            <span
                className="elementor-counter-number-suffix">+</span>
        </div>
        <div
            className="elementor-counter-title">
            Happy clients</div>
    </div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-b654ef9"
data-id="b654ef9" data-element_type="column"
data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div
className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-2fc04d3 elementor-view-stacked elementor-shape-square elementor-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
data-id="2fc04d3"
data-element_type="widget"
data-widget_type="icon-box.default">
<div className="elementor-widget-container">
    <div
        className="elementor-icon-box-wrapper">
        <div
            className="elementor-icon-box-icon">
            <span
                className="elementor-icon elementor-animation-">
                <i aria-hidden="true"
                    className="fas fa-users"></i>
            </span></div>
        <div
            className="elementor-icon-box-content">
            <h3
                className="elementor-icon-box-title">
                <span></span></h3>
        </div>
    </div>
</div>
</div>
<div className="elementor-element elementor-element-a274a47 elementor-widget elementor-widget-counter"
data-id="a274a47"
data-element_type="widget"
data-widget_type="counter.default">
<div className="elementor-widget-container">
    <div className="elementor-counter">
        <div
            className="elementor-counter-number-wrapper">
            <span
                className="elementor-counter-number-prefix"></span>
            <span
                className="elementor-counter-number"
                data-duration="2000"
                data-to-value="25"
                data-from-value="0"
                data-delimiter=",">0</span>
            <span
                className="elementor-counter-number-suffix"></span>
        </div>
        <div
            className="elementor-counter-title">
            Top professinals</div>
    </div>
</div>
</div>
<div className="elementor-element elementor-element-4bf06d8 elementor-widget elementor-widget-spacer"
data-id="4bf06d8"
data-element_type="widget"
data-widget_type="spacer.default">
<div className="elementor-widget-container">
    <div className="elementor-spacer">
        <div
            className="elementor-spacer-inner">
        </div>
    </div>
</div>
</div>
<div className="elementor-element elementor-element-c8fb724 elementor-view-stacked elementor-shape-square elementor-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
data-id="c8fb724"
data-element_type="widget"
data-widget_type="icon-box.default">
<div className="elementor-widget-container">
    <div
        className="elementor-icon-box-wrapper">
        <div
            className="elementor-icon-box-icon">
            <span
                className="elementor-icon elementor-animation-">
                <i aria-hidden="true"
                    className="fas fa-gem"></i>
            </span></div>
        <div
            className="elementor-icon-box-content">
            <h3
                className="elementor-icon-box-title">
                <span></span></h3>
        </div>
    </div>
</div>
</div>
<div className="elementor-element elementor-element-0b1d231 elementor-widget elementor-widget-counter"
data-id="0b1d231"
data-element_type="widget"
data-widget_type="counter.default">
<div className="elementor-widget-container">
    <div className="elementor-counter">
        <div
            className="elementor-counter-number-wrapper">
            <span
                className="elementor-counter-number-prefix"></span>
            <span
                className="elementor-counter-number"
                data-duration="2000"
                data-to-value="14"
                data-from-value="0"
                data-delimiter=",">0</span>
            <span
                className="elementor-counter-number-suffix"></span>
        </div>
        <div
            className="elementor-counter-title">
            Industry awards</div>
    </div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-c282ce0"
data-id="c282ce0" data-element_type="column"
data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div
className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-8b5ca88 elementor-view-stacked elementor-shape-square elementor-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
data-id="8b5ca88"
data-element_type="widget"
data-widget_type="icon-box.default">
<div className="elementor-widget-container">
    <div
        className="elementor-icon-box-wrapper">
        <div
            className="elementor-icon-box-icon">
            <span
                className="elementor-icon elementor-animation-">
                <i aria-hidden="true"
                    className="fas fa-briefcase"></i>
            </span></div>
        <div
            className="elementor-icon-box-content">
            <h3
                className="elementor-icon-box-title">
                <span></span></h3>
        </div>
    </div>
</div>
</div>
<div className="elementor-element elementor-element-570d9a3 elementor-widget elementor-widget-counter"
data-id="570d9a3"
data-element_type="widget"
data-widget_type="counter.default">
<div className="elementor-widget-container">
    <div className="elementor-counter">
        <div
            className="elementor-counter-number-wrapper">
            <span
                className="elementor-counter-number-prefix"></span>
            <span
                className="elementor-counter-number"
                data-duration="2000"
                data-to-value="250"
                data-from-value="0"
                data-delimiter=",">0</span>
            <span
                className="elementor-counter-number-suffix">+</span>
        </div>
        <div
            className="elementor-counter-title">
            Projects done</div>
    </div>
</div>
</div>
<div className="elementor-element elementor-element-1b3b378 elementor-widget elementor-widget-spacer"
data-id="1b3b378"
data-element_type="widget"
data-widget_type="spacer.default">
<div className="elementor-widget-container">
    <div className="elementor-spacer">
        <div
            className="elementor-spacer-inner">
        </div>
    </div>
</div>
</div>
<div className="elementor-element elementor-element-82eb759 elementor-view-stacked elementor-shape-square elementor-position-top elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
data-id="82eb759"
data-element_type="widget"
data-widget_type="icon-box.default">
<div className="elementor-widget-container">
    <div
        className="elementor-icon-box-wrapper">
        <div
            className="elementor-icon-box-icon">
            <span
                className="elementor-icon elementor-animation-">
                <i aria-hidden="true"
                    className="far fa-lightbulb"></i>
            </span></div>
        <div
            className="elementor-icon-box-content">
            <h3
                className="elementor-icon-box-title">
                <span></span></h3>
        </div>
    </div>
</div>
</div>
<div className="elementor-element elementor-element-4bdc43a elementor-widget elementor-widget-counter"
data-id="4bdc43a"
data-element_type="widget"
data-widget_type="counter.default">
<div className="elementor-widget-container">
    <div className="elementor-counter">
        <div
            className="elementor-counter-number-wrapper">
            <span
                className="elementor-counter-number-prefix"></span>
            <span
                className="elementor-counter-number"
                data-duration="2000"
                data-to-value="8"
                data-from-value="0"
                data-delimiter=",">0</span>
            <span
                className="elementor-counter-number-suffix"></span>
        </div>
        <div
            className="elementor-counter-title">
            Exclusive patents</div>
    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</div>
</div>
</div>
</section> */}
{/* <section
className="elementor-section elementor-top-section elementor-element elementor-element-d013d49 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
data-id="d013d49" data-element_type="section" id="testimonials">
<div className="elementor-container elementor-column-gap-wider">
<div className="elementor-row">
<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-cff861f"
data-id="cff861f" data-element_type="column">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-c0435fb elementor-widget elementor-widget-heading"
data-id="c0435fb" data-element_type="widget"
data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 className="elementor-heading-title elementor-size-default">
Mentions &amp; Testimonials</h2>
</div>
</div>
<div className="elementor-element elementor-element-9c30372 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
data-id="9c30372" data-element_type="widget"
data-widget_type="divider.default">
<div className="elementor-widget-container">
<div className="elementor-divider"> <span
className="elementor-divider-separator"> </span></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section> */}
{/* <section
className="elementor-section elementor-top-section elementor-element elementor-element-09b7bb7 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
data-id="09b7bb7" data-element_type="section">
<div className="elementor-container elementor-column-gap-wider">
<div className="elementor-row">
<div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-1ce17c9"
data-id="1ce17c9" data-element_type="column">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap"> */}
{/* <section
className="elementor-section elementor-inner-section elementor-element elementor-element-054562d elementor-section-boxed elementor-section-height-default elementor-section-height-default"
data-id="054562d" data-element_type="section">
<div className="elementor-container elementor-column-gap-wider">
<div className="elementor-row">
<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-706e3f8"
data-id="706e3f8" data-element_type="column">
<div
className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-a224813 elementor-view-default elementor-widget elementor-widget-icon"
data-id="a224813"
data-element_type="widget"
data-widget_type="icon.default">
<div className="elementor-widget-container">
    <div className="elementor-icon-wrapper">
        <div className="elementor-icon"> <i
                aria-hidden="true"
                className="fas fa-quote-left"></i>
        </div>
    </div>
</div>
</div>
<div className="elementor-element elementor-element-a7a442e elementor-widget elementor-widget-testimonial"
data-id="a7a442e"
data-element_type="widget"
data-widget_type="testimonial.default">
<div className="elementor-widget-container">
    <div
        className="elementor-testimonial-wrapper elementor-testimonial-text-align-left">
        <div
            className="elementor-testimonial-content">
            "Morbi convallis metus eros,
            semper efficitur auctor.
            Etiam sit amet convallis
            sociosqu ad litora torquent
            per conubia lorem erat.
            Class aptent taciti sociosqu
            ad litora torquent per
            conulorem convallis metus
            eros!"</div>
        <div
            className="elementor-testimonial-meta elementor-has-image elementor-testimonial-image-position-aside">
            <div
                className="elementor-testimonial-meta-inner">
                <div
                    className="elementor-testimonial-image">
                    <img src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/elementor/thumbs/1_3-1-oog1qzsa8yrgslukyulpdaa9f8id5gs5xaph4oniu8.jpg"
                        title="1_3"
                        alt="1_3" /></div>
                <div
                    className="elementor-testimonial-details">
                    <div
                        className="elementor-testimonial-name">
                        Miriam Brown
                    </div>
                    <div
                        className="elementor-testimonial-job">
                        Seven Media
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-3710319"
data-id="3710319" data-element_type="column">
<div
className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-e686b06 elementor-view-default elementor-widget elementor-widget-icon"
data-id="e686b06"
data-element_type="widget"
data-widget_type="icon.default">
<div className="elementor-widget-container">
    <div className="elementor-icon-wrapper">
        <div className="elementor-icon"> <i
                aria-hidden="true"
                className="fas fa-quote-left"></i>
        </div>
    </div>
</div>
</div>
<div className="elementor-element elementor-element-c8fca46 elementor-widget elementor-widget-testimonial"
data-id="c8fca46"
data-element_type="widget"
data-widget_type="testimonial.default">
<div className="elementor-widget-container">
    <div
        className="elementor-testimonial-wrapper elementor-testimonial-text-align-left">
        <div
            className="elementor-testimonial-content">
            "Etiam sit amet convallis
            erat. Class aptent taciti
            sociosqu ad litora torquent
            lorem ipsum dolor per
            conubia! Maecenas gravida
            lacus convallis metus eros.
            Thanx!"</div>
        <div
            className="elementor-testimonial-meta elementor-has-image elementor-testimonial-image-position-aside">
            <div
                className="elementor-testimonial-meta-inner">
                <div
                    className="elementor-testimonial-image">
                    <img src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/elementor/thumbs/1_8-1-oog1ra4ic55mcbfkah2lmpobyh3ei4x7mpvteq86xs.jpg"
                        title="1_8"
                        alt="1_8" /></div>
                <div
                    className="elementor-testimonial-details">
                    <div
                        className="elementor-testimonial-name">
                        Richard Green
                    </div>
                    <div
                        className="elementor-testimonial-job">
                        Seven Media
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section> */}
{/* <section
className="elementor-section elementor-inner-section elementor-element elementor-element-2ebd07d elementor-section-boxed elementor-section-height-default elementor-section-height-default"
data-id="2ebd07d" data-element_type="section">
<div className="elementor-container elementor-column-gap-wider">
<div className="elementor-row">
<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-e3db167"
data-id="e3db167" data-element_type="column">
<div
className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-a38ff1f elementor-view-default elementor-widget elementor-widget-icon"
data-id="a38ff1f"
data-element_type="widget"
data-widget_type="icon.default">
<div className="elementor-widget-container">
    <div className="elementor-icon-wrapper">
        <div className="elementor-icon"> <i
                aria-hidden="true"
                className="fas fa-quote-left"></i>
        </div>
    </div>
</div>
</div>
<div className="elementor-element elementor-element-18e4aad elementor-widget elementor-widget-testimonial"
data-id="18e4aad"
data-element_type="widget"
data-widget_type="testimonial.default">
<div className="elementor-widget-container">
    <div
        className="elementor-testimonial-wrapper elementor-testimonial-text-align-left">
        <div
            className="elementor-testimonial-content">
            "From amet to glavrida -
            convallis metus eros, semper
            efficitur auctor. Etiam sit
            amet convallis erat. Class
            aptent taciti convallis
            metus eros sociosqu ad
            litora torquent per conubia
            torquent per conubia lorem!"
        </div>
        <div
            className="elementor-testimonial-meta elementor-has-image elementor-testimonial-image-position-aside">
            <div
                className="elementor-testimonial-meta-inner">
                <div
                    className="elementor-testimonial-image">
                    <img src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/elementor/thumbs/1_7-1-oog1rc06pt86zjctzhvurp7958u4xj4oaz6sda5elc.jpg"
                        title="1_7"
                        alt="1_7" /></div>
                <div
                    className="elementor-testimonial-details">
                    <div
                        className="elementor-testimonial-name">
                        Anna Richmond
                    </div>
                    <div
                        className="elementor-testimonial-job">
                        Seven Media
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-616cd0e"
data-id="616cd0e" data-element_type="column">
<div
className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-7acd61b elementor-view-default elementor-widget elementor-widget-icon"
data-id="7acd61b"
data-element_type="widget"
data-widget_type="icon.default">
<div className="elementor-widget-container">
    <div className="elementor-icon-wrapper">
        <div className="elementor-icon"> <i
                aria-hidden="true"
                className="fas fa-quote-left"></i>
        </div>
    </div>
</div>
</div>
<div className="elementor-element elementor-element-8358e16 elementor-widget elementor-widget-testimonial"
data-id="8358e16"
data-element_type="widget"
data-widget_type="testimonial.default">
<div className="elementor-widget-container">
    <div
        className="elementor-testimonial-wrapper elementor-testimonial-text-align-left">
        <div
            className="elementor-testimonial-content">
            "Morbi convallis metus eros
            - convallis metus eros,
            semper efficitur auctor.
            Etiam sit amet convallis
            erat. Class aptent taciti
            sociosqu ad litora torquent
            per conubia lorem!"</div>
        <div
            className="elementor-testimonial-meta elementor-has-image elementor-testimonial-image-position-aside">
            <div
                className="elementor-testimonial-meta-inner">
                <div
                    className="elementor-testimonial-image">
                    <img src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/elementor/thumbs/1_3-1-oog1qzsa8yrgslukyulpdaa9f8id5gs5xaph4oniu8.jpg"
                        title="1_3"
                        alt="1_3" /></div>
                <div
                    className="elementor-testimonial-details">
                    <div
                        className="elementor-testimonial-name">
                        Richard Green
                    </div>
                    <div
                        className="elementor-testimonial-job">
                        Seven Media
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section> */}
{/* </div>
</div>
</div>
<div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-11c08e5"
data-id="11c08e5" data-element_type="column"
data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<section
className="elementor-section elementor-inner-section elementor-element elementor-element-7e38f0e elementor-section-boxed elementor-section-height-default elementor-section-height-default"
data-id="7e38f0e" data-element_type="section"
data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div className="elementor-container elementor-column-gap-wider">
<div className="elementor-row">
<div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-7d23722"
data-id="7d23722" data-element_type="column"
data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div
className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-ab0a40f elementor-widget elementor-widget-heading"
data-id="ab0a40f"
data-element_type="widget"
data-widget_type="heading.default">
<div className="elementor-widget-container">
    <h4
        className="elementor-heading-title elementor-size-default">
        Press about us</h4>
</div>
</div>
<div className="elementor-element elementor-element-7b155fa elementor-position-left elementor-shape-square elementor-view-stacked elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
data-id="7b155fa"
data-element_type="widget"
data-widget_type="icon-box.default">
<div className="elementor-widget-container">
    <div
        className="elementor-icon-box-wrapper">
        <div
            className="elementor-icon-box-icon">
            <a className="elementor-icon elementor-animation-"
                href="https://the7.io/">
                <i aria-hidden="true"
                    className=" icomoon-the7-font-the7-more-00"></i>
            </a></div>
        <div
            className="elementor-icon-box-content">
            <h5
                className="elementor-icon-box-title">
                <a
                    href="https://the7.io/">Web
                    Design News (Oct.
                    2019) </a></h5>
            <p
                className="elementor-icon-box-description">
                The glavrida of lorem
                ipsum dolor in Seven
                company</p>
        </div>
    </div>
</div>
</div>
<div className="elementor-element elementor-element-17d0000 elementor-position-left elementor-shape-square elementor-view-stacked elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
data-id="17d0000"
data-element_type="widget"
data-widget_type="icon-box.default">
<div className="elementor-widget-container">
    <div
        className="elementor-icon-box-wrapper">
        <div
            className="elementor-icon-box-icon">
            <a className="elementor-icon elementor-animation-"
                href="https://the7.io/">
                <i aria-hidden="true"
                    className=" icomoon-the7-font-the7-more-00"></i>
            </a></div>
        <div
            className="elementor-icon-box-content">
            <h5
                className="elementor-icon-box-title">
                <a
                    href="https://the7.io/">Web
                    Design News (Oct.
                    2019) </a></h5>
            <p
                className="elementor-icon-box-description">
                Ipsum dolor in Seven
                company</p>
        </div>
    </div>
</div>
</div>
<div className="elementor-element elementor-element-5972595 elementor-position-left elementor-shape-square elementor-view-stacked elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
data-id="5972595"
data-element_type="widget"
data-widget_type="icon-box.default">
<div className="elementor-widget-container">
    <div
        className="elementor-icon-box-wrapper">
        <div
            className="elementor-icon-box-icon">
            <a className="elementor-icon elementor-animation-"
                href="https://the7.io/">
                <i aria-hidden="true"
                    className=" icomoon-the7-font-the7-more-00"></i>
            </a></div>
        <div
            className="elementor-icon-box-content">
            <h5
                className="elementor-icon-box-title">
                <a
                    href="https://the7.io/">International
                    Industry Forum (Oct.
                    2018) </a></h5>
            <p
                className="elementor-icon-box-description">
                10 core lorem ipsum amet
                dolor of Seven company​
            </p>
        </div>
    </div>
</div>
</div>
<div className="elementor-element elementor-element-c488d1b elementor-position-left elementor-shape-square elementor-view-stacked elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
data-id="c488d1b"
data-element_type="widget"
data-widget_type="icon-box.default">
<div className="elementor-widget-container">
    <div
        className="elementor-icon-box-wrapper">
        <div
            className="elementor-icon-box-icon">
            <a className="elementor-icon elementor-animation-"
                href="https://the7.io/">
                <i aria-hidden="true"
                    className=" icomoon-the7-font-the7-more-00"></i>
            </a></div>
        <div
            className="elementor-icon-box-content">
            <h5
                className="elementor-icon-box-title">
                <a
                    href="https://the7.io/">Programming
                    today (Oct. 2017)
                </a></h5>
            <p
                className="elementor-icon-box-description">
                From Seven company:
                glavrida lorem dolor</p>
        </div>
    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</div>
</div>
</div>
</section> */}
<section
className="elementor-section elementor-top-section elementor-element elementor-element-0bebed3 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
data-id="0bebed3" data-element_type="section">
<div className="elementor-container elementor-column-gap-wider">
<div className="elementor-row">
<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-695dd04"
data-id="695dd04" data-element_type="column">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-eb33231 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
data-id="eb33231" data-element_type="widget"
data-widget_type="divider.default">
<div className="elementor-widget-container">
<div className="elementor-divider"> <span
className="elementor-divider-separator"> </span></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section
style={{marginTop:-160}}
className="elementor-section elementor-top-section elementor-element elementor-element-162a95b elementor-section-boxed elementor-section-height-default elementor-section-height-default"
data-id="162a95b" data-element_type="section" id="blog">
<div className="elementor-container elementor-column-gap-wider">
<div className="elementor-row">
<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-482f25b"
data-id="482f25b" data-element_type="column">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-a96d91e elementor-widget elementor-widget-heading"
data-id="a96d91e" data-element_type="widget"
data-widget_type="heading.default">
<div className="elementor-widget-container">
<h2 style={{marginTop:50}} className="elementor-heading-title elementor-size-default">
From our blog</h2>
</div>
</div>
<div className="elementor-element elementor-element-570ac16 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
data-id="570ac16" data-element_type="widget"
data-widget_type="divider.default">
<div className="elementor-widget-container">
<div className="elementor-divider"> <span
className="elementor-divider-separator"> </span></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section
className="elementor-section elementor-top-section elementor-element elementor-element-4fe0046 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
data-id="4fe0046" data-element_type="section"
data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div className="elementor-container elementor-column-gap-wider">
<div className="elementor-row">
<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7fca13b"
data-id="7fca13b" data-element_type="column">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-c0d4787 elementor-widget elementor-widget-the7_elements_carousel"
data-id="c0d4787" data-element_type="widget"
data-widget_type="the7_elements_carousel.default">
<div className="elementor-widget-container">
<div className="owl-carousel portfolio-carousel-shortcode elementor-owl-carousel-call portfolio-shortcode the7-elementor-widget the7_elements_carousel-c0d4787 content-bg-on dt-icon-bg-on dt-icon-hover-bg-on disable-icon-hover-bg classic-layout-list description-under-image  no-changes arrows-bg-off arrows-hover-bg-off disable-arrows-hover-bg owl-loaded owl-drag refreshed"
data-scroll-mode="1" data-col-num="3"
data-wide-col-num="3" data-laptop-col="2"
data-h-tablet-columns-num="2"
data-v-tablet-columns-num="2" data-phone-columns-num="1"
data-auto-height="false" data-col-gap="6"
data-stage-padding="0" data-speed="600"
data-autoplay="false" data-autoplay_speed=""
data-arrows="true" data-bullet="false"
// data-next-icon=" icomoon-the7-font-the7-arrow-29"
// data-prev-icon=" icomoon-the7-font-the7-arrow-28"
data-img-shadow-size="" data-img-shadow-spread="">
<div className="owl-stage-outer">
<div className="owl-stage"
style={{transform: `translate3d(-1661px, 0%, 0px)`, transition: `all 0s ease 0s`, width: '6646px'}}>
<div className="dt-owl-item cloned"
style={{width: '409.333px', marginRight: '6px'}}>
<article
className="post visible post-334 type-post status-publish format-standard has-post-thumbnail hentry category-industry-news category-3 description-off">
<div
    className="post-thumbnail-wrap rollover-active this-ready">
    <div className="post-thumbnail"><a
            href="https://the7.io/elementor-business-one-page/2020/02/05/lorem-ipsum-nulla-dolor/"
            className="post-thumbnail-rollover"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                className="preload-me lazy-load"
                src="data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20768%20512'%2F%3E"
                data-src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-6-1-768x512.jpg"
                data-srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-6-1-768x512.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-6-1-1152x768.jpg 1152w"
                alt="" title="img001-6"
                width="768"
                height="512" /></a>
        <div
            className="project-links-container">
            <a href="https://the7.io/elementor-business-one-page/2020/02/05/lorem-ipsum-nulla-dolor/"
                className="project-details icon-without-border icon-without-hover-border"
                aria-label="Details link"><span
                    aria-hidden="true"
                    className=" icomoon-the7-font-the7-more-01"></span></a>
        </div>
    </div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/2020/02/05/lorem-ipsum-nulla-dolor/"
            title="Lorem ipsum nulla dolor"
            rel="bookmark">Lorem ipsum
            nulla dolor</a></h3>
    {/* <div className="entry-meta"><span
            className="category-link"><a
                href="https://the7.io/elementor-business-one-page/category/industry-news/">Industry
                news</a></span><a
            href="https://the7.io/elementor-business-one-page/2020/02/05/"
            title="9:08 am"
            className="data-link"
            rel="bookmark"><time
                className="entry-date updated"
                datetime="2020-02-05T09:08:24+00:00">5
                February 2020</time></a>
    </div> */}
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Class aptent taciti sociosqu
            ad litora torquent per purus
            lorem vel ante ac purus
            sollicitudin dictum conubia
            nostra, per inceptos
            himenaeos. In vel varius
            esteu gravidmi.</p>
    </div><a
        className=" dt-btn-s dt-btn post-details details-type-btn "
        href=" https://the7.io/elementor-business-one-page/2020/02/05/lorem-ipsum-nulla-dolor/ "
        target=""
        aria-label="Read more about Lorem ipsum nulla dolor"
        rel="nofollow">Read more<i
            className="dt-icon-the7-arrow-03"
            aria-hidden="true"></i></a>
</div>
</article>
</div>
<div className="dt-owl-item cloned"
style={{width: '409.333px', marginRight: '6px'}}>
<article
className="post visible post-1117 type-post status-publish format-standard has-post-thumbnail hentry category-company-news category-2 description-off">
<div
    className="post-thumbnail-wrap rollover-active this-ready">
    <div className="post-thumbnail"><a
            href="https://the7.io/elementor-business-one-page/2020/01/24/lorem-ipsom-habitant-morbi-tristique-senectus/"
            className="post-thumbnail-rollover"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                className="preload-me lazy-load"
                src="data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20768%20512'%2F%3E"
                data-src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-29-1-768x512.jpg"
                data-srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-29-1-768x512.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-29-1-1152x768.jpg 1152w"
                alt="" title="img001-29"
                width="768"
                height="512" /></a>
        <div
            className="project-links-container">
            <a href="https://the7.io/elementor-business-one-page/2020/01/24/lorem-ipsom-habitant-morbi-tristique-senectus/"
                className="project-details icon-without-border icon-without-hover-border"
                aria-label="Details link"><span
                    aria-hidden="true"
                    className=" icomoon-the7-font-the7-more-01"></span></a>
        </div>
    </div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/2020/01/24/lorem-ipsom-habitant-morbi-tristique-senectus/"
            title="Lorem ipsom – habitant morbi tristique senectus"
            rel="bookmark">Lorem ipsom –
            habitant morbi tristique
            senectus</a></h3>
    {/* <div className="entry-meta"><span
            className="category-link"><a
                href="https://the7.io/elementor-business-one-page/category/company-news/">Company
                news</a></span><a
            href="https://the7.io/elementor-business-one-page/2020/01/24/"
            title="2:35 pm"
            className="data-link"
            rel="bookmark"><time
                className="entry-date updated"
                datetime="2020-01-24T14:35:22+00:00">24
                January 2020</time></a>
    </div> */}
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Maecenas sit amet tincidunt
            elit egestas nulla facilisi.
            Maecenas sit amet tincidunt
            elit – habitant morbi
            tristique senectus et netus
            et malesuada fames.</p>
    </div><a
        className=" dt-btn-s dt-btn post-details details-type-btn "
        href=" https://the7.io/elementor-business-one-page/2020/01/24/lorem-ipsom-habitant-morbi-tristique-senectus/ "
        target=""
        aria-label="Read more about Lorem ipsom – habitant morbi tristique senectus"
        rel="nofollow">Read more<i
            className="dt-icon-the7-arrow-03"
            aria-hidden="true"></i></a>
</div>
</article>
</div>
<div className="dt-owl-item cloned"
style={{width: '409.333px', marginRight: '6px'}}>
<article
className="post visible post-1116 type-post status-publish format-standard has-post-thumbnail hentry category-company-news category-2 description-off">
<div
    className="post-thumbnail-wrap rollover-active this-ready">
    <div className="post-thumbnail"><a
            href="https://the7.io/elementor-business-one-page/2019/08/24/pellentesque-habitant-morbi-tristique/"
            className="post-thumbnail-rollover"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                className="preload-me lazy-load"
                src="data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20768%20512'%2F%3E"
                data-src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/img001-8-1-768x512.jpg"
                data-srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/img001-8-1-768x512.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/img001-8-1-1152x768.jpg 1152w"
                alt="" title="img001-8"
                width="768"
                height="512" /></a>
        <div
            className="project-links-container">
            <a href="https://the7.io/elementor-business-one-page/2019/08/24/pellentesque-habitant-morbi-tristique/"
                className="project-details icon-without-border icon-without-hover-border"
                aria-label="Details link"><span
                    aria-hidden="true"
                    className=" icomoon-the7-font-the7-more-01"></span></a>
        </div>
    </div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/2019/08/24/pellentesque-habitant-morbi-tristique/"
            title="Pellentesque habitant morbi tristique"
            rel="bookmark">Pellentesque
            habitant morbi tristique</a>
    </h3>
    {/* <div className="entry-meta"><span
            className="category-link"><a
                href="https://the7.io/elementor-business-one-page/category/company-news/">Company
                news</a></span><a
            href="https://the7.io/elementor-business-one-page/2019/08/24/"
            title="10:52 am"
            className="data-link"
            rel="bookmark"><time
                className="entry-date updated"
                datetime="2019-08-24T10:52:11+01:00">24
                August 2019</time></a>
    </div> */}
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Pellentesque habitant morbi
            tristique senectus et netus.
            Maecenas sit amet tincidunt
            elit – habitant morbi
            tristique senectus et netus
            et malesuada fames.</p>
    </div><a
        className=" dt-btn-s dt-btn post-details details-type-btn "
        href=" https://the7.io/elementor-business-one-page/2019/08/24/pellentesque-habitant-morbi-tristique/ "
        target=""
        aria-label="Read more about Pellentesque habitant morbi tristique"
        rel="nofollow">Read more<i
            className="dt-icon-the7-arrow-03"
            aria-hidden="true"></i></a>
</div>
</article>
</div>
<div className="dt-owl-item cloned"
style={{width: '409.333px' ,marginright: '6px'}}>
<article
className="post visible post-355 type-post status-publish format-standard has-post-thumbnail hentry category-industry-news tag-business tag-demo tag-money tag-productivity tag-success tag-wordpress category-3 description-off">
<div
    className="post-thumbnail-wrap rollover-active this-ready">
    <div className="post-thumbnail"><a
            href="https://the7.io/elementor-business-one-page/2018/05/05/netus-et-malesuada-fames-nulla-from-ac-turpis-egestas/"
            className="post-thumbnail-rollover"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                className="preload-me lazy-load owl-thumb-lazy-load-show"
                src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-9-1-768x512.jpg"
                data-src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-9-1-768x512.jpg"
                data-srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-9-1-768x512.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-9-1-1152x768.jpg 1152w"
                alt="" title="img001-9"
                width="768"
                height="512" /></a>
        <div
            className="project-links-container">
            <a href="https://the7.io/elementor-business-one-page/2018/05/05/netus-et-malesuada-fames-nulla-from-ac-turpis-egestas/"
                className="project-details icon-without-border icon-without-hover-border"
                aria-label="Details link"><span
                    aria-hidden="true"
                    className=" icomoon-the7-font-the7-more-01"></span></a>
        </div>
    </div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/2018/05/05/netus-et-malesuada-fames-nulla-from-ac-turpis-egestas/"
            title="Netus et malesuada – fames nulla from ac turpis egestas"
            rel="bookmark">Netus et
            malesuada – fames nulla from
            ac turpis egestas</a></h3>
    {/* <div className="entry-meta"><span
            className="category-link"><a
                href="https://the7.io/elementor-business-one-page/category/industry-news/">Industry
                news</a></span><a
            href="https://the7.io/elementor-business-one-page/2018/05/05/"
            title="9:27 am"
            className="data-link"
            rel="bookmark"><time
                className="entry-date updated"
                datetime="2018-05-05T09:27:25+01:00">5
                May 2018</time></a>
    </div> */}
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Netus et malesuada fames ac
            turpis egestas nulla
            facilisi.Maecenas sit amet
            tincidunt elit – habitant
            morbi tristique senectus et
            netus et malesuada fames.
        </p>
    </div><a
        className=" dt-btn-s dt-btn post-details details-type-btn "
        href=" https://the7.io/elementor-business-one-page/2018/05/05/netus-et-malesuada-fames-nulla-from-ac-turpis-egestas/ "
        target=""
        aria-label="Read more about Netus et malesuada – fames nulla from ac turpis egestas"
        rel="nofollow">Read more<i
            className="dt-icon-the7-arrow-03"
            aria-hidden="true"></i></a>
</div>
</article>
</div>
<div className="dt-owl-item active"
style={{width: '409.333px', marginright: '6px'}}>
<article
className="post visible post-360 type-post status-publish format-standard has-post-thumbnail hentry category-company-news tag-business tag-demo tag-money tag-news tag-productivity tag-success tag-wordpress category-2 description-off">
<div
    className="post-thumbnail-wrap rollover-active this-ready">
    <div className="post-thumbnail"><a
            href="/Privacy"
            component={Link}
            className="post-thumbnail-rollover layzr-bg"
            target=""
            aria-label="Post image"><img
                // loading="lazy"
                // className="preload-me lazy-load owl-thumb-lazy-load-show"
                src={home1}
                data-src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-0-1-768x512.jpg"
                data-srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-0-1-768x512.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-0-1-1152x768.jpg 1152w"
                alt="" title="img001-0"
                width="768px"
                height={300} /></a>
        <div
            className="project-links-container">
            <a 
               href="/Privacy"
               component={Link}
                className="project-details icon-without-border icon-without-hover-border"
                aria-label="Details link"><span
                    aria-hidden="true"
                    className=" icomoon-the7-font-the7-more-01"></span></a>
        </div>
    </div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
              href="/Privacy"
              component={Link}
            title="Amet tincidunt elit habitant morbi tristique"
            rel="bookmark">Amet
            tincidunt elit habitant
            morbi tristique</a></h3>
    {/* <div className="entry-meta"><span
            className="category-link"><a
                href="https://the7.io/elementor-business-one-page/category/company-news/">Company
                news</a></span><a
            href="https://the7.io/elementor-business-one-page/2020/02/05/"
            title="9:34 am"
            className="data-link"
            rel="bookmark"><time
                className="entry-date updated"
                datetime="2020-02-05T09:34:57+00:00">5
                February 2020</time></a>
    </div> */}
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Senectus et netus et
            malesuada fames ac turpis
            egestas nulla facilisi.
            Maecenas sit amet tincidunt
            elit.</p>
    </div><a
        className=" dt-btn-s dt-btn post-details details-type-btn "
        href="/Privacy"
        component={Link}
        target=""
        aria-label="Read more about Amet tincidunt elit habitant morbi tristique"
        rel="nofollow">Read more<i
            className="dt-icon-the7-arrow-03"
            aria-hidden="true"></i></a>
</div>
</article>
</div>
<div className="dt-owl-item active"
style={{width: '409.333px', marginright: '6px'}}>
<article
className="post visible post-358 type-post status-publish format-standard has-post-thumbnail hentry category-company-news tag-business tag-money tag-productivity tag-success category-2 description-off">
<div
    className="post-thumbnail-wrap rollover-active this-ready">
    <div className="post-thumbnail"><a
            href="https://the7.io/elementor-business-one-page/2020/02/05/maecenas-sit-amet-tincidunt-habitant-morbi-dolor/"
            className="post-thumbnail-rollover layzr-bg"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                // className="preload-me lazy-load owl-thumb-lazy-load-show"
                src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-1-1-768x512.jpg"
                data-src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-1-1-768x512.jpg"
                data-srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-1-1-768x512.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-1-1-1152x768.jpg 1152w"
                alt="" title="img001-1"
                width="768"
                height="512" /></a>
        <div
            className="project-links-container">
            <a href="https://the7.io/elementor-business-one-page/2020/02/05/maecenas-sit-amet-tincidunt-habitant-morbi-dolor/"
                className="project-details icon-without-border icon-without-hover-border"
                aria-label="Details link"><span
                    aria-hidden="true"
                    className=" icomoon-the7-font-the7-more-01"></span></a>
        </div>
    </div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/2020/02/05/maecenas-sit-amet-tincidunt-habitant-morbi-dolor/"
            title="Maecenas sit – amet tincidunt habitant morbi dolor"
            rel="bookmark">Maecenas sit
            – amet tincidunt habitant
            morbi dolor</a></h3>
    {/* <div className="entry-meta"><span
            className="category-link"><a
                href="https://the7.io/elementor-business-one-page/category/company-news/">Company
                news</a></span><a
            href="https://the7.io/elementor-business-one-page/2020/02/05/"
            title="9:29 am"
            className="data-link"
            rel="bookmark"><time
                className="entry-date updated"
                datetime="2020-02-05T09:29:01+00:00">5
                February 2020</time></a>
    </div> */}
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Maecenas sit amet tincidunt
            elit – habitant morbi
            tristique senectus et netus
            et malesuada fames. Maecenas
            sit amet tincidunt elit.</p>
    </div><a
        className=" dt-btn-s dt-btn post-details details-type-btn "
        href=" https://the7.io/elementor-business-one-page/2020/02/05/maecenas-sit-amet-tincidunt-habitant-morbi-dolor/ "
        target=""
        aria-label="Read more about Maecenas sit – amet tincidunt habitant morbi dolor"
        rel="nofollow">Read more<i
            className="dt-icon-the7-arrow-03"
            aria-hidden="true"></i></a>
</div>
</article>
</div>
<div className="dt-owl-item active"
style={{width: '409.333px', marginRight: '6px'}}>
<article
className="post visible post-347 type-post status-publish format-standard has-post-thumbnail hentry category-industry-news tag-business tag-demo tag-money tag-news tag-wordpress category-3 description-off">
<div
    className="post-thumbnail-wrap rollover-active this-ready">
    <div className="post-thumbnail"><a
            href="https://the7.io/elementor-business-one-page/2020/02/05/nunc-ut-for-dictum-purus-lorem-vel/"
            className="post-thumbnail-rollover layzr-bg"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                // className="preload-me lazy-load owl-thumb-lazy-load-show"
                src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-2-1-768x512.jpg"
                data-src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-2-1-768x512.jpg"
                data-srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-2-1-768x512.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-2-1-1152x768.jpg 1152w"
                alt="" title="img001-2"
                width="768"
                height="512" /></a>
        <div
            className="project-links-container">
            <a href="https://the7.io/elementor-business-one-page/2020/02/05/nunc-ut-for-dictum-purus-lorem-vel/"
                className="project-details icon-without-border icon-without-hover-border"
                aria-label="Details link"><span
                    aria-hidden="true"
                    className=" icomoon-the7-font-the7-more-01"></span></a>
        </div>
    </div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/2020/02/05/nunc-ut-for-dictum-purus-lorem-vel/"
            title="Nunc ut – for dictum purus lorem vel"
            rel="bookmark">Nunc ut – for
            dictum purus lorem vel</a>
    </h3>
    {/* <div className="entry-meta"><span
            className="category-link"><a
                href="https://the7.io/elementor-business-one-page/category/industry-news/">Industry
                news</a></span><a
            href="https://the7.io/elementor-business-one-page/2020/02/05/"
            title="9:11 am"
            className="data-link"
            rel="bookmark"><time
                className="entry-date updated"
                datetime="2020-02-05T09:11:51+00:00">5
                February 2020</time></a>
    </div> */}
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Pellentesque habitant morbi
            tristique senectus et netus
            et malesuada fames ac turpis
            egestas nulla facilisi.
            Maecenas sit amet tincidunt
            elit.</p>
    </div><a
        className=" dt-btn-s dt-btn post-details details-type-btn "
        href=" https://the7.io/elementor-business-one-page/2020/02/05/nunc-ut-for-dictum-purus-lorem-vel/ "
        target=""
        aria-label="Read more about Nunc ut – for dictum purus lorem vel"
        rel="nofollow">Read more<i
            className="dt-icon-the7-arrow-03"
            aria-hidden="true"></i></a>
</div>
</article>
</div>
<div className="dt-owl-item"
style={{width: '409.333px', marginRight: '6px'}}>
<article
className="post visible post-343 type-post status-publish format-standard has-post-thumbnail hentry category-company-news tag-business tag-demo tag-money tag-news tag-wordpress category-2 description-off">
<div
    className="post-thumbnail-wrap rollover-active this-ready">
    <div className="post-thumbnail"><a
            href="https://the7.io/elementor-business-one-page/2020/02/05/pellen-lorem-tesque-habitant-morbi-tristique/"
            className="post-thumbnail-rollover layzr-bg"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                className="preload-me lazy-load owl-thumb-lazy-load-show"
                src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-5-1-768x512.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-5-1-1152x768.jpg 1152w"
                data-src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-5-1-768x512.jpg"
                data-srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-5-1-768x512.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-5-1-1152x768.jpg 1152w"
                alt="" title="img001-5"
                width={768}
                height={512} /></a>
        <div
            className="project-links-container">
            <a href="https://the7.io/elementor-business-one-page/2020/02/05/pellen-lorem-tesque-habitant-morbi-tristique/"
                className="project-details icon-without-border icon-without-hover-border"
                aria-label="Details link"><span
                    aria-hidden="true"
                    className=" icomoon-the7-font-the7-more-01"></span></a>
        </div>
    </div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/2020/02/05/pellen-lorem-tesque-habitant-morbi-tristique/"
            title="Pellen lorem: tesque habitant morbi tristique"
            rel="bookmark">Pellen lorem:
            tesque habitant morbi
            tristique</a></h3>
    {/* <div className="entry-meta"><span
            className="category-link"><a
                href="https://the7.io/elementor-business-one-page/category/company-news/">Company
                news</a></span><a
            href="https://the7.io/elementor-business-one-page/2020/02/05/"
            title="9:11 am"
            className="data-link"
            rel="bookmark"><time
                className="entry-date updated"
                datetime="2020-02-05T09:11:24+00:00">5
                February 2020</time></a>
    </div> */}
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Nunc ut – for dictum purus
            lorem vel ante ac purus
            sollicitudin dictum ipsum
            eget ex convallis. Lorem
            ipsum dolor amet volutpat.
        </p>
    </div><a
        className=" dt-btn-s dt-btn post-details details-type-btn "
        href=" https://the7.io/elementor-business-one-page/2020/02/05/pellen-lorem-tesque-habitant-morbi-tristique/ "
        target=""
        aria-label="Read more about Pellen lorem: tesque habitant morbi tristique"
        rel="nofollow">Read more<i
            className="dt-icon-the7-arrow-03"
            aria-hidden="true"></i></a>
</div>
</article>
</div>
<div className="dt-owl-item"
style={{width: '409.333px', marginRight: '6px'}}>
<article
className="post visible post-334 type-post status-publish format-standard has-post-thumbnail hentry category-industry-news category-3 description-off">
<div
    className="post-thumbnail-wrap rollover-active this-ready">
    <div className="post-thumbnail"><a
            href="https://the7.io/elementor-business-one-page/2020/02/05/lorem-ipsum-nulla-dolor/"
            className="post-thumbnail-rollover layzr-bg"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                className="preload-me lazy-load"
                src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-6-1-768x512.jpg"
                data-src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-6-1-768x512.jpg"
                data-srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-6-1-768x512.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-6-1-1152x768.jpg 1152w"
                alt="" title="img001-6"
                width="768"
                height="512" /></a>
        <div
            className="project-links-container">
            <a href="https://the7.io/elementor-business-one-page/2020/02/05/lorem-ipsum-nulla-dolor/"
                className="project-details icon-without-border icon-without-hover-border"
                aria-label="Details link"><span
                    aria-hidden="true"
                    className=" icomoon-the7-font-the7-more-01"></span></a>
        </div>
    </div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/2020/02/05/lorem-ipsum-nulla-dolor/"
            title="Lorem ipsum nulla dolor"
            rel="bookmark">Lorem ipsum
            nulla dolor</a></h3>
    {/* <div className="entry-meta"><span
            className="category-link"><a
                href="https://the7.io/elementor-business-one-page/category/industry-news/">Industry
                news</a></span><a
            href="https://the7.io/elementor-business-one-page/2020/02/05/"
            title="9:08 am"
            className="data-link"
            rel="bookmark"><time
                className="entry-date updated"
                datetime="2020-02-05T09:08:24+00:00">5
                February 2020</time></a>
    </div> */}
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Class aptent taciti sociosqu
            ad litora torquent per purus
            lorem vel ante ac purus
            sollicitudin dictum conubia
            nostra, per inceptos
            himenaeos. In vel varius
            esteu gravidmi.</p>
    </div><a
        className=" dt-btn-s dt-btn post-details details-type-btn "
        href=" https://the7.io/elementor-business-one-page/2020/02/05/lorem-ipsum-nulla-dolor/ "
        target=""
        aria-label="Read more about Lorem ipsum nulla dolor"
        rel="nofollow">Read more<i
            className="dt-icon-the7-arrow-03"
            aria-hidden="true"></i></a>
</div>
</article>
</div>
<div className="dt-owl-item"
style={{width: '409.333px', marginRight: '6px'}}>
<article
className="post visible post-1117 type-post status-publish format-standard has-post-thumbnail hentry category-company-news category-2 description-off">
<div
    className="post-thumbnail-wrap rollover-active this-ready">
    <div className="post-thumbnail"><a
            href="https://the7.io/elementor-business-one-page/2020/01/24/lorem-ipsom-habitant-morbi-tristique-senectus/"
            className="post-thumbnail-rollover layzr-bg"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                className="preload-me lazy-load"
                src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-29-1-768x512.jpg"
                data-src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-29-1-768x512.jpg"
                data-srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-29-1-768x512.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-29-1-1152x768.jpg 1152w"
                alt="" title="img001-29"
                width="768"
                height="512" /></a>
        <div
            className="project-links-container">
            <a href="https://the7.io/elementor-business-one-page/2020/01/24/lorem-ipsom-habitant-morbi-tristique-senectus/"
                className="project-details icon-without-border icon-without-hover-border"
                aria-label="Details link"><span
                    aria-hidden="true"
                    className=" icomoon-the7-font-the7-more-01"></span></a>
        </div>
    </div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/2020/01/24/lorem-ipsom-habitant-morbi-tristique-senectus/"
            title="Lorem ipsom – habitant morbi tristique senectus"
            rel="bookmark">Lorem ipsom –
            habitant morbi tristique
            senectus</a></h3>
    <div className="entry-meta"><span
            className="category-link"><a
                href="https://the7.io/elementor-business-one-page/category/company-news/">Company
                news</a></span><a
            href="https://the7.io/elementor-business-one-page/2020/01/24/"
            title="2:35 pm"
            className="data-link"
            rel="bookmark"><time
                className="entry-date updated"
                datetime="2020-01-24T14:35:22+00:00">24
                January 2020</time></a>
    </div>
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Maecenas sit amet tincidunt
            elit egestas nulla facilisi.
            Maecenas sit amet tincidunt
            elit – habitant morbi
            tristique senectus et netus
            et malesuada fames.</p>
    </div><a
        className=" dt-btn-s dt-btn post-details details-type-btn "
        href=" https://the7.io/elementor-business-one-page/2020/01/24/lorem-ipsom-habitant-morbi-tristique-senectus/ "
        target=""
        aria-label="Read more about Lorem ipsom – habitant morbi tristique senectus"
        rel="nofollow">Read more<i
            className="dt-icon-the7-arrow-03"
            aria-hidden="true"></i></a>
</div>
</article>
</div>
<div className="dt-owl-item"
style={{width: '409.333px', marginRight: '6px'}}>
<article
className="post visible post-1116 type-post status-publish format-standard has-post-thumbnail hentry category-company-news category-2 description-off">
<div
    className="post-thumbnail-wrap rollover-active this-ready">
    <div className="post-thumbnail"><a
            href="https://the7.io/elementor-business-one-page/2019/08/24/pellentesque-habitant-morbi-tristique/"
            className="post-thumbnail-rollover layzr-bg"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                className="preload-me lazy-load"
                src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/img001-8-1-768x512.jpg"
                data-src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/img001-8-1-768x512.jpg"
                data-srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/img001-8-1-768x512.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/01/img001-8-1-1152x768.jpg 1152w"
                alt="" title="img001-8"
                width="768"
                height="512" /></a>
        <div
            className="project-links-container">
            <a href="https://the7.io/elementor-business-one-page/2019/08/24/pellentesque-habitant-morbi-tristique/"
                className="project-details icon-without-border icon-without-hover-border"
                aria-label="Details link"><span
                    aria-hidden="true"
                    className=" icomoon-the7-font-the7-more-01"></span></a>
        </div>
    </div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/2019/08/24/pellentesque-habitant-morbi-tristique/"
            title="Pellentesque habitant morbi tristique"
            rel="bookmark">Pellentesque
            habitant morbi tristique</a>
    </h3>
    <div className="entry-meta"><span
            className="category-link"><a
                href="https://the7.io/elementor-business-one-page/category/company-news/">Company
                news</a></span><a
            href="https://the7.io/elementor-business-one-page/2019/08/24/"
            title="10:52 am"
            className="data-link"
            rel="bookmark"><time
                className="entry-date updated"
                datetime="2019-08-24T10:52:11+01:00">24
                August 2019</time></a>
    </div>
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Pellentesque habitant morbi
            tristique senectus et netus.
            Maecenas sit amet tincidunt
            elit – habitant morbi
            tristique senectus et netus
            et malesuada fames.</p>
    </div><a
        className=" dt-btn-s dt-btn post-details details-type-btn "
        href=" https://the7.io/elementor-business-one-page/2019/08/24/pellentesque-habitant-morbi-tristique/ "
        target=""
        aria-label="Read more about Pellentesque habitant morbi tristique"
        rel="nofollow">Read more<i
            className="dt-icon-the7-arrow-03"
            aria-hidden="true"></i></a>
</div>
</article>
</div>
<div className="dt-owl-item"
style={{width: '409.333px', marginRight: '6px'}}>
<article
className="post visible post-355 type-post status-publish format-standard has-post-thumbnail hentry category-industry-news tag-business tag-demo tag-money tag-productivity tag-success tag-wordpress category-3 description-off">
<div
    className="post-thumbnail-wrap rollover-active this-ready">
    <div className="post-thumbnail"><a
            href="https://the7.io/elementor-business-one-page/2018/05/05/netus-et-malesuada-fames-nulla-from-ac-turpis-egestas/"
            className="post-thumbnail-rollover layzr-bg"
            target=""
            aria-label="Post image " ><img
                loading="lazy"
                className="preload-me lazy-load"
                src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-9-1-768x512.jpg"
                data-src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-9-1-768x512.jpg"
                data-srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-9-1-768x512.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-9-1-1152x768.jpg 1152w"
                alt="" title="img001-9"
                width="768"
                height="512" /></a>
        <div
            className="project-links-container">
            <a href="https://the7.io/elementor-business-one-page/2018/05/05/netus-et-malesuada-fames-nulla-from-ac-turpis-egestas/"
                className="project-details icon-without-border icon-without-hover-border"
                aria-label="Details link"><span
                    aria-hidden="true"
                    className=" icomoon-the7-font-the7-more-01"></span></a>
        </div>
    </div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/2018/05/05/netus-et-malesuada-fames-nulla-from-ac-turpis-egestas/"
            title="Netus et malesuada – fames nulla from ac turpis egestas"
            rel="bookmark">Netus et
            malesuada – fames nulla from
            ac turpis egestas</a></h3>
    <div className="entry-meta"><span
            className="category-link"><a
                href="https://the7.io/elementor-business-one-page/category/industry-news/">Industry
                news</a></span><a
            href="https://the7.io/elementor-business-one-page/2018/05/05/"
            title="9:27 am"
            className="data-link"
            rel="bookmark"><time
                className="entry-date updated"
                datetime="2018-05-05T09:27:25+01:00">5
                May 2018</time></a>
    </div>
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Netus et malesuada fames ac
            turpis egestas nulla
            facilisi.Maecenas sit amet
            tincidunt elit – habitant
            morbi tristique senectus et
            netus et malesuada fames.
        </p>
    </div><a
        className=" dt-btn-s dt-btn post-details details-type-btn "
        href=" https://the7.io/elementor-business-one-page/2018/05/05/netus-et-malesuada-fames-nulla-from-ac-turpis-egestas/ "
        target=""
        aria-label="Read more about Netus et malesuada – fames nulla from ac turpis egestas"
        rel="nofollow">Read more<i
            className="dt-icon-the7-arrow-03"
            aria-hidden="true"></i></a>
</div>
</article>

</div>
<div className="dt-owl-item cloned"
style={{width: '409.333px', marginRight: '6px'}}>
<article
className="post visible post-360 type-post status-publish format-standard has-post-thumbnail hentry category-company-news tag-business tag-demo tag-money tag-news tag-productivity tag-success tag-wordpress category-2 description-off">
<div
    className="post-thumbnail-wrap rollover-active this-ready">
    <div className="post-thumbnail"><a
             href="/Privacy"
             component={Link}
            className="post-thumbnail-rollover"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                className="preload-me lazy-load"
                src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-0-1-768x512.jpg"
                data-src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-0-1-768x512.jpg"
                data-srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-0-1-768x512.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-0-1-1152x768.jpg 1152w"
                alt="" title="img001-0"
                width="768"
                height="512" /></a>
        <div
            className="project-links-container">
            <a    href="/Privacy"
            component={Link}
                className="project-details icon-without-border icon-without-hover-border"
                aria-label="Details link"><span
                    aria-hidden="true"
                    className=" icomoon-the7-font-the7-more-01"></span></a>
        </div>
    </div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
              href="/Privacy"
              component={Link}
            title="Amet tincidunt elit habitant morbi tristique"
            rel="bookmark">Amet
            tincidunt elit habitant
            morbi tristique</a></h3>
    <div className="entry-meta"><span
            className="category-link"><a
                href="https://the7.io/elementor-business-one-page/category/company-news/">Company
                news</a></span><a
            href="https://the7.io/elementor-business-one-page/2020/02/05/"
            title="9:34 am"
            className="data-link"
            rel="bookmark"><time
                className="entry-date updated"
                datetime="2020-02-05T09:34:57+00:00">5
                February 2020</time></a>
    </div>
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Senectus et netus et
            malesuada fames ac turpis
            egestas nulla facilisi.
            Maecenas sit amet tincidunt
            elit – habitant morbi
            tristique senectus et netus
            et malesuada fames. Maecenas
            sit amet tincidunt…</p>
    </div><a
        className=" dt-btn-s dt-btn post-details details-type-btn "
        href="/Privacy"
        component={Link}
        target=""
        aria-label="Read more about Amet tincidunt elit habitant morbi tristique"
        rel="nofollow">Read more<i
            className="dt-icon-the7-arrow-03"
            aria-hidden="true"></i></a>
</div>
</article>
</div>
<div className="dt-owl-item cloned"
style={{width: '409.333px' ,marginRight: '6px'}}>
<article
className="post visible post-358 type-post status-publish format-standard has-post-thumbnail hentry category-company-news tag-business tag-money tag-productivity tag-success category-2 description-off">
<div
    className="post-thumbnail-wrap rollover-active this-ready">
    <div className="post-thumbnail"><a
            href="https://the7.io/elementor-business-one-page/2020/02/05/maecenas-sit-amet-tincidunt-habitant-morbi-dolor/"
            className="post-thumbnail-rollover"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                className="preload-me lazy-load"
                src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-1-1-768x512.jpg"
                data-src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-1-1-768x512.jpg"
                data-srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-1-1-768x512.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-1-1-1152x768.jpg 1152w"
                alt="" title="img001-1"
                width="768"
                height="512" /></a>
        <div
            className="project-links-container">
            <a href="https://the7.io/elementor-business-one-page/2020/02/05/maecenas-sit-amet-tincidunt-habitant-morbi-dolor/"
                className="project-details icon-without-border icon-without-hover-border"
                aria-label="Details link"><span
                    aria-hidden="true"
                    className=" icomoon-the7-font-the7-more-01"></span></a>
        </div>
    </div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/2020/02/05/maecenas-sit-amet-tincidunt-habitant-morbi-dolor/"
            title="Maecenas sit – amet tincidunt habitant morbi dolor"
            rel="bookmark">Maecenas sit
            – amet tincidunt habitant
            morbi dolor</a></h3>
    <div className="entry-meta"><span
            className="category-link"><a
                href="https://the7.io/elementor-business-one-page/category/company-news/">Company
                news</a></span><a
            href="https://the7.io/elementor-business-one-page/2020/02/05/"
            title="9:29 am"
            className="data-link"
            rel="bookmark"><time
                className="entry-date updated"
                datetime="2020-02-05T09:29:01+00:00">5
                February 2020</time></a>
    </div>
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Maecenas sit amet tincidunt
            elit – habitant morbi
            tristique senectus et netus
            et malesuada fames. Maecenas
            sit amet tincidunt elit.</p>
    </div><a
        className=" dt-btn-s dt-btn post-details details-type-btn "
        href=" https://the7.io/elementor-business-one-page/2020/02/05/maecenas-sit-amet-tincidunt-habitant-morbi-dolor/ "
        target=""
        aria-label="Read more about Maecenas sit – amet tincidunt habitant morbi dolor"
        rel="nofollow">Read more<i
            className="dt-icon-the7-arrow-03"
            aria-hidden="true"></i></a>
</div>
</article>
</div>
<div className="dt-owl-item cloned"
style={{width: '409.333px', marginright: '6px'}}>
<article
className="post visible post-347 type-post status-publish format-standard has-post-thumbnail hentry category-industry-news tag-business tag-demo tag-money tag-news tag-wordpress category-3 description-off">
<div
    className="post-thumbnail-wrap rollover-active this-ready">
    <div className="post-thumbnail"><a
            href="https://the7.io/elementor-business-one-page/2020/02/05/nunc-ut-for-dictum-purus-lorem-vel/"
            className="post-thumbnail-rollover"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                className="preload-me lazy-load"
                src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-2-1-768x512.jpg"
                data-src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-2-1-768x512.jpg"
                data-srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-2-1-768x512.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-2-1-1152x768.jpg 1152w"
                alt="" title="img001-2"
                width="768"
                height="512" /></a>
        <div
            className="project-links-container">
            <a href="https://the7.io/elementor-business-one-page/2020/02/05/nunc-ut-for-dictum-purus-lorem-vel/"
                className="project-details icon-without-border icon-without-hover-border"
                aria-label="Details link"><span
                    aria-hidden="true"
                    className=" icomoon-the7-font-the7-more-01"></span></a>
        </div>
    </div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/2020/02/05/nunc-ut-for-dictum-purus-lorem-vel/"
            title="Nunc ut – for dictum purus lorem vel"
            rel="bookmark">Nunc ut – for
            dictum purus lorem vel</a>
    </h3>
    <div className="entry-meta"><span
            className="category-link"><a
                href="https://the7.io/elementor-business-one-page/category/industry-news/">Industry
                news</a></span><a
            href="https://the7.io/elementor-business-one-page/2020/02/05/"
            title="9:11 am"
            className="data-link"
            rel="bookmark"><time
                className="entry-date updated"
                datetime="2020-02-05T09:11:51+00:00">5
                February 2020</time></a>
    </div>
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Pellentesque habitant morbi
            tristique senectus et netus
            et malesuada fames ac turpis
            egestas nulla facilisi.
            Maecenas sit amet tincidunt
            elit.</p>
    </div><a
        className=" dt-btn-s dt-btn post-details details-type-btn "
        href=" https://the7.io/elementor-business-one-page/2020/02/05/nunc-ut-for-dictum-purus-lorem-vel/ "
        target=""
        aria-label="Read more about Nunc ut – for dictum purus lorem vel"
        rel="nofollow">Read more<i
            className="dt-icon-the7-arrow-03"
            aria-hidden="true"></i></a>
</div>
</article>
</div>
<div className="dt-owl-item cloned"
style={{width: '409.333px' ,marginright: '6px'}}>
<article
className="post visible post-343 type-post status-publish format-standard has-post-thumbnail hentry category-company-news tag-business tag-demo tag-money tag-news tag-wordpress category-2 description-off">
<div
    className="post-thumbnail-wrap rollover-active this-ready">
    <div className="post-thumbnail"><a
            href="https://the7.io/elementor-business-one-page/2020/02/05/pellen-lorem-tesque-habitant-morbi-tristique/"
            className="post-thumbnail-rollover"
            target=""
            aria-label="Post image"><img
                loading="lazy"
                className="preload-me lazy-load"
                src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-5-1-768x512.jpg"
                data-src="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-5-1-768x512.jpg"
                data-srcset="https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-5-1-768x512.jpg 768w, https://the7.io/elementor-business-one-page/wp-content/uploads/sites/63/2020/02/img001-5-1-1152x768.jpg 1152w"
                alt="" title="img001-5"
                width="768"
                height="512" /></a>
        <div
            className="project-links-container">
            <a href="https://the7.io/elementor-business-one-page/2020/02/05/pellen-lorem-tesque-habitant-morbi-tristique/"
                className="project-details icon-without-border icon-without-hover-border"
                aria-label="Details link"><span
                    aria-hidden="true"
                    className=" icomoon-the7-font-the7-more-01"></span></a>
        </div>
    </div>
</div>
<div className="post-entry-content">
    <h3 className="entry-title h4-size"><a
            href="https://the7.io/elementor-business-one-page/2020/02/05/pellen-lorem-tesque-habitant-morbi-tristique/"
            title="Pellen lorem: tesque habitant morbi tristique"
            rel="bookmark">Pellen lorem:
            tesque habitant morbi
            tristique</a></h3>
    <div className="entry-meta"><span
            className="category-link"><a
                href="https://the7.io/elementor-business-one-page/category/company-news/">Company
                news</a></span><a
            href="https://the7.io/elementor-business-one-page/2020/02/05/"
            title="9:11 am"
            className="data-link"
            rel="bookmark"><time
                className="entry-date updated"
                datetime="2020-02-05T09:11:24+00:00">5
                February 2020</time></a>
    </div>
    <div className="entry-excerpt">
        <p style={{color:'black'}}>Nunc ut – for dictum purus
            lorem vel ante ac purus
            sollicitudin dictum ipsum
            eget ex convallis. Lorem
            ipsum dolor amet volutpat.
        </p>
    </div><a
        className=" dt-btn-s dt-btn post-details details-type-btn "
        href=" https://the7.io/elementor-business-one-page/2020/02/05/pellen-lorem-tesque-habitant-morbi-tristique/ "
        target=""
        aria-label="Read more about Pellen lorem: tesque habitant morbi tristique"
        rel="nofollow">Read more<i
            className="dt-icon-the7-arrow-03"
            aria-hidden="true"></i></a>
</div>
</article>
</div>
</div>
</div>
{/* <div className="owl-nav"><a className="owl-prev"><i
className=" icomoon-the7-font-the7-arrow-28"></i></a><a
className="owl-next"><i
className=" icomoon-the7-font-the7-arrow-29"></i></a>
</div> */}
<div className="owl-dots disabled"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section
className="elementor-section elementor-top-section elementor-element elementor-element-0a4af7f elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
data-id="0a4af7f" data-element_type="section" id="contact"
data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_background&quot;:&quot;classic&quot;}"
style={{width: '1349px', left: '-24.5px'}}>
<div className="elementor-background-overlay"></div>
<div className="elementor-container elementor-column-gap-wider">
<div className="elementor-row">
<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-9fbec87"
data-id="9fbec87" data-element_type="column"
data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<section
className="elementor-section elementor-inner-section elementor-element elementor-element-878e362 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
data-id="878e362" data-element_type="section"
data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
<div className="elementor-container elementor-column-gap-wider">
<div className="elementor-row">
<div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-0ec1f02"
data-id="0ec1f02" data-element_type="column">
<div
className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-2c67bd8 elementor-widget elementor-widget-heading"
data-id="2c67bd8"
data-element_type="widget"
data-widget_type="heading.default">
<div className="elementor-widget-container">
    <h2
        className="elementor-heading-title elementor-size-default">
        Get in touch</h2>
</div>
</div>
<div className="elementor-element elementor-element-2deccd9 elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
data-id="2deccd9"
data-element_type="widget"
data-widget_type="divider.default">
<div className="elementor-widget-container">
    <div className="elementor-divider">
        <span
            className="elementor-divider-separator">
        </span></div>
</div>
</div>
<div className="elementor-element elementor-element-0aa0f45 elementor-widget elementor-widget-text-editor"
data-id="0aa0f45"
data-element_type="widget"
data-widget_type="text-editor.default">
<div className="elementor-widget-container">
    <div
        className="elementor-text-editor elementor-clearfix">
        <h4>Hey! We are looking forward
            to start a project with you!
        </h4>
        <p style={{color:'black'}}>Etiam sit amet convallis erat
            – class aptent taciti
            sociosqu ad litora torquent
            per conubia! Maecenas
            gravida lacus. Lorem e<span
                style={{wordSpacing: 'normal',whiteSpace: 'pre-wrap'}}>tiam
                sit amet convallis
                erat.</span></p>
        <p style={{color:'black'}}><span
                 style={{wordSpacing: 'normal',whiteSpace: 'pre-wrap'}}>Lorem
                ipsum amet!</span></p>
    </div>
</div>
</div>
<div className="elementor-element elementor-element-372ee70 elementor-shape-rounded elementor-grid-0 elementor-widget elementor-widget-social-icons"
data-id="372ee70"
data-element_type="widget"
data-widget_type="social-icons.default">
<div className="elementor-widget-container">
    <div
        className="elementor-social-icons-wrapper elementor-grid">
        <div
            className="elementor-grid-item">
            <a className="elementor-icon elementor-social-icon elementor-social-icon-facebook elementor-repeater-item-1a7b77f"
                target="_blank"> <span
                    className="elementor-screen-only">Facebook</span>
                <i
                    className="fab fa-facebook"></i>
            </a></div>
        <div
            className="elementor-grid-item">
            <a className="elementor-icon elementor-social-icon elementor-social-icon-behance elementor-repeater-item-009e7ab"
                target="_blank"> <span
                    className="elementor-screen-only">Behance</span>
                <i
                    className="fab fa-behance"></i>
            </a></div>
        <div
            className="elementor-grid-item">
            <a className="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-repeater-item-9c9593a"
                target="_blank"> <span
                    className="elementor-screen-only">Twitter</span>
                <i
                    className="fab fa-twitter"></i>
            </a></div>
        <div
            className="elementor-grid-item">
            <a className="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-1a8f146"
                target="_blank"> <span
                    className="elementor-screen-only">Instagram</span>
                <i
                    className="fab fa-instagram"></i>
            </a></div>
    </div>
</div>
</div>
</div>
</div>
</div>
<div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-fffe2f2"
data-id="fffe2f2" data-element_type="column">
<div
className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-d6a490d elementor-position-left elementor-view-stacked elementor-shape-square elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
data-id="d6a490d"
data-element_type="widget"
data-widget_type="icon-box.default">
<div className="elementor-widget-container" style={{marginTop:20}}>
    <div
        className="elementor-icon-box-wrapper">
        <div
            className="elementor-icon-box-icon">
            <span
                className="elementor-icon elementor-animation-">
                <i aria-hidden="true"
                    className=" icomoon-the7-font-the7-phone-06"></i>
            </span></div>
        <div
            className="elementor-icon-box-content">
            <h3
                className="elementor-icon-box-title">
                <span>Call us</span>
            </h3>
            <p className="elementor-icon-box-description">
                1 (234) 567-891<br />1(234) 987-654</p>
        </div>
    </div>
</div>
</div>
<div className="elementor-element elementor-element-7ebf889 elementor-position-left elementor-view-stacked elementor-shape-square elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
data-id="7ebf889"
data-element_type="widget"
data-widget_type="icon-box.default">
<div className="elementor-widget-container">
    <div
        className="elementor-icon-box-wrapper">
        <div
            className="elementor-icon-box-icon">
            <span
                className="elementor-icon elementor-animation-">
                <i aria-hidden="true"
                    className=" icomoon-the7-font-the7-map-02"></i>
            </span></div>
        <div
            className="elementor-icon-box-content">
            <h3
                className="elementor-icon-box-title">
                <span>Location</span>
            </h3>
            <p
                className="elementor-icon-box-description">
                121 Rock Sreet, 21
                Avenue,<br />New York, NY
                92103-9000</p>
        </div>
    </div>
</div>
</div>
<div className="elementor-element elementor-element-2c98696 elementor-position-left elementor-view-stacked elementor-shape-square elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
data-id="2c98696"
data-element_type="widget"
data-widget_type="icon-box.default">
<div className="elementor-widget-container">
    <div
        className="elementor-icon-box-wrapper">
        <div
            className="elementor-icon-box-icon">
            <span
                className="elementor-icon elementor-animation-">
                <i aria-hidden="true"
                    className=" icomoon-the7-font-the7-mail-01"></i>
            </span></div>
        <div
            className="elementor-icon-box-content">
            <h3
                className="elementor-icon-box-title">
                <span>Mail</span></h3>
            <p
                className="elementor-icon-box-description">
                hello@dream-theme.com
            </p>
        </div>
    </div>
</div>
</div>
{/* <div className="elementor-element elementor-element-87bf895 elementor-position-left elementor-view-stacked elementor-shape-square elementor-vertical-align-top elementor-widget elementor-widget-icon-box"
data-id="87bf895"
data-element_type="widget"
data-widget_type="icon-box.default">
<div className="elementor-widget-container">
    <div
        className="elementor-icon-box-wrapper">
        <div
            className="elementor-icon-box-icon">
            <span
                className="elementor-icon elementor-animation-">
                <i aria-hidden="true"
                    className=" icomoon-the7-font-the7-clock-00"></i>
            </span></div>
        <div
            className="elementor-icon-box-content">
            <h3
                className="elementor-icon-box-title">
                <span>Business
                    hours</span></h3>
            <p
                className="elementor-icon-box-description">
                Mon – Fri …… 10 am – 8
                pm<br />Sat, Sun ....…
                Closed</p>
        </div>
    </div>
</div>
</div> */}
</div>
</div>
</div>
<div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-5bf5329"
data-id="5bf5329" data-element_type="column">
<div
className="elementor-column-wrap elementor-element-populated">
<div className="elementor-widget-wrap">
<div className="elementor-element elementor-element-16799ff elementor-widget elementor-widget-shortcode"
data-id="16799ff"
data-element_type="widget"
data-widget_type="shortcode.default">
<div className="elementor-widget-container">
    <div className="elementor-shortcode">
        <div role="form" className="wpcf7"
            id="wpcf7-f86-p14-o2"
            lang="en-US" dir="ltr">
            <div className="screen-reader-response"
                role="alert"
                aria-live="polite">
            </div>
            <form
                action="/elementor-business-one-page/#wpcf7-f86-p14-o2"
                method="post"
                className="wpcf7-form init"
                novalidate="novalidate">
                <div
                   style={{display: 'none'}}>
                    <input type="hidden"
                        name="_wpcf7"
                        value="86" />
                    <input type="hidden"
                        name="_wpcf7_version"
                        value="5.2.2" />
                    <input type="hidden"
                        name="_wpcf7_locale"
                        value="en_US" />
                    <input type="hidden"
                        name="_wpcf7_unit_tag"
                        value="wpcf7-f86-p14-o2" />
                    <input type="hidden"
                        name="_wpcf7_container_post"
                        value="14" />
                    <input type="hidden"
                        name="_wpcf7_posted_data_hash"
                        value="" /></div>
                <p style={{color:'black'}}><label>Name*<br />
                        <span
                            className="wpcf7-form-control-wrap your-name"><input
                                type="text"
                                name="your-name"
                                value=""
                                size="40"
                                className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                aria-required="true"
                                aria-invalid="false" /></span>
                    </label><br /><label>
                        Email*<br /> <span
                            className="wpcf7-form-control-wrap your-email"><input
                                type="email"
                                name="your-email"
                                value=""
                                size="40"
                                className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                                aria-required="true"
                                aria-invalid="false" /></span>
                    </label><br /><label>
                        Telephone*<br />
                        <span
                            className="wpcf7-form-control-wrap your-telephone"><input
                                type="tel"
                                name="your-telephone"
                                value=""
                                size="40"
                                className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel"
                                aria-required="true"
                                aria-invalid="false" /></span>
                    </label><br /> <label>
                        Message<br />
                        <span
                            className="wpcf7-form-control-wrap your-message"><textarea
                                name="your-message"
                                cols="40"
                                rows="4"
                                className="wpcf7-form-control wpcf7-textarea"
                                aria-invalid="false" ></textarea></span>
                    </label></p>
                <p style={{color:'black'}}><input type="submit"
                        value="Send message"
                        className="wpcf7-form-control wpcf7-submit" /><span
                        className="ajax-loader" ></span>
                </p>
                <div className="wpcf7-response-output"
                    role="alert"
                    aria-hidden="true">
                </div>
            </form>
        </div>
    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<Footer />
        </div>
        

    )
}