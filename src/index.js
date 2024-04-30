import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import Heading from './Heading';
import paragraph from './Para';




//components in react

ReactDOM.render(

    <>
        <Heading />
        <paragraph />
        <h1> hello</h1>
    </>,
    document.getElementById('root')
);















// mini project for greetings 

// const heading ={
//     color : "blue",
//     textAlign : "center"
// }
  
// const cssStyle = {};
// const date=new Date(2023, 5, 5, 15);

// const date=new Date();
// const currdate= date.getHours();
// let greetings = '';

// if(currdate >= 1 && currdate <= 11){
//     greetings = 'good morning';
//     cssStyle.color = 'yellow'
// } 
// else if( currdate >= 12 && currdate <= 19){
//     greetings = 'good afternoon';
//     cssStyle.color = 'red';
// }
// else{
//     greetings = 'good night';
//     cssStyle.color = 'black';
// }
   

// ReactDOM.render(    
//     <>
//     <div>

 
//         <h1 style={heading}>Hello sir, <span style={cssStyle}> {greetings} </span></h1>
//         </div> 
//     </>,
   
//     document.getElementById('root')
    
// );



















// inline css & internal CSS

// const heading= {
//     textAlign : "center",
//     color : "red"
// }

// ReactDOM.render(

//     <>
//     <h1 style={heading}> this is me</h1>


//     </>,
//     document.getElementById('root')

// );










//jsx Attributes

// const img="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvam9iNjgwLTE2Ni1wLWwxZGJ1cTN2LnBuZw.png";
// const img1="https://png.pngtree.com/element_our/png/20181129/vector-illustration-of-fresh-red-apple-with-single-leaf-png_248312.jpg";
// const img2="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/640px-PNG_transparency_demonstration_1.png";
// const links="https://www.google.com/"

// ReactDOM.render(
//   <>
//    <h1 className='heading'>My name is roli</h1>
//     <div className='img-div'>
//   <img src={img} alt="apple image" />
//   <img src= {img1} />
// <a href= {links} >
//     <img src={img2} />
// </a>
//  </div>
   
//     </>,
//   document.getElementById("root")
// );


//ASSIGNMENT 

// const name="roli";
// const currdate = new Date().toLocaleDateString();
// const currtime = new Date().toLocaleTimeString();

// ReactDOM.render(

//   <>

//     <h1>Hello, My name is {name}</h1>
//     <p>todays date is {currdate}</p>
//     <p>current Time is {currtime}</p>
//   </>,
//   document.getElementById("root")
// );





//template literals

// const name="rooli ";
// const surname="singh"
// ReactDOM.render(
//   <h1>{ `my name is ${name} ${surname}`  }</h1>,
//   document.getElementById("root")
// )




// JSX Expression {}  if you want to write js code in html tag just write {}

// const name="Roli singh";
// ReactDOM.render(
//   <>
//   <h1>My name is {name}</h1>
//   <p>two plus two is equal to {2+2}</p>
//   </>,
//   document.getElementById("root")
// )











//multiple elements 

// ReactDOM.render(
//   <>

//   <h1>hello world!</h1>
//     <p>Top 2 Web Series</p>

//     <ol>
//       <li>Asur</li>
//       <li>Scam 1992</li>
//       <li>india</li>
//     </ol>
//     </>,
//     document.getElementById("root")
// )




