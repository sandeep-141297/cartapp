import React, { useState } from 'react';
import "./style.css";
import Menu from "./menuApi.js";
import MenuCart from './menuCart.js';
import NavBar from './navBar.js';

const uniqueList = [
  ...new Set(
    Menu.map((currElement) => {
      return currElement.category;
    })
  ), 
  "All",
];


const Resturant = () => {
  const[menuData, setMenuData] = useState(Menu);
  const[menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {

    if(category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((currElem) => {
      return currElem.category === category;
    });

    setMenuData(updatedList);
  };
  
  return (
    <>
      <NavBar filterItem={filterItem} menuList={menuList}/>
      <MenuCart menuData={menuData}/>  
    </>
  )
}

export default Resturant;

























////////////////////////////useState hooks/////////////////////////
// import React, { useState } from 'react';
// import React from 'react';
// const Resturant = () => {
//   // const[menuda, menuData] = React.useState(Menu);
//   const[menuData, setMenuData] = useState(Menu);
//   console.log(menuData);
//   return (
//     <>
//        <div className='card-container'>
//             <div className='card'>
//                 <div className='card-body'>
//                 </div>
//                 <span className='card-tag subtle'>Order Now</span>
//             </div>
//        </div>
//     </>
//   )
// }


////////////////////////////images access method//////////////////////////
// const Resturant = () => {
//   return (
//     <>
//        <div className='card-container'>
//             <div className='card'>
//                 <div className='card-body'>
//                     <span className='card-number card-circle subtle'>1</span>
//                     <span className='card-author subtle'>Breakfast</span>
//                     <h2 className='card-title'> Maggi </h2>
//                     <span className='card-description subtle'>
//                       I love maggi realy oo yues Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
//                     </span>
//                     <div className='card-read'>Read</div>
//                 </div>
//                 <img src="https://lh3.googleusercontent.com/IobowV956XhCBa4i4DVDaWqQHbyTaA6_y9L8dpH5eixFdl4tOId9ZgkyTrBAVVuJ-kFIeMRjwih_7KCNAOsDWwOMeQ=w1000" alt="images" className='card-media' />
//                 {/* <img src={image} alt="images" className='card-media' /> */}

//                 <span className='card-tag subtle'>Order Now</span>
//             </div>
//        </div>
//     </>
//   )
// }


/////////////////// inline css ////////////////////////////
// const Resturant = () => {
//   return (
//     <>
//        <div className='card-container'>
//             <div className='card'>
//                 <div className='card-body'>
//                     <span className='card-number card-circle subtle'>
//                         1
//                     </span>

//                     {/* inline css format react (javascript based {} and object code css and object write in {}*/}
//                     {/* <span className='card-author subtle' style={{color: "red"}}>Breakfast</span> */}
//                 </div>
//             </div>
//        </div>
//     </>
//   )
// }

//////////////////////// internal css ////////////////////////////
// const Resturant = () => {
//   // const styles/myStyle is a object
//   const styles = {
//     container: {
//       backgroundColor: 'lightblue',
//       padding: '20px',
//       borderRadius: '5px',
//     },
//     heading: {
//       color: 'green',
//       fontSize: '24px',
//     },
//     paragraph: {
//       color: 'black',
//       fontSize: '16px',
//     }
//   };

//   const myStyle = { color: "red"};

//   return (
//     <>
//        <div className='card-container'>
//             <div className='card'>
//                 <div className='card-body'>
//                     <span className='card-number card-circle subtle'>
//                         1
//                     </span>
//                     <span className='card-author subtle' style={myStyle}>Breakfast</span>
//                 </div>
//             </div>
//        </div>
//        <div style={styles.container}>
//         <h1 style={styles.heading}>Welcome to My React Component</h1>
//         <p style={styles.paragraph}>This is an example of using internal CSS in React.</p>
//       </div>
//     </>
//   )
// }

// export default Resturant;


//////////////////////////////////////////////////////////////////////
//export { Resturant }; // Use named export

// export const Resturant = () => {
//     return (
//         <>
//             <h1>
//                 Hello output
//             </h1>
//         </>
//     )
// }