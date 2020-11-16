import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Prism from 'prismjs';
import 'prismjs/components/prism-bash';


class Overview extends Component {

  constructor(props) {
    super(props);
    this.getScrollAnimationHeader = this.getScrollAnimationHeader.bind(this);
    // this.getScrollAnimationLink = this.getScrollAnimationLink.bind(this);
  }

  getScrollAnimationHeader() {
    return (<ScrollAnimation animateIn="zoomIn" animateOut="zoomOut">
       <img src={this.props.img} alt="" style={{width:this.props.width,height:this.props.heigh,objectFit:'contain'}} />
      </ScrollAnimation>)
  }

//   getScrollAnimationLink() {
//     return (<ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
        
//         </ScrollAnimation>)
//   }

  render() {

  console.log(this.props)

    return (
      <div className="page">
        <div>
          {this.getScrollAnimationHeader()}
          {/* {this.getScrollAnimationLink()} */}
        </div>
     
      </div>
    );
  }
}

export default Overview;