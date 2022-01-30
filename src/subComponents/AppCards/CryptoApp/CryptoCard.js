import React, {useState, useEffect, useRef} from 'react'
import Button from '../../hoverbutton'
import { Flip, gsap } from 'gsap/all'
import "./index.css"



const CryptoCard = ({logo, svg, primary_color, secondary_color, detailsHandle, expanded, MainBox}) => {

  	const DetailsChange = () => {
		const oldContainer = document.querySelector('.expanded_green');
		const state = Flip.getState(oldContainer);
    if (expanded === false) {
    gsap.to(oldContainer, {
        borderRadius: "70px",
        borderRadius: "60px",
        borderRadius: "50px",
        borderRadius: "40px",
        borderRadius: "30px",
        borderRadius: "20px",
        borderRadius: "10px",
        borderRadius: "5px",
        borderRadius: "0px",
      });
		gsap.set(oldContainer, {
        position: 'absolute', 
        opacity: 1,
        width: "100vw", 
        height: "100vh", 
        // marginRight: "80%",
        zIndex: '4',
      });

      Flip.from(state, {
        duration: 1,
        nested: true,
        ease: "power1.inOut",
        absolute: true,
        });
        detailsHandle()

     } else {

      gsap.set(oldContainer, {
          width: "calc(1rem + 15vw)",
          height: "calc(1rem + 15vw)",
          borderRadius: "70px",
          zIndex: '4',
      });
      

      Flip.from(state, {
        duration: 1,
        nested: true,
        ease: "power1.inOut",
        absolute: true,
        onComplete: () => gsap.set(oldContainer, {opacity: "0", zIndex: "-1"})
        });
        detailsHandle()
     }
	}

  const backstyle = {
    backgroundImage: `linear-gradient(to bottom left, ${primary_color} 40%, ${secondary_color} 115%)`
  }
  
  return (
      <div class="main_container">
                      <div class='expanded_green' style={backstyle}>
                          {expanded ? 

                          <div className='button_close'> 
                            <Button text="CLOSE TEST" fun={DetailsChange}/> 
                          </div>
                            : null}


                      </div>
                      { expanded ? null : 
                        <div class="container">
                            <div class="card">
                                <div class="front">
                                    <img src={logo} alt="logo" className="logo"></img>
                                </div>
                                <div class="back" style={backstyle}>
                                  <img src={svg} alt="" class="pp"  />
                                  <Button text="See More" fun={DetailsChange}/>
                                </div>
                            </div>
                        </div>
                      }
{/* 
                  <div className="titleContainer">
                    <div className="underline"></div>
                    <h2 className="title_text">Test</h2>
                    <h2 className="title_text_bigger">Test</h2>
                  </div> */}
                  
                      
      </div>

            

            


  )
}

export default CryptoCard;




















        
        
        
        
        