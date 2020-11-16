import React from 'react';
import Cardd from '../../assets/img/BrushedBlack-350x217.png';
import Favicon from '../../assets/img/Border 4 AMex style-350x217.png';
import mergeImages from 'merge-images';
const fs = require('fs');
const { createCanvas, loadImage } = require('canvas')



export default function Card(){
   const[img,setImg] =React.useState('');
//     React.useEffect(()=>{
//        const embedImages=async()=>{
//         const canvas =await  createCanvas(1000, 1000)
// const ctx = canvas.getContext('2d')

// // ctx.font = '10px Impact'
// // ctx.fillStyle='red'
// // ctx.fillText('Awesome!', 30,20);
// //         mergeImages([ { src: Cardd, x: 0, y: 0 },
// //         { src: Favicon, x: 32, y: 0 },])
// //   .then(b64 => makeImage(b64));


//   await mergeImages([
//     { src: Cardd, x: 0, y: 0 },
//     { src:Favicon, x: 0, y: 0 },
   
//   ])
//     .then(b64 =>
//     loadImage(b64).then(async(image) => {
    
//         ctx.drawImage(image, 0, 0, 800, 500)
        
//     ctx.font = '50px Impact'
//     ctx.fillStyle='red'
//     ctx.fillText('Awesome!', 180,150);
//        await setImg( canvas.toDataURL())
//         // console.log('<img src="' + canvas.toDataURL() + '" />')
//       })
//     )
// }
// embedImages();
//     },[])

    // const makeImage=async(data)=>{
    //     fs.writeFileSync('cool.png',data)

    // }
    // const[inputText,setInputText]=React.useState('');
    // const [image,setImage]=React.useState('');
    // function cc_format(value) {
    //     var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    //     var matches = v.match(/\d{4,16}/g);
    //     var match = matches && matches[0] || ''
    //     var parts = [];
    //     var len=0;
    
    //     for (var i=0, len=match.length; i<len; i+=4) {
    //         parts.push(match.substring(i, i+4))
    //     }
    
    //     if (parts.length) {
    //      setInputText( parts.join(' '))
    //     } else {
    //         setInputText( value)
    //     }
    // }
    return(
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
         {/* <div style={{backgroundImage: `url(${Cardd})`,backgroundSize:'100%',width:350,height:217,backgroundRepeat:'no-repeat'}}>
    <text style={{position:'absolute',top:200}}>{inputText}</text>
            
             
                <div style={{marginTop:10}}>
               
                </div>
             
              </div>
              <input type="number" onInput={(e) => e.target.value = e.target.value.slice(0, 16)}  onChange={(event)=>cc_format(event.target.value)} maxLength={20} />
              <button onClick={()=>setImage(Favicon)} >change logo</button> */}
               {/* {img!=''? <img src={img} style={{width:'20%',objectFit:'contain'}} />:null}
               <img src={Cardd} /> */}
        </div>

    )
} 