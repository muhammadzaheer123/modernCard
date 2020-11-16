import React from 'react';
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {faCopy} from "@fortawesome/free-solid-svg-icons";
import { faFacebook,faGooglePlus,faInstagram,faLinkedin,faTwitter,faWhatsapp } from '@fortawesome/free-brands-svg-icons';
export default function Footer(){
    return(
      
<footer id="footer">
<div className="footer-top">

<div className="container">
<div className="row">
<div className="col-lg-3 col-md-6 footer-info">
<h3 style={{fontSize:'24px',color:'white'}}>DTModernTech</h3>
            <p>Primary products like software technologies, distributions and software products can be made with experienced staff which give unique benefits to company. DT Modern Tech covers almost all specialized skills like development, marketing, graphic designing etc.</p>
         </div>
<div className="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="ion-ios-arrow-right"></i><a href="#">Home</a></li>
              <li><i className="ion-ios-arrow-right"></i><a href="#">About us</a></li>
              <li><i className="ion-ios-arrow-right"></i><a href="#">Services</a></li>
              <li><i className="ion-ios-arrow-right"></i><a href="#">Terms of service</a></li>
              <li><i className="ion-ios-arrow-right"></i><a href="#">Privacy policy</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 footer-contact">
            <h4>Contact Us</h4>
            <p>
              <strong>Address:</strong>
              700 Harvest Park Suite E-1<br />
              Brentwood California 94513 <br />
              <strong>Phone:</strong> +1(650) 680-6233<br />
              <strong>Email:</strong> info@dtmoderntech.com<br />
            </p>

          </div>
          <div className="col-lg-3 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>To review offers and services provided by us, stay tuned and connected.</p>
            <form action="" method="post">
              <input type="email" name="email" /><input type="submit" value="Subscribe" />
            </form>
            <div className="social-links" style={{paddingTop:23}}>
              <a href="#" className="twitter"><i><FontAwesomeIcon icon={faTwitter} style={{width:30}} /></i></a>
              <a href="https://www.facebook.com/BusinessSolutionDtmoderntech" className="facebook">
                  <i><FontAwesomeIcon icon={faFacebook} style={{width:30}} /></i></a>
              <a href="https://www.instagram.com/dt_modern_tech/" className="instagram">
                  <i><FontAwesomeIcon icon={faGooglePlus} style={{width:30}} /></i></a>
              <a href="#" className="google-plus">
                  <i><FontAwesomeIcon icon={faInstagram} style={{width:30}} /></i></a>
              <a href="https://www.linkedin.com/company/67965849" className="linkedin">
                  <i><FontAwesomeIcon icon={faLinkedin} style={{width:30}} /></i></a>
            </div>
            </div>
            </div>
          </div>  
    </div>
    <hr style={{backgroundColor:'aliceblue'}} className="hr-hidden" />
    <div className="container  footer-hidden">
      <div className="copyright">
        © Copyright <strong>DTModernTech</strong>. All Rights Reserved
      </div>
    </div>
    <a href="https://wa.me/+16506806233" style={{paddingLeft:20,paddingTop:90}} target="_blank">
    <i className="fa fa-whatsapp my-float"><FontAwesomeIcon icon={faWhatsapp} style={{width:50,height:50,color:'green'}} /></i>
    </a>
    {/* <div className="navbar d-lg-none d-xl-none">
      <a href="https://wa.me/+16506806233"><i className="fa fa-whatsapp" style={{fontSize:24}}></i></a> 
      <a href="tel:+92423577837"><i className="fa fa-phone" style={{fontSize:24}}></i></a> 
      <a href="#"><i className="fa fa-comment" style={{fontSize:24}}></i></a> 
      <a href="#"><i className="fa fa-fw fa-user" style={{fontSize:24}}></i> </a>
    </div> */}
  </footer>

    )
}