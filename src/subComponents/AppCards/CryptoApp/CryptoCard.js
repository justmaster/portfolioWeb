import React, {useState, useEffect, useRef} from 'react'
import Button from '../../hoverbutton'
import { Flip, gsap } from 'gsap/all'
import "./index.css"



const CryptoCard = ({logo, svg, primary_color, secondary_color, detailsHandle, activeCard, toggleDetails}) => {

  useEffect(() => {
    activeCard === "crypto" 
    ?
    ExpandCard()
    :
    console.log("notactivecrypto")
  }, [activeCard]);
  
      const ExpandCard = () => {
          activeCard === "crypto" 
          ? 
          DetailsChange() 
          : 
          toggleDetails()
        console.log(activeCard)
      }


      const DetailsChange = async() => {

        const oldContainer = document.querySelector('.expanded_green');
        const state = Flip.getState(oldContainer);
        gsap.to(oldContainer, {
            borderRadius: "10px",
            borderRadius: "0px",
            delay: 0.5,
          });
        gsap.set(oldContainer, {
            position: 'absolute', 
            opacity: 1,
            width: "110vw", 
            height: "110vh", 
            zIndex: '4',
          });
          gsap.set(oldContainer, {
            marginTop: '4.5%',
            marginRight: '55%',
            ease: "power1.inOut",
          });

          Flip.from(state, {
            duration: 1,
            nested: true,
            ease: "power1.inOut",
            absolute: true,
            });
            detailsHandle()
      }

      const CloseDetails = async() => {
        const oldContainer = document.querySelector('.expanded_green');
        const state = Flip.getState(oldContainer);
        gsap.set(oldContainer, {
          width: "calc(1rem + 15vw)",
          height: "calc(1rem + 15vw)",
          marginTop: '0%',
          marginLeft: '0%',
          marginRight: '0%',
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
        toggleDetails()
      }

  const backstyle = {
    backgroundImage: `linear-gradient(to bottom left, ${primary_color} 40%, ${secondary_color} 115%)`
  }
  
  return (
      <div class="CR_main_container">
          <div class="CR_card_container">

                      <div class='expanded_green' style={backstyle}>
                      {activeCard === "crypto" ? 
                          <div className='CR_button_close'> 
                            <Button text="CLOSE" fun={CloseDetails}/> 
                          </div>
                            : null
                      }


                      </div>
                      { activeCard === "crypto" ? null : 
                        <div class="container">
                            <div class="card">
                                <div class="front">
                                    <img src={logo} alt="logo" className="logo"></img>
                                </div>
                                <div class="back" style={backstyle}>
                                  <img src={svg} alt="" class="pp"  />
                                  <Button text="See More" fun={ExpandCard}/>
                                </div>
                            </div>
                        </div>
                      }
          </div>

                  <div className="CR_titleContainer">
                    <div className="underline"></div>
                    <h2 className="title_text">Test</h2>
                    <h2 className="title_text_bigger">Test</h2>
                  </div>
                  
                      
      </div>

            

            


  )
}

export default CryptoCard;




















        
        
        
        
        