import React from 'react'

const MenuCart = ({ menuData }) => {
  //console.log(menuData);  
  return (
    <>
      <section className='main-card--cointainer'>
        {menuData.map((currElem) => {

          // destructering
          const{id, name, category, image, description} = currElem;
          
          return (
            <React.Fragment key={id}>
              <div className='card-container'>
                  <div className='card'>
                      <div className='card-body'>
                          <span className='card-number card-circle subtle'>
                            {id}
                          </span>
                          <span className='card-author subtle'>{name}</span>
                          <h2 className='card-title'> {name} </h2>
                          <span className='card-description subtle'>
                            {description}
                          </span>
                          <div className='card-read'>Read</div>
                      </div>
                      <img src={image} alt="images" className='card-media' />

                      <span className='card-tag subtle'>Order Now</span>
                  </div>
              </div> 
            </React.Fragment>
          )
        })} 
      </section>
    </>
  )
}

export default MenuCart;

